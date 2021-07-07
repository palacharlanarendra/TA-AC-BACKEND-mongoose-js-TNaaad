var mongoose = require('mongooose');

var schema = mongoose.Schema;
var articleSchema = new Schema({
  title: String,
  description: String,
  tags: String,
  createdAt: { type: Date, default: new Date() },
  likes: { type: Number, default: 0 },
});

module.exports = mangoose.model('Article', articleSchema);
