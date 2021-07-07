var mongoose = require('mongooose');

var schema = mongoose.Schema;
var articleSchema = new Schema({
  title: String,
  description: String,
});

module.exports = mangoose.model('Article', articleSchema);
