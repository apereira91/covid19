const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date, 
    default: Date.now
  },
  infected: {
    type: Boolean,
    default: false
  },
  checks: [
    {type: Schema.Types.ObjectId, ref:'Check'}
  ]
});

const User = mongoose.model("users", UserSchema);

module.exports = User;