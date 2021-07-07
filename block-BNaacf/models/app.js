var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var addressSchema = new Schema(
  {
    village: String,
    city: String,
    state: String,
    pin: Number,
    user: Schema.Types.ObjectId,
  },
  { timestamps: true }
);
var userSchema = new Schema({
  favorites: ['swimming', 'carroms'],
  marks: [23, 24, 25],
});
