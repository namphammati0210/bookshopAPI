const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  title: String,
  category: String,
  author: String,
  description: String,
  price: Number,
});

// tạo model
const User = mongoose.model("User", UserSchema);

module.exports = User;
