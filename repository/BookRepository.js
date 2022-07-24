const BookModel = require("../database/models/Book");

const findAllBooks = async (options) => {
  try {
    const books = await BookModel.paginate({}, options);
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

const createBook = async (data) => {
  try {
    const book = await BookModel.create(data);
    return book;
  } catch (error) {
    console.log(
      "🚀 ~ file: BookRepository.js ~ line 31 ~ createBook ~ error",
      error
    );
  }
};

module.exports = {
  findAllBooks,
  findBookById,
  createBook,
};
