const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
const { portPath, baudRate } = require("../config/serialConfig");
const { saveRfidTag } = require("./rfidService");

// Initialize SerialPort
const initSerialPort = () => {
  const serialPort = new SerialPort({ path: portPath, baudRate: baudRate });
  const parser = serialPort.pipe(new ReadlineParser({ delimiter: "\n" }));

  serialPort.on("open", () => {
    console.log(`Serial port ${portPath} is open`);
  });

  serialPort.on("error", (err) => {
    if (err.message.includes("busy")) {
      console.error(
        "Serial port is already in use. Close other programs using it."
      );
    } else {
      console.error(`Serial port error: ${err.message}`);
    }
  });

  // Listen for RFID readings from Arduino
  parser.on("data", (data) => {
    console.log(`RFID Tag: ${data.trim()}`);
    saveRfidTag(data);
  });
};

module.exports = { initSerialPort };
