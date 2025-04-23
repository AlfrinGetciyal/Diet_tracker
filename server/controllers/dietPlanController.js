const User = require("../models/userModel");

const generateDietPlan = async (req, res) => {
  const { userId } = req.params; // userId from JWT
  const { goal, filters, userDetails } = req.body;

  try {
    // Fetch user from the database
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate calories based on activity level
    const calories =
      userDetails.activity === "high"
        ? 2500
        : userDetails.activity === "moderate"
        ? 2000
        : 1500;

    let meals = {
      breakfast: "Oatmeal with fruits",
      lunch: "Grilled chicken with quinoa and veggies",
      dinner: "Salmon with sweet potatoes and greens",
      snacks: "Nuts and yogurt",
    };

    let macros = {
      carbs: "50%",
      protein: "30%",
      fat: "20%",
    };

    // Adjust meals and macros based on filters
    if (filters.includes("Vegetarian")) {
      meals = {
        breakfast: "Avocado toast with spinach",
        lunch: "Vegetarian quinoa bowl",
        dinner: "Grilled tofu with roasted veggies",
        snacks: "Hummus with carrots",
      };
    }

    if (filters.includes("High Protein")) {
      macros = {
        carbs: "30%",
        protein: "40%",
        fat: "30%",
      };
    }

    const dietPlan = { calories, meals, macros };

    // Save the generated diet plan to the user's account
    user.dietPlan = dietPlan;
    await user.save();

    res
      .status(200)
      .json({ dietPlan, message: "Diet plan generated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error generating diet plan" });
  }
};

module.exports = { generateDietPlan };
