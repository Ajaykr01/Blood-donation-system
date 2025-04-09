const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema(
  {
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    unit: { type: Number, required: true },
    location: { type: String, required: true },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Donation = mongoose.model("Donation", donationSchema);
module.exports = Donation;
