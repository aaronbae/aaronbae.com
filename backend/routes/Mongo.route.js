const express = require('express');
const mongoose = require('mongoose');
const mongoRoutes = express.Router();

mongoRoutes.route('/').get(async function (req, res) {  
  if(mongoose.connection.readyState != 1){
    console.log(`/db/ : Failed to fetch db information!`)
    console.log(error)
    res.status(500)
    res.json({message: "Failed to fetch db information!"})
  } else {
    const db = mongoose.connection.db
    let result = {}
    const collections = await db.listCollections().toArray()
    const stats = await db.stats()
    
    const collection_info = await Promise.all(collections.map(async collection=>{
      const current_collection = db.collection(collection.name)
      const n = await current_collection.countDocuments()
      const collection_stats = await current_collection.stats()
      
      const sample_doc = await current_collection.findOne()
      const keys = await Promise.all(Object.keys(sample_doc).filter(item => item !== "_id" && item !== "__v").map(async k => {
        // shallow key analysis
        const val = sample_doc[k]
        if(Array.isArray(val) && typeof val[0] === "object"){
          let temp = {}
          temp[k] = Object.keys(val[0]).filter(item => item !== "_id" && item !== "__v")
          const average_count = await current_collection.aggregate([
            {$unwind: `$${k}`}, 
            {$group : {_id: "$_id", count: { $sum: 1 }}}, 
            {$group: {_id: null, average: {$avg: "$count"}}} 
          ]).toArray()
          temp.average_count = average_count[0].average
          return temp
        }
        return k
      }))
      
      return {
        name: collection.name,
        n: n,
        storage: collection_stats.size,
        reserved: collection_stats.storageSize,
        keys: keys
      }
    }))
    
    result.name = stats.db
    result.num_collections = collection_info.length
    result.collections = collection_info
    result.total_storage = stats.dataSize
    result.total_reserved = stats.storageSize
    result.machine_memory_used = stats.fsUsedSize
    result.machine_memory_total = stats.fsTotalSize

    console.log("/db/ : successfully fetched db information!")
    res.status(200);
    res.json(result)
  }
})

module.exports = mongoRoutes;