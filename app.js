var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const database = require("./database/connect");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const apiRouter = require("./routes/api/index");
console.log("🚀 ~ file: app.js ~ line 14 ~ apiRouter", apiRouter);

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Setup Swagger API documentation
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API for JSONPlaceholder",
    version: "1.0.0",
    description:
      "This is a REST API application made with Express. It retrieves data from JSONPlaceholder.",
    license: {
      name: "Licensed Under MIT",
      url: "https://spdx.org/licenses/MIT.html",
    },
    contact: {
      name: "Phạm Trung Nam",
      url: "https://fb.com/namphamtrung12",
    },
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Development server",
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ["./routes/api/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api", apiRouter);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// IIFE
(async () => {
  await database.connectDatabase();
})();

module.exports = app;
