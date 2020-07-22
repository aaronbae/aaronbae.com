const express = require('express');
const app = express();
const defaultRoutes = express.Router();

// 
defaultRoutes.route('/').get(function (req, res) {
  res.send("HELLO WORLD FROM NEW DEFAULT.ROUTE.JS");
});

/*
defaultRoutes.route('/add').post(function (req, res) {
  let post = new Post(req.body);
  post.save()
    .then(post => {
      res.status(200).json({'post': 'post in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});
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
*/

module.exports = defaultRoutes;