const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Post = new Schema({
  id: {
    type: Number
  },
  author: {
    type: Number
  },
  title: {
    type: String
  },
  content: {
    type: String
  }
},{
    collection: 'posts'
});

module.exports = mongoose.model('Post', Post);