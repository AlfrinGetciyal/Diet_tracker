const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const dietPlanRoutes = require("./routes/dietPlanRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Ensure this is here to parse JSON bodies

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Routes
app.use("/api/users", userRoutes); // Optional
app.use("/api/auth", authRoutes); // Important for signup
app.use("/api/dietPlan", dietPlanRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
