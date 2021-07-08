var mongoose = require('mongooose');
var schema = mongoose.Schema;
var articleSchema = new Schema(
  {
    title: String,
    description: String,
    tags: [String],
    likes: { type: Number, default: 0 },
    author: Schema.Types.ObjectId,
    comments: [Schema.Types.ObjectId],
  },
  { timestamps: true }
);

module.exports = mangoose.model('Article', articleSchema);
