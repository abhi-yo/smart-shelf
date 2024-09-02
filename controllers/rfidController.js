const Rfid = require("../models/rfidModel");

// to get all saved RFID tags
const getAllRfidTags = async (req, res) => {
  try {
    const rfidTags = await Rfid.find().sort({ timestamp: -1 });
    res.json(rfidTags);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving RFID tags" });
  }
};

module.exports = { getAllRfidTags };
