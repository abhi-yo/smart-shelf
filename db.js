const mongoose = require("mongoose");

const dbUri = "mongodb://localhost/smartshelf"; // Update with your MongoDB URI

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = db;
