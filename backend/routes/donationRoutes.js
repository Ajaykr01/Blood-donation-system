const express = require("express");
const {
  donateBlood,
  getDonorHistory,
  deleteDonationController,
  updateDonationController,
} = require("../controllers/donationController");
const router = express.Router();

router.post("/donate-blood", donateBlood);
router.get("/donation-history/:email", getDonorHistory);
router.delete("/delete-donation-history/:donationId", deleteDonationController);
router.put("/update-donation-history/:donationId", updateDonationController);

module.exports = router;
