const express = require('express');
const app = express();
const postRoutes = express.Router();

// Require Business model in our routes module
let Post = require('../models/Post');

// Defined store route
postRoutes.route('/add').post(function (req, res) {
  let post = new Post(req.body);
  post.save()
    .then(post => {
      res.status(200).json({'post': 'post in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
postRoutes.route('/').get(function (req, res) {
    Post.find(function (err, posts){
    if(err){
      console.log(err);
    }
    else {
      console.log(posts);
      res.json(posts);
    }
  });
});

// Defined get data with specific id route
postRoutes.route('/:id').get(function (req, res) {
  Post.findById(req.params.id, function (err, post){
    if(err){
      console.log(err);
    }
    else {
      console.log("HERE IT IS");
      console.log(post);
      res.json(post);
    }
  });
});

// Defined edit route
postRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Post.findById(id, function (err, post){
      res.json(post);
  });
});

//  Defined update route
postRoutes.route('/update/:id').post(function (req, res, next) {
    console.log("REQUEST RECEIVED FOR ID: "+req.params.id.toString())
    Post.findById(req.params.id, function(err, post) {
    if (!post)
      return next(new Error('Could not load Document'));
    else {
        console.log(req.body)
        post.title = req.body.title;
        post.content = req.body.content;
        post.tags = req.body.tags.map(Function.prototype.call, String.prototype.trim);
        post.updatetime = Date.now();

        post.save().then(post => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
postRoutes.route('/delete/:id').get(function (req, res) {
    Post.findByIdAndRemove({_id: req.params.id}, function(err, post){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = postRoutes;