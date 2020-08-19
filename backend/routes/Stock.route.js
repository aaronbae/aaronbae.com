const express = require('express');
const userRoutes = express.Router();
let Stock = require('../models/Stock');

// GET: latest OHLC
userRoutes.route('/:id').get(function (req, res) {
  let start = new Date()
  let end = new Date()
  start.setDate(end.getDate() - 1)
  if("start" in req.query && Number.isInteger(parseInt(req.query.start))){
    start = new Date(req.query.start)
    console.log(start)
  }
  if("end" in req.query && Number.isInteger(parseInt(req.query.end))){
    end = new Date(req.query.start)
    console.log(end)
  }
  Stock.find({ 
    ticker: req.params.id.toString(), 
    "history.date": {
      "$gte": start,
      "$lte": end
    } 
  }, 
  function (err, stock) {
    if (err) {
      console.log(`/stock/${req.params.id.toString()} : Failed!`)
      console.log(err)
      res.json(err);
    }
    else {
      console.log(`/stock/${req.params.id.toString()} : Successfully returned!`)
      res.json({
        stock: stock
      });
    }
  });
});

module.exports = userRoutes;