const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  age: { type: Number, required: true },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  gender: { type: String, required: true },
  activityLevel: { type: String, required: true },
  goal: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
