const mongoose = require("mongoose");

const bloodRequestSchema = new mongoose.Schema(
  {
    patientName: { type: String, required: true },
    patientAge: { type: Number, required: true },
    gender: { type: String, required: true, enum: ["Male", "Female"] },
    reason: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    bloodUnit: { type: Number, required: true },
    status: {
      type: String,
      default: "Pending",
      enum: ["Pending", "Approved", "Rejected"],
    },
  },
  { timestamps: true }
);

const BloodRequest = mongoose.model("BloodRequest", bloodRequestSchema);
module.exports = BloodRequest;
