const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const colors = require("colors");
const connectDB = require("./config/db");
const authRoute = require("./routes/authRoutes");
const donationRoutes = require("./routes/donationRoutes");

dotenv.config();

connectDB();

//rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/donation", require("./routes/donationRoutes"));

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Node Server Running on Port ${process.env.PORT}`.bgBlue);
});
