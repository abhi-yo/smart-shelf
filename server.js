const express = require("express");
const mongoose = require("mongoose");
const { initSerialPort } = require("./services/serialService");
const rfidRoutes = require("./routes/rfidRoutes");
const { connectDB } = require("./config/dbConfig");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static("public"));

initSerialPort();
connectDB();

app.use("/rfid-tags", rfidRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
