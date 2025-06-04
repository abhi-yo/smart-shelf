const portPath = process.env.SERIAL_PORT || "/dev/cu.usbserial-10";
const baudRate = parseInt(process.env.BAUD_RATE || "9600", 10);

module.exports = { portPath, baudRate };
