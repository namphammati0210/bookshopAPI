const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const { Schema } = mongoose;

const BookSchema = new Schema({
  title: String,
  category: String,
  author: String,
  description: String,
  price: Number,
});

BookSchema.plugin(mongoosePaginate);

// tạo model
const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
