const express = require("express");
const {
  donateBlood,
  getDonorHistory,
  deleteDonationController,
} = require("../controllers/donationController");
const router = express.Router();

router.post("/donate-blood", donateBlood);
router.get("/donation-history/:email", getDonorHistory);
router.delete("/delete-donation-history/:donationId", deleteDonationController);

module.exports = router;
