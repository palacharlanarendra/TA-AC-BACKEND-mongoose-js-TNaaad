var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AddressSchema = new Schema(
  {
    village: String,
    city: { type: String, lowercase: true },
    state: { type: String, lowercase: true },
    pin: Number,
    user: Schema.Types.ObjectId,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Address', AddressSchema);
