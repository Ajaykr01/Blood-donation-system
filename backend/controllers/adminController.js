const userModel = require("../models/userModel");
const Donation = require("../models/donation");
const BloodRequest = require("../models/bloodRequest");

const getDonarsListController = async (req, res) => {
  try {
    const donarData = await userModel
      .find({ role: "donar" })
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      totalCount: donarData.length,
      message: "Donar List Fetched Successfully",
      donarData,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error in donar-list API",
      error,
    });
  }
};

const deleteDonarController = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: "Record Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error while deleting",
      error,
    });
  }
};

const getPatientsListController = async (req, res) => {
  try {
    const patientData = await userModel
      .find({ role: "patient" })
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      totalCount: patientData.length,
      message: "Patient List Fetched Successfully",
      patientData,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error in patient-list API",
      error,
    });
  }
};

const getHospitalListController = async (req, res) => {
  try {
    const hospitalData = await userModel
      .find({ role: "hospital" })
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      totalCount: hospitalData.length,
      message: "Hospital List Fetched Successfully",
      hospitalData,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error in hospital-list API",
      error,
    });
  }
};

const getDonationHistory = async (req, res) => {
  try {
    const donations = await Donation.find({}).sort({ createdAt: -1 });

    if (!donations.length) {
      return res
        .status(404)
        .json({ success: false, message: "No donation history found" });
    }

    res.status(200).json({
      success: true,
      message: "All Donations History Fetched Successfully",
      donationData: donations,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching donation history" });
  }
};

const updateDonationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["Pending", "Approved", "Rejected"].includes(status)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid status" });
    }

    const updatedDonation = await Donation.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedDonation) {
      return res
        .status(404)
        .json({ success: false, message: "Donation not found" });
    }

    res.status(200).json({
      success: true,
      message: `Donation status updated to ${status}`,
      updatedDonation,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error updating donation status" });
  }
};

const getBloodRequests = async (req, res) => {
  try {
    const requests = await BloodRequest.find({}).sort({ createdAt: -1 });

    if (!requests.length) {
      return res
        .status(404)
        .json({ success: false, message: "No requests found" });
    }

    res.status(200).json({
      success: true,
      message: "Blood Requests Fetched Successfully",
      requestsData: requests,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching blood requests" });
  }
};

module.exports = {
  getDonarsListController,
  getDonationHistory,
  deleteDonarController,
  getPatientsListController,
  getHospitalListController,
  updateDonationStatus,
  getBloodRequests,
};
