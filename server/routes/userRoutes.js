const express = require("express");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const router = express.Router();

// User Registration Route
router.post("/register", async (req, res) => {
  try {
    const { email, password, age, gender, weight, height, activity, goal } =
      req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists." });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      email,
      password: hashedPassword,
      age,
      gender,
      weight,
      height,
      activity,
      goal,
    });

    // Save user to the database
    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
