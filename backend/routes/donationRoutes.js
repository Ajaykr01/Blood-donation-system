const express = require("express");
const {
  donateBlood,
  getDonorHistory,
} = require("../controllers/donationController");
const router = express.Router();

router.post("/donate-blood", donateBlood);
router.get("/donation-history/:email", getDonorHistory);

module.exports = router;
