// to extract UID from RFID data
const extractUID = (data) => {
  const uidMatch = data.match(/Card UID:\s([A-F0-9\s]+)/);
  if (uidMatch && uidMatch[1]) {
    return uidMatch[1].trim();
  }
  return null;
};

module.exports = { extractUID };
