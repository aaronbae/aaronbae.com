const express = require('express');
const app = express();
const fileRoutes = express.Router();

// AWS S3 related modules
const AWS = require('aws-sdk');
const fs = require('fs');
var multer = require('multer')

//configuring the AWS environment
AWS.config.update({
  accessKeyId: "AKIAI3QF7QWEEFXFTEEA",
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});
var s3 = new AWS.S3();
var storage = multer.diskStorage({
  destination: function (req, file, next) {
    next(null, 'temp')
  },
  filename: function (req, file, next) {
    next(null, Date.now() + "-" + file.originalname)
  }
})
var upload = multer({storage: storage}).single("file")

// Require Business model in our routes module
let File = require('../models/File');
const { db } = require('../models/File');

// Uploading files
fileRoutes.route('/upload').post(function (req, res) {
  // temporarily save the file to local
  upload(req, res, function(err){
    if(err instanceof multer.MulterError) {
      console.log(err)
      return res.status(500).json(err)
    } else if (err) {
      console.log(err)
      return res.status(500).json(err)
    }
    // Read in the Temp File
    fs.readFile(req.file.path, (err, data) => {
      if (err) {
        console.log(err)
        return res.status(500).json(err)
      }
      const params = {
        Bucket: 'aaronbaebucket',
        Key: req.file.filename,
        Body: JSON.stringify(data)
      }
      // Upload to AWS
      s3.upload(params, function(s3Err, data) {
        if (s3Err) {
          console.log(s3Err)
          return res.status(500).json(s3Err)
        }
        console.log(`File uploaded successfully at ${data.Location}`)
        
        // Record to Mongo
        let file = new File({
          path: data.Location,
          type: "image", // TODO: should be dependant on what the file really is
          createtime: Date.now()
        });
        file.save()
        .then(file => {
          // delete the temp file
          fs.unlink(req.file.path, function(err) {
            if (err) {
              return res.status(500).send(err)
            }
            // SUCCESS
            return res.status(200).json({'file': 'file added successfully'});
          })
        })
        .catch(err => {
          return res.status(500).send("unable to save to database");
        });
      });
    })
  })
});

// Get list of all file images # Just for Admin Purposes #
fileRoutes.route('/').get(function (req, res) {
  File.find(function (err, files){
  if(err){
    console.log(err);
  }
  else {
    res.json(files);
  }
});
});

// Retrieving images from S3
fileRoutes.route('/:id').get(function (req, res) {
  //req.params.id
  File.find(function (err, files){
  if(err){
    console.log(err);
  }
  else {
    res.json(files);
  }
});
});

// Defined delete | remove | destroy route
fileRoutes.route('/delete/:id').get(function (req, res) {
  File.findByIdAndRemove({_id: req.params.id}, function(err, file){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = fileRoutes;