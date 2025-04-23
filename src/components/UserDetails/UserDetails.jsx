// src/pages/UserDetails.jsx
import React, { useState } from "react";
import "./UserDetails.css";

const UserDetails = ({ onNavigateHome = () => {} }) => {
  const [form, setForm] = useState({
    age: "",
    weight: "",
    height: "",
    gender: "Male",
    activityLevel: "",
    goal: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting user details:", form);

    try {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Server response:", data);

      // Navigate to the home page after successful submission
      onNavigateHome();
    } catch (error) {
      console.error("Error sending user details:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md mx-auto mt-10"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
        Fill in Your Health Details
      </h2>

      <input
        name="age"
        type="number"
        placeholder="Age"
        onChange={handleChange}
        value={form.age}
        required
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      <input
        name="weight"
        type="number"
        placeholder="Weight (kg)"
        onChange={handleChange}
        value={form.weight}
        required
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      <input
        name="height"
        type="number"
        placeholder="Height (cm)"
        onChange={handleChange}
        value={form.height}
        required
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      <select
        name="gender"
        onChange={handleChange}
        value={form.gender}
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <select
        name="activityLevel"
        onChange={handleChange}
        value={form.activityLevel}
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        <option value="">Activity Level</option>
        <option value="sedentary">Sedentary (little or no exercise)</option>
        <option value="light">Light (1–3 days/week)</option>
        <option value="moderate">Moderate (3–5 days/week)</option>
        <option value="active">Active (6–7 days/week)</option>
        <option value="very_active">Very Active (hard daily exercise)</option>
      </select>

      <select
        name="goal"
        onChange={handleChange}
        value={form.goal}
        className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        <option value="">Select Goal</option>
        <option value="lose">Lose Weight</option>
        <option value="maintain">Maintain Weight</option>
        <option value="gain">Gain Muscle</option>
      </select>

      <button
        type="submit"
        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-300"
      >
        Continue
      </button>
    </form>
  );
};

export default UserDetails;
