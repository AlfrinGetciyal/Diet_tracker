const User = require("../models/userModel");

exports.createAccount = async (req, res) => {
  try {
    const { email, password, gender, age, weight, height, activity } = req.body;

    const user = new User({
      email,
      password,
      gender,
      age,
      weight,
      height,
      activity,
    });

    await user.save();
    res.status(201).json({ message: "Account created successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating account", error: err.message });
  }
};
