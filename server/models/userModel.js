const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
    activity: { type: String, required: true },
    filters: { type: [String], default: [] }, // Array of filters like "Vegetarian", "Vegan", etc.
    goal: { type: String, required: true }, // Weight Loss, Muscle Gain, Maintain Weight
    dietPlan: { type: Object, default: {} }, // The generated diet plan
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
