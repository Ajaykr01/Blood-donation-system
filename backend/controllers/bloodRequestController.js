const BloodRequest = require("../models/bloodRequest");
const Donation = require("../models/donation");

const bloodRequesController = async (req, res) => {
  try {
    const { patientName, patientAge, gender, reason, bloodGroup, bloodUnit } =
      req.body;

    if (
      !patientName ||
      !patientAge ||
      !gender ||
      !reason ||
      !bloodGroup ||
      !bloodUnit
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const newRequest = new BloodRequest({
      patientName,
      patientAge,
      gender,
      reason,
      bloodGroup,
      bloodUnit,
      status: "Pending",
    });
    await newRequest.save();
    res.status(201).json({
      success: true,
      message: "Blood request submitted successfully!",
      request: newRequest,
    });
  } catch (error) {
    console.error("Error submitting blood request:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const getBloodRequestsController = async (req, res) => {
  try {
    const requests = await BloodRequest.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      requests,
      message: "Blood requests fetched successfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching requests", error });
  }
};

const updateBloodRequestStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, bloodUnit } = req.body;

    if (!["Pending", "Approved", "Rejected"].includes(status)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid status" });
    }

    const bloodRequest = await BloodRequest.findById(id);
    if (!bloodRequest) {
      return res
        .status(404)
        .json({ success: false, message: "Request not found" });
    }

    if (status === "Approved") {
      const { bloodGroup } = bloodRequest;

      // Get total approved donations for the requested blood group
      const totalStock = await Donation.aggregate([
        {
          $match: { bloodGroup, status: "Approved" },
        },
        {
          $group: {
            _id: "$bloodGroup",
            totalUnits: { $sum: "$unit" },
          },
        },
      ]);

      const availableStock =
        totalStock.length > 0 ? totalStock[0].totalUnits : 0;

      if (availableStock < bloodUnit) {
        return res.status(400).json({
          success: false,
          message: `Not enough stock available for ${bloodGroup}. Available: ${availableStock} ML`,
        });
      }

      // Deduct units properly across multiple donations
      let remainingToDeduct = bloodUnit;
      const donations = await Donation.find({
        bloodGroup,
        status: "Approved",
      }).sort({ createdAt: 1 });

      for (let donation of donations) {
        if (remainingToDeduct <= 0) break;

        let deductAmount = Math.min(donation.unit, remainingToDeduct);
        donation.unit -= deductAmount;
        remainingToDeduct -= deductAmount;

        await donation.save();
      }
    }

    // Update request status
    bloodRequest.status = status;
    await bloodRequest.save();

    res.status(200).json({
      success: true,
      message: `Request status updated to ${status}, ${bloodRequest.bloodUnit} ML deducted from stock.`,
      updatedRequest: bloodRequest,
    });
  } catch (error) {
    console.error("Error updating status", error);
    res.status(500).json({ success: false, message: "Error updating status" });
  }
};

const getBloodRequestStats = async (req, res) => {
  try {
    const total = await BloodRequest.countDocuments();
    const pending = await BloodRequest.countDocuments({ status: "Pending" });
    const approved = await BloodRequest.countDocuments({ status: "Approved" });
    const rejected = await BloodRequest.countDocuments({ status: "Rejected" });

    res.status(200).json({
      success: true,
      stats: { total, pending, approved, rejected },
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching blood request statistics",
    });
  }
};
module.exports = {
  bloodRequesController,
  getBloodRequestsController,
  updateBloodRequestStatus,
  getBloodRequestStats,
};
