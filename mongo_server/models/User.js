const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let User = new Schema({
  id: {
    type: Number
  },
  login_id: {
    type: String
  },
  login_pass: {
    type: String
  }
},{
    collection: 'user'
});

module.exports = mongoose.model('User', User);