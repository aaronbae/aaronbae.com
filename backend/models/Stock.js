const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let History = new Schema({
  date: {
    type: Date,
    default: new Date('1900'),
    unique: true
  },
  open: {
    type: Number,
    default: -1
  },
  high: {
    type: Number,
    default: -1
  },
  low: {
    type: Number,
    default: -1
  },
  close: {
    type: Number,
    default: -1
  },
  adj_close: {
    type: Number,
    default: -1
  },
  volume: {
    type: Number,
    default: -1
  }
})

let Stock = new Schema({
  ticker: {
    type: String,
    required: true,
    unique: true
  },
  updated: {
    type: Date,
    default: new Date('1900')
  },
  history: {
    type: [ History ],
    default: []
  }
},{
    collection: 'stocks'
});


module.exports = mongoose.model('Stock', Stock);