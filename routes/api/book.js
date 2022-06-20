var express = require("express");
var router = express.Router();
const BookServices = require("../../services/BookServices");

/**
 * @swagger
 * /api/books:
 *   get:
 *     tags:
 *       - Book
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of books.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                type: object
 *                properties:
 *                  _id:
 *                    type: string
 *                  title:
 *                    type: string
 *                  price:
 *                    type: number
 */

router.get("/books", async (req, res, next) => {
  const books = await BookServices.getAllBooks();
  res.send(books);
});

/**
 * @swagger
 * /api/book/:id:
 *   get:
 *     tags:
 *       - Book
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of books.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                type: object
 *                properties:
 *                  _id:
 *                    type: string
 *                  title:
 *                    type: string
 *                  price:
 *                    type: number
 */

router.get("/book/:id", async function (req, res, next) {
  const id = req.params.id;

  const book = await BookServices.getBookById(id);

  if (!book) res.sendStatus(400);

  console.log("🚀 ~ file: book.js ~ line 16 ~ book", book);

  res.send(book);
});

module.exports = router;
