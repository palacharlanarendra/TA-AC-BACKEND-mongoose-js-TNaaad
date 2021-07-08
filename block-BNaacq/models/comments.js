var mongoose = require('mongooose');
var Articles = require('./articles');
var schema = mongoose.Schema;
var commentSchema = new Schema(
  {
    content: String,
    author: Schema.Types.ObjectId,
    article: Articles,
  },
  { timestamps: true }
);

module.exports = mangoose.model('Article', commentSchema);
