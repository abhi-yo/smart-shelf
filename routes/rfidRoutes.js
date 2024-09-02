const express = require("express");
const { getAllRfidTags } = require("../controllers/rfidController");

const router = express.Router();

router.get("/", getAllRfidTags);

module.exports = router;
