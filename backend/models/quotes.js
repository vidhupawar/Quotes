const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  text: String,
  author: String,
});

const Quote = mongoose.model('Quote', quoteSchema);
module.exports = Quote;
