var mongoose = require('mongooose');
var schema = mongoose.Schema;
var commentSchema = new Schema(
  {
    content: String,
    author: Schema.Types.ObjectId,
    article: Schema.Types.ObjectId,
  },
  { timestamps: true }
);

module.exports = mangoose.model('Article', commentSchema);
