var mongoose = require('mongoose');

var Product = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: mongoose.Schema.ObjectId, ref: 'Author' },
  image: { type: },
  rating: { type: Number, min: 1, max: 10 },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', Product);
