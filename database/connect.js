require("dotenv").config();
const mongoose = require("mongoose");

let db;

const connectDatabase = () => {
  db = mongoose.connect(
    process.env.DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err) {
      if (err) throw err;
      console.log("Successfully connected");
    }
  );
};

const disconnectDatabase = async () => {
  // Disconnect from database
  mongoose.connection.close(function () {
    console.log(
      "Mongoose default connection disconnected through app termination"
    );
  });
};

module.exports = {
  connectDatabase,
  disconnectDatabase,
};
