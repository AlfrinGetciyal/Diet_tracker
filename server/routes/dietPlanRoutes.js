const express = require("express");
const { generateDietPlan } = require("../controllers/dietPlanController");
const router = express.Router();

// Route to generate diet plan
router.post("/generate/:userId", generateDietPlan);

module.exports = router;
