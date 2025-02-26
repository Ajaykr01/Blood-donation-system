const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  getDonarsListController,
  getHospitalListController,
  deleteDonarController,
} = require("../controllers/adminController");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

router.get(
  "/donar-list",
  authMiddleware,
  adminMiddleware,
  getDonarsListController
);

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
