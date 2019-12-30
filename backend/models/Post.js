const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Post = new Schema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  updatetime: {
    type: Date,
    default: Date.now
  },
  createtime: {
    type: Date,
    default: Date.now
  },
  tags: {
    type: Array
  },
  public: {
    type: Boolean
  }
},{
    collection: 'posts'
});

module.exports = mongoose.model('Post', Post);