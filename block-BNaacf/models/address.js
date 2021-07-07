var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AddressSchema = new Schema({
  village: String,
  city: String,
  state: String,
  pincode: Number,
  user: Schema.Types.ObjectId,
});
