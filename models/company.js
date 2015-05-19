var mongoose = require('mongoose');

var CompanySchema = new mongoose.Schema({
  name: String,
  description: String,
  location: String,
  founded: Date,
  stockTicker: String
});

module.exports = mongoose.model('Company', CompanySchema);