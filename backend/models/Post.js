const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Post = new Schema({
  _id: {
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
  },
  createtime: {
    type: Date
  },
  tag: {
    type: String
  }    
},{
    collection: 'posts'
});

module.exports = mongoose.model('Post', Post);