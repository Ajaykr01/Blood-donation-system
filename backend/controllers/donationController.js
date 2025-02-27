const Donation = require("../models/donation");
const mongoose = require("mongoose");

const donateBlood = async (req, res) => {
  try {
    const { name, email, phone, bloodGroup, gender, age, location, parentId } =
      req.body;
    if (
      !name ||
      !email ||
      !phone ||
      !bloodGroup ||
      !gender ||
      !age ||
      !location
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    const donation = new Donation({
      parentId,
      name,
      email,
      phone,
      bloodGroup,
      gender,
      age,
      location,
    });

    await donation.save();

    res.status(201).json({
      success: true,
      message: "Donation Submitted Successfully!",
      donation,
    });
  } catch (error) {
    console.log(error);
  }
};

const getDonorHistory = async (req, res) => {
  try {
    const { email } = req.params;

    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email is required" });
    }

    const parentId = new mongoose.Types.ObjectId(email);
    const donations = await Donation.find({ parentId });

    if (!donations.length) {
      return res
        .status(404)
        .json({ success: false, message: "No donation history found" });
    }
    res.status(200).json({
      success: true,
      message: "Donar History Fetched Successfully",
      donarData: donations,
    });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ success: false, message: "Error fetching donar history" });
  }
};

const updateDonationController = async (req, res) => {
  try {
    const { donationId } = req.params;
    const updateData = req.body;

    if (!donationId) {
      return res
        .status(400)
        .json({ success: false, message: "Donation ID is required" });
    }

    const existingDonation = await Donation.findById(donationId);
    if (!existingDonation) {
      return res
        .status(404)
        .json({ success: false, message: "Donation record not found" });
    }

    updateData.createdAt = existingDonation.createdAt;

    // const objectId = new mongoose.Types.ObjectId(donationId);
    const updatedDonation = await Donation.findByIdAndUpdate(
      donationId,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedDonation) {
      return res
        .status(404)
        .json({ success: false, message: "Failed to update donation record" });
    }

    return res.status(200).send({
      success: true,
      message: "Donation history updated successfully",
      updatedData: updatedDonation,
    });
  } catch (error) {
    console.log("Error updating donation", error.message);
    return res.status(500).send({
      success: false,
      seccess: "Error while updating donation history",
      error,
    });
  }
};

const deleteDonationController = async (req, res) => {
  try {
    const { donationId } = req.params;

    if (!donationId) {
      return res
        .status(400)
        .json({ success: false, message: "Donation ID is required" });
    }

    const objectId = new mongoose.Types.ObjectId(donationId);
    const deletedDonation = await Donation.findByIdAndDelete(objectId);

    if (!deletedDonation) {
      return res
        .status(404)
        .json({ success: false, message: "Donation record not found" });
    }

    return res.status(200).send({
      success: true,
      message: "Donation history deleted successfully",
      deletedData: deletedDonation,
    });
  } catch (error) {
    console.log("Error deleting donation", error.message);
    return res.status(500).send({
      success: false,
      seccess: "Error while deleting donation history",
      error,
    });
  }
};

module.exports = {
  donateBlood,
  getDonorHistory,
  updateDonationController,
  deleteDonationController,
};
