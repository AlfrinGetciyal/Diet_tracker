import React, { useState } from "react";
import "./DietPlans.css";
import dietImage from "../../assets/Images/dietplan.webp"; // Update the path to your image

const DietPlans = () => {
  const [goal, setGoal] = useState("");
  const [filters, setFilters] = useState([]);
  const [userDetails, setUserDetails] = useState({
    age: "",
    gender: "",
    weight: "",
    height: "",
    activity: "",
  });
  const [dietPlan, setDietPlan] = useState(null);

  const dietFilters = [
    "Vegetarian",
    "Vegan",
    "Keto",
    "Gluten-Free",
    "High Protein",
    "Low Carb",
  ];

  const predefinedPlans = [
    {
      title: "7-Day Vegan Plan",
      description: "A week-long vegan meal plan for a healthy lifestyle.",
      calories: "2000 kcal/day",
    },
    {
      title: "Keto for Beginners",
      description: "A simple ketogenic diet plan to get started.",
      calories: "1800 kcal/day",
    },
    {
      title: "High-Protein Plan",
      description: "Boost your protein intake with this meal plan.",
      calories: "2200 kcal/day",
    },
  ];

  const handleFilterChange = (filter) => {
    setFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const generateDietPlan = () => {
    // Validate user input
    if (
      !goal ||
      !userDetails.age ||
      !userDetails.weight ||
      !userDetails.height ||
      !userDetails.activity
    ) {
      alert("Please fill in all fields before generating the plan.");
      return;
    }

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
    if (filters.includes("Vegetarian") && filters.includes("High Protein")) {
      meals = {
        breakfast: "Tofu scramble with spinach",
        lunch: "Vegetarian protein bowl",
        dinner: "Grilled tempeh with roasted veggies",
        snacks: "Chia pudding",
      };
      macros = { carbs: "30%", protein: "40%", fat: "30%" };
    } else if (filters.includes("Vegetarian")) {
      meals = {
        breakfast: "Avocado toast with spinach",
        lunch: "Vegetarian quinoa bowl",
        dinner: "Grilled tofu with roasted veggies",
        snacks: "Hummus with carrots",
      };
    } else if (filters.includes("High Protein")) {
      macros = { carbs: "30%", protein: "40%", fat: "30%" };
    }

    const dietPlan = { calories, meals, macros };
    setDietPlan(dietPlan);
  };

  const downloadPDF = (planTitle) => {
    const doc = new jsPDF();
    doc.text(`Diet Plan: ${planTitle}`, 10, 10);
    doc.text(`Calories: ${dietPlan.calories}`, 10, 20);
    doc.text("Meals:", 10, 30);
    doc.text(`Breakfast: ${dietPlan.meals.breakfast}`, 10, 40);
    doc.text(`Lunch: ${dietPlan.meals.lunch}`, 10, 50);
    doc.text(`Dinner: ${dietPlan.meals.dinner}`, 10, 60);
    doc.text(`Snacks: ${dietPlan.meals.snacks}`, 10, 70);
    doc.text("Macros:", 10, 80);
    doc.text(`Carbs: ${dietPlan.macros.carbs}`, 10, 90);
    doc.text(`Protein: ${dietPlan.macros.protein}`, 10, 100);
    doc.text(`Fat: ${dietPlan.macros.fat}`, 10, 110);
    doc.save(`${planTitle}.pdf`);
  };

  const saveToAccount = (planTitle) => {
    alert(`Saving ${planTitle} to your account...`);
    // Add logic to save the plan to the user's account (e.g., make an API request)
  };

  return (
    <div className="diet-plans-page">
      {/* Full-width Background Image */}
      <div
        className="diet-plans-container"
        style={{ backgroundImage: `url(${dietImage})` }}
      >
        <div className="diet-plans-content">
          <h1 className="diet-plans-heading">Find Your Perfect Diet Plan</h1>
          <p className="diet-plans-description">
            Choose your goal and preferences to get a personalized meal plan for
            your health journey.
          </p>
        </div>
      </div>

      {/* Content Below the Image */}
      <div className="diet-plans-below">
        {/* Goal Selection */}
        <div className="goal-selection">
          <h2>Select Your Goal</h2>
          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="goal-dropdown"
          >
            <option value="">-- Select Goal --</option>
            <option value="weight-loss">Weight Loss</option>
            <option value="muscle-gain">Muscle Gain</option>
            <option value="maintain-weight">Maintain Weight</option>
          </select>
        </div>

        {/* Filter Options */}
        <div className="filter-options">
          <h2>Filter Options</h2>
          {dietFilters.map((filter) => (
            <label key={filter} className="filter-label">
              <input
                type="checkbox"
                checked={filters.includes(filter)}
                onChange={() => handleFilterChange(filter)}
              />
              {filter}
            </label>
          ))}
        </div>
      </div>

      {/* User Details Form */}
      <div className="user-details-form">
        <h2>Enter Your Details</h2>
        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={userDetails.age}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select
            name="gender"
            value={userDetails.gender}
            onChange={handleInputChange}
          >
            <option value="">-- Select Gender --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Weight (kg):</label>
          <input
            type="number"
            name="weight"
            value={userDetails.weight}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Height (cm):</label>
          <input
            type="number"
            name="height"
            value={userDetails.height}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Activity Level:</label>
          <select
            name="activity"
            value={userDetails.activity}
            onChange={handleInputChange}
          >
            <option value="">-- Select Activity Level --</option>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </div>
        <button className="generate-btn" onClick={generateDietPlan}>
          Generate Diet Plan
        </button>
      </div>

      {/* Display Generated Diet Plan */}
      {dietPlan && (
        <div className="diet-plan-result">
          <h2>Your Diet Plan</h2>
          <p>Calories per day: {dietPlan.calories}</p>
          <h3>Meals:</h3>
          <ul>
            <li>
              <strong>Breakfast:</strong> {dietPlan.meals.breakfast}
            </li>
            <li>
              <strong>Lunch:</strong> {dietPlan.meals.lunch}
            </li>
            <li>
              <strong>Dinner:</strong> {dietPlan.meals.dinner}
            </li>
            <li>
              <strong>Snacks:</strong> {dietPlan.meals.snacks}
            </li>
          </ul>
          <h3>Macros:</h3>
          <p>Carbs: {dietPlan.macros.carbs}</p>
          <p>Protein: {dietPlan.macros.protein}</p>
          <p>Fat: {dietPlan.macros.fat}</p>
          <div className="plan-actions">
            <button
              className="download-btn"
              onClick={() => downloadPDF("Generated Diet Plan")}
            >
              Download as PDF
            </button>
            <button
              className="save-btn"
              onClick={() => saveToAccount("Generated Diet Plan")}
            >
              Save to My Account
            </button>
          </div>
        </div>
      )}

      {/* Predefined Diet Plan Cards */}
      <div className="predefined-plans">
        <h2>Popular Diet Plans</h2>
        <div className="plan-cards">
          {predefinedPlans.map((plan, index) => (
            <div key={index} className="plan-card">
              <h3>{plan.title}</h3>
              <p>{plan.description}</p>
              <p>
                <strong>{plan.calories}</strong>
              </p>
              <div className="plan-actions">
                <button
                  className="download-btn"
                  onClick={() => downloadPDF(plan.title)}
                >
                  Download as PDF
                </button>
                <button
                  className="save-btn"
                  onClick={() => saveToAccount(plan.title)}
                >
                  Save to My Account
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DietPlans;
