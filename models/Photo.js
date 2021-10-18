const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const PhotoSchema = new Schema({
    Title: String,
    Description: String,
   Image: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  }
});

const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;