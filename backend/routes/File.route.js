const express = require('express');
const app = express();
const userRoutes = express.Router();

// Require Business model in our routes module
let File = require('../models/File');

// Defined store route
userRoutes.route('/add').post(function (req, res) {
  let file = new File(req.body);
  file.save()
    .then(user => {
      res.status(200).json({'file': 'file added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
userRoutes.route('/').get(function (req, res) {
    User.find(function (err, users){
    if(err){
      console.log(err);
    }
    else {
      res.json(users);
    }
  });
});

// Defined delete | remove | destroy route
userRoutes.route('/delete/:id').get(function (req, res) {
  User.findByIdAndRemove({_id: req.params.id}, function(err, user){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = userRoutes;