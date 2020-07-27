const express = require('express');
const postRoutes = express.Router();
let Post = require('../models/Post');
var async = require("async")
let POSTS_PER_PAGE = 10;

// Defined store route
postRoutes.route('/add/').post(function (req, res) {
  let post = new Post(req.body);
  post.save()
    .then(post => {
      console.log(`/post/add : Successfully added the post!`)
      res.status(200).json({
        message: 'post in added successfully',
        post: post
      });
    })
    .catch(err => {
      console.log(`/post/add : Failed!`)
      console.log(err)
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
postRoutes.route('/public').get(function (req, res) {
  let skip = 0
  if("skip" in req.query && Number.isInteger(parseInt(req.query.skip))){
    skip = Math.round(parseInt(req.query.skip)/POSTS_PER_PAGE)*POSTS_PER_PAGE
  }
    
  var fetch_query = function(callback) {
    Post.find({public: true})
      .sort({createtime: 'desc'})
      .skip(skip)
      .limit(POSTS_PER_PAGE)
      .exec(function(err, posts){
        if(err){ 
          callback(err, null) 
        } else {
          callback(null, posts)
        }
      });
  }
  var count_query = function(callback) {
    Post.count({public: true}, function(err, posts){
      if(err){
        callback(err, null)
      } else {
        callback(null, posts)
      }
    })
  }
  async.parallel([fetch_query, count_query], function(err, results){
    if (err) {
      console.log(`/post/public : Failed!`)
      console.log(err);
      res.status(400).send("unable to find posts")
    }
    console.log(`/post/public : Successfully fetched ${results[0].length} posts!`);
    res.json(
      {
        posts: results[0], 
        total_count: results[1],
        page: Math.trunc(skip/POSTS_PER_PAGE) + 1,
        total_pages: Math.ceil(results[1] / POSTS_PER_PAGE),
        skip: skip
      }
    );
  })  
});

// Defined get data(index or listing) route
postRoutes.route('/').get(function (req, res) {
  Post.find({}, null,
    {
      sort: { createtime: 'desc' },
      limit: 10
    },
    function (err, posts) {
      if (err) {
        console.log(`/post/ : Failed!`)
        console.log(err);
      }
      else {
        console.log(`/post/ : Successfully fetched ${posts.length} posts!`)
        res.json(posts);
      }
    });
});

// Defined get data with specific id route
postRoutes.route('/:id').get(function (req, res) {
  Post.findById(req.params.id.toString(), function (err, post) {
    if (err) {
      console.log(`/post/${post._id} : Failed!`)
      console.log(err);
    }
    else {
      console.log(`/post/${post._id} : Successfully fetched the post!`)
      res.json(post);
    }
  });
});

//  Defined update route
postRoutes.route('/update/:id').post(function (req, res, next) {
  Post.findById(req.params.id, function (err, post) {
    if (!post)
      return next(new Error('Could not load Document'));
    else {
      post.title = req.body.title;
      post.content = req.body.content;
      post.tags = req.body.tags.map(Function.prototype.call, String.prototype.trim);
      post.public = req.body.public;
      post.updatetime = Date.now();

      post.save().then(post => {
        console.log(`/post/update/${post._id} : Successfully updated the post!`)
        res.json('Update complete');
      })
        .catch(err => {
          console.log(`/post/update/${post._id} : Failed!`)
          console.log(err);
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
postRoutes.route('/delete/:id').get(function (req, res) {
  Post.findByIdAndRemove({ _id: req.params.id }, function (err, post) {
    if (err) {
      console.log(`/post/delete/${post._id} : Failed!`)
      console.log(err)
      res.json(err);
    }
    else {
      console.log(`/post/delete/${post._id} : Successfully removed the post!`)
      res.json('Successfully removed');
    }
  });
});

module.exports = postRoutes;