const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let File = new Schema({
  path: {
    type: String
  },
  type: {
    type: String
  },
  createtime: {
    type: Date,
    default: Date.now
  }
},{
    collection: 'files'
});

module.exports = mongoose.model('File', File);