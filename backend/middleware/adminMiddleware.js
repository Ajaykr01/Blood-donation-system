const userModal = require("../models/userModel");

module.exports = async (req, res, next) => {
  try {
    const user = await userModal.findById(req.body.userId);

    if (user?.role !== "admin") {
      return res.status(401).send({
        success: false,
        message: "Auth Failed",
      });
    } else {
      next();
    }
  } catch (error) {
    return res.status(401).send({
      success: false,
      message: "Auth Failed, Admin API",
      error,
    });
  }
};
