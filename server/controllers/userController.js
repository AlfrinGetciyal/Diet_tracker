const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const user = new User(req.body); // Create a new user from the request body
    const savedUser = await user.save(); // Save the user to the database
    res.status(201).json(savedUser); // Respond with the saved user
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(400).json({ error: err.message }); // Handle errors
  }
};

module.exports = { createUser };
