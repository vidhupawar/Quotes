const Quote = require('../models/quotes');

exports.getAllQuotes = async (req, res) => {
  const quotes = await Quote.find();
  res.json(quotes);
};

exports.createQuote = async (req, res) => {
  const newQuote = new Quote(req.body);
  const savedQuote = await newQuote.save();
  res.json(savedQuote);
};

exports.deleteQuote = async (req, res) => {
  const result = await Quote.findByIdAndDelete(req.params.id);
  res.json(result);
};

exports.updateQuote = async (req, res) => {
  const updatedQuote = await Quote.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedQuote);
};
