import React, { useState, useEffect } from "react";
import "./ProgressTracker.css";

const ProgressTracker = () => {
  const [goal, setGoal] = useState("Weight Loss"); // Default goal
  const [weight, setWeight] = useState(70); // Current weight in kg
  const [calories, setCalories] = useState(1500); // Calories consumed
  const [activityLevel, setActivityLevel] = useState("Medium"); // Activity level
  const [water, setWater] = useState(2); // Water intake in liters
  const [feedback, setFeedback] = useState(""); // Feedback notification
  const [goalUpdated, setGoalUpdated] = useState(false); // Tracks if the goal has been updated

  // Dynamic messages based on the selected goal
  const goalDetails = {
    "Weight Loss": {
      focus: "Consume fewer calories than you burn and track weight decrease.",
      calorieTarget: 1800,
      activityTarget: "Medium",
      waterTarget: 2.5,
    },
    "Muscle Gain": {
      focus: "Focus on high protein intake and strength-building activities.",
      calorieTarget: 2500,
      activityTarget: "High",
      waterTarget: 3,
    },
    "Maintain Weight": {
      focus: "Maintain a balanced intake and consistency.",
      calorieTarget: 2000,
      activityTarget: "Medium",
      waterTarget: 2,
    },
  };

  // Calculate feedback based on progress
  useEffect(() => {
    if (!goalUpdated) return; // Only show feedback if the goal has been updated

    const goalData = goalDetails[goal];
    let feedbackMessage = "";

    if (calories > goalData.calorieTarget) {
      feedbackMessage +=
        "⚠️ You are consuming more calories than your target. ";
    } else {
      feedbackMessage += "✅ Your calorie intake is on track. ";
    }

    if (activityLevel !== goalData.activityTarget) {
      feedbackMessage += `⚠️ Your activity level should be ${goalData.activityTarget}. `;
    } else {
      feedbackMessage += "✅ Your activity level is on track. ";
    }

    if (water < goalData.waterTarget) {
      feedbackMessage += `⚠️ You need to drink more water (target: ${goalData.waterTarget}L). `;
    } else {
      feedbackMessage += "✅ Your water intake is on track. ";
    }

    setFeedback(feedbackMessage);
  }, [goal, calories, activityLevel, water, goalUpdated]);

  const handleGoalChange = (e) => {
    setGoal(e.target.value);
    setGoalUpdated(true); // Mark the goal as updated
  };

  return (
    <div className="progress-tracker">
      {/* Notification Feedback */}
      {goalUpdated && feedback && (
        <div className="notification">
          <p>{feedback}</p>
        </div>
      )}

      {/* Goal Section */}
      <div className="goal-section">
        <h2>🎯 Your Goal</h2>
        <select
          value={goal}
          onChange={handleGoalChange}
          className="goal-dropdown"
        >
          <option value="Weight Loss">Weight Loss</option>
          <option value="Muscle Gain">Muscle Gain</option>
          <option value="Maintain Weight">Maintain Weight</option>
        </select>
        <p className="goal-focus">{goalDetails[goal].focus}</p>
      </div>

      {/* Progress Metrics */}
      <div className="metrics-grid">
        {/* Weight */}
        <div className="metric-card">
          <h3>⚖️ Weight</h3>
          <p>{weight} kg</p>
          <input
            type="range"
            min="50"
            max="150"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        {/* Calories */}
        <div className="metric-card">
          <h3>🔥 Calories</h3>
          <p>{calories} kcal</p>
          <input
            type="range"
            min="1000"
            max="4000"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </div>

        {/* Activity Level */}
        <div className="metric-card">
          <h3>🏃‍♂️ Activity Level</h3>
          <p>{activityLevel}</p>
          <select
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
            className="activity-dropdown"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        {/* Water Intake */}
        <div className="metric-card">
          <h3>💧 Water Intake</h3>
          <p>{water} L</p>
          <input
            type="range"
            min="0"
            max="5"
            step="0.1"
            value={water}
            onChange={(e) => setWater(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
