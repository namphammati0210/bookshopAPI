const mongoose = require("mongoose");

const { Schema } = mongoose;

const BookSchema = new Schema({
  title: String,
  category: String,
  author: String,
  description: String,
  price: Number,
});

// tạo model
const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
