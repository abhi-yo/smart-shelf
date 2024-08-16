const express = require("express");
const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

const portPath = "/dev/cu.usbserial-10";

// Initialize SerialPort
const serialPort = new SerialPort({ path: portPath, baudRate: 9600 });
const parser = serialPort.pipe(new ReadlineParser({ delimiter: "\n" }));

// Middleware to parse JSON
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static("public"));

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost/smartshelf")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err.message);
  });

// Define RFID schema and model
const rfidSchema = new mongoose.Schema({
  tagId: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Rfid = mongoose.model("Rfid", rfidSchema);

// Endpoint to get all saved RFID tags
app.get("/rfid-tags", async (req, res) => {
  try {
    const rfidTags = await Rfid.find().sort({ timestamp: -1 }); // Sort by latest first
    res.json(rfidTags);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving RFID tags" });
  }
});

// Helper function to extract UID from RFID data
function extractUID(data) {
  const uidMatch = data.match(/Card UID:\s([A-F0-9\s]+)/);
  if (uidMatch && uidMatch[1]) {
    return uidMatch[1].trim(); // Extract and return the UID
  }
  return null;
}

// Listen for RFID readings from Arduino
parser.on("data", async (data) => {
  console.log(`RFID Tag: ${data.trim()}`);

  // Extract the UID from the incoming data
  const uid = extractUID(data);

  if (uid) {
    // Save only the UID to MongoDB
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
});

// Start Express server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Handle errors
serialPort.on("error", (err) => {
  if (err.message.includes("busy")) {
    console.error(
      "Serial port is already in use. Close other programs using it."
    );
  } else {
    console.error(`Serial port error: ${err.message}`);
  }
});

serialPort.on("open", () => {
  console.log(`Serial port ${portPath} is open`);
});
