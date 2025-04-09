const express = require("express");

const {
  bloodRequesController,
  getBloodRequestsController,
  updateBloodRequestStatus,
  getBloodRequestStats,
} = require("../controllers/bloodRequestController");
const router = express.Router();

router.post("/request-blood", bloodRequesController);
router.get("/blood-requests", getBloodRequestsController);
router.put("/update-request-status/:id", updateBloodRequestStatus);
router.get("/stats", getBloodRequestStats);

module.exports = router;
