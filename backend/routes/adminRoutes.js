const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  getDonarsListController,
  getHospitalListController,
  deleteDonarController,
  getPatientsListController,
  getDonationHistory,
  updateDonationStatus,
  getBloodRequests,
} = require("../controllers/adminController");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

router.get(
  "/donar-list",
  authMiddleware,
  adminMiddleware,
  getDonarsListController
);

router.get("/patient-list", getPatientsListController);
router.get("/donation-history", getDonationHistory);
router.put("/update-donation-status/:id", updateDonationStatus);
router.get("/blood-requests", getBloodRequests);

router.get(
  "/hospital-list",
  authMiddleware,
  adminMiddleware,
  getHospitalListController
);

router.delete(
  "/delete-donar/:id",
  authMiddleware,
  adminMiddleware,
  deleteDonarController
);
module.exports = router;
