const BookModel = require("../database/models/Book");

const findAllBooks = async () => {
  try {
    const books = await BookModel.find({});
    return books;
  } catch (error) {
    console.log(
      "🚀 ~ file: BookRepository.js ~ line 25 ~ findAll ~ error",
      error
    );
  }
};

const findBookById = async (id) => {
  try {
    const book = await BookModel.findById(id);
    return book;
  } catch (error) {
    console.log(
      "🚀 ~ file: BookRepository.js ~ line 33 ~ findBookById ~ error",
      error
    );
  }
};

const sum = (a, b) => a + b;

module.exports = {
  findAllBooks,
  findBookById,
  sum,
};
