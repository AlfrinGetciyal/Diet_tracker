const bcrypt = require("bcryptjs");
const AuthUser = require("../models/AuthUser");

const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
    }

    // Check if the user already exists
    const existingUser = await AuthUser.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
    const newUser = new AuthUser({ email, password });

    // Save the user to the database
    const savedUser = await newUser.save();
    return res.status(201).json(savedUser);
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

// New login handler
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
    }

    // Find user by email
    const user = await AuthUser.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Successful login
    return res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { registerUser, loginUser };
