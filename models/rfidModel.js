const mongoose = require("mongoose");

const rfidSchema = new mongoose.Schema({
  tagId: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Rfid = mongoose.model("Rfid", rfidSchema);

module.exports = Rfid;
