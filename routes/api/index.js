var express = require("express");
let apiRouter = express.Router();

const bookRouter = require("./book");
const userRouter = require("./user");

apiRouter.use("/book", bookRouter);
apiRouter.use("/user", userRouter);

module.exports = apiRouter;
