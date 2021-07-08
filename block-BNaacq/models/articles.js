var mongoose = require('mongooose');
var Comments = require('./user');
var schema = mongoose.Schema;
var articleSchema = new Schema(
  {
    title: String,
    description: String,
    tags: [String],
    likes: { type: Number, default: 0 },
    author: Schema.Types.ObjectId,
    comments: Comments,
  },
  { timestamps: true }
);

module.exports = mangoose.model('Article', articleSchema);
