const { Schema, model } = require('mongoose');

const randomNumber = new Schema({    
  value: {
    type: Number,
    required: true
  },
  createdAt: {
    type: String,
    required: true
  }
});

module.exports = model('randomNumber', randomNumber);