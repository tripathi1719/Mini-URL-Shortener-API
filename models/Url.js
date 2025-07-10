const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortCode: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  expiryDate: { type: Date }, // optional
  clicks: { type: Number, default: 0 }, // for analytics
});

module.exports = mongoose.model('Url', urlSchema);
