const Donation = require("../models/donation");
const mongoose = require('mongoose');
const donateBlood = async (req, res) => {
  try {
    const { fullName, email, phone, bloodGroup, gender, age, location,parentId } =
      req.body;

    // Validate input
    if (
      !fullName ||
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
      fullName,
      email,
      phone,
      bloodGroup,
      gender,
      age,
      location,
    });

    // Save to MongoDB
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

//GET DONATOIN HISTORY
const getDonorHistory = async (req, res) => {
  try {
    const { email } = req.params;

    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email is required" });
    }
    const parentId = new mongoose.Types.ObjectId(email);
    const donations = await Donation.find({ parentId});
    console.log(donations)
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
    console.log(error.message)
    res
      .status(500)
      .json({ success: false, message: "Error fetching donar history" });
  }
};
//GET DONATOIN HISTORY
const getADonorHistory = async (req, res) => {
  try {
    const { email } = req.params;

    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email is required" });
    }

    const donations = await Donation.find({ email });

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
    res
      .status(500)
      .json({ success: false, message: "Error fetching donar history" });
  }
};
module.exports = { donateBlood, getDonorHistory };
