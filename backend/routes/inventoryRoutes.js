const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrganisationController,
  getOrgForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../controllers/inventoryController");

const router = express.Router();

//routes
// ADD INVENTORY || POST
router.post("/create-inventory", authMiddleware, createInventoryController);

// GET ALL BLOOD RECORDS
router.get("/get-inventory", authMiddleware, getInventoryController);

router.get(
  "/get-recent-inventory",
  authMiddleware,
  getRecentInventoryController
);

// GET HOSPITAL BLOOD RECORDS
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);

router.get("/get-donars", authMiddleware, getDonarsController);

router.get("/get-hospitals", authMiddleware, getHospitalController);

router.get("/get-organisation", authMiddleware, getOrganisationController);

router.get(
  "/get-organisation-for-hospital",
  authMiddleware,
  getOrgForHospitalController
);

module.exports = router;
