const Rfid = require("../models/rfidModel");
const { extractUID } = require("../utils/helpers");

// Save RFID Tag UID to MongoDB
const saveRfidTag = async (data) => {
  const uid = extractUID(data);

  if (uid) {
    try {
      const rfid = new Rfid({ tagId: uid });
      await rfid.save();
      console.log(`Saved RFID Tag UID: ${uid}`);
    } catch (err) {
      console.error(`Failed to save RFID Tag UID: ${err.message}`);
    }
  } else {
    console.log("No valid UID found in the data.");
  }
};

module.exports = { saveRfidTag };
