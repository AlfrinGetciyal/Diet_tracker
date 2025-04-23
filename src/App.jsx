import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import UserDetails from "./components/UserDetails/UserDetails";
import DietPlans from "./components/dietPlans/DietPlans";
import HealthyRecipes from "./components/HealthyRecipes/HealthyRecipes";
import ProgressTracker from "./components/ProgressTracker/ProgressTracker";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home"); // Default page is Home

  // Handle Sign Up
  const handleSignUp = (formData) => {
    console.log("User signed up with:", formData);
    alert("Sign-up successful!");
    setCurrentPage("home"); // Navigate to Home Page after sign-up
  };

  // Handle Login
  const handleLogin = () => {
    console.log("User logged in successfully!");
    setCurrentPage("home"); // Navigate to Home Page after login
  };

  // Navigation Handlers
  const handleNavigateToLogin = () => {
    setCurrentPage("login");
  };

  const handleNavigateToSignUp = () => {
    setCurrentPage("signup");
  };

  const handleNavigateToDietPlans = () => {
    console.log("Navigating to Diet Plans...");
    setCurrentPage("dietplans");
  };

  const handleNavigateToHealthyRecipes = () => {
    console.log("Navigating to Healthy Recipes...");
    setCurrentPage("healthyrecipes");
  };

  const handleNavigateToProgressTracker = () => {
    console.log("Navigating to Progress Tracker...");
    setCurrentPage("progresstracker");
  };

  const handleSeeThemAll = () => {
    setCurrentPage("userdetails");
  };

  return (
    <div>
      <h1>Diet Tracker</h1>

      {/* Home Page */}
      {currentPage === "home" && (
        <Home
          onLogin={handleNavigateToLogin}
          onSignUp={handleNavigateToSignUp}
          onSeeThemAll={handleSeeThemAll}
          onNavigateToDietPlans={handleNavigateToDietPlans}
          onNavigateToHealthyRecipes={handleNavigateToHealthyRecipes}
          onNavigateToProgressTracker={handleNavigateToProgressTracker}
        />
      )}

      {/* Sign Up Page */}
      {currentPage === "signup" && (
        <SignUp
          onSignUp={handleSignUp}
          onNavigateToLogin={handleNavigateToLogin}
        />
      )}

      {/* Login Page */}
      {currentPage === "login" && (
        <Login
          onLogin={handleLogin}
          onNavigateToSignUp={handleNavigateToSignUp}
        />
      )}

      {/* User Details Page */}
      {currentPage === "userdetails" && <UserDetails />}

      {/* Diet Plans Page */}
      {currentPage === "dietplans" && <DietPlans />}

      {/* Healthy Recipes Page */}
      {currentPage === "healthyrecipes" && <HealthyRecipes />}

      {/* Progress Tracker Page */}
      {currentPage === "progresstracker" && <ProgressTracker />}
    </div>
  );
};

export default App;
