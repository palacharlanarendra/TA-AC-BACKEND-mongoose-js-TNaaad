var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  email: { type: String, lowercase: true },
  password: { type: String, min: 5, max: 15 },
  age: { type: Number, default: 0 },
  favourites: [String],
  marks: [Number],
  createdAt: { type: Date, default: Date.now },
});
