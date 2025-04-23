import React from "react";
import "./Home.css";
import frontImage from "../../assets/Images/frontimage.jpg"; // Correct image path
import logo from "../../assets/Images/logo.jpg"; // Import the logo image

const Home = ({
  onLogin,
  onSignUp,
  onSeeThemAll,
  onNavigateToDietPlans,
  onNavigateToHealthyRecipes,
  onNavigateToProgressTracker,
}) => {
  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="home">
        <div className="home-logo">
          {/* Add the logo image */}
          <img src={logo} alt="Diet Tracker Logo" className="logo-image" />
          <span className="logo-text">Diet Tracker</span>
        </div>

        <div className="home-buttons">
          <button className="home-nav-button" onClick={onNavigateToDietPlans}>
            Diet Plans
          </button>
          <button
            className="home-nav-button"
            onClick={onNavigateToHealthyRecipes}
          >
            Healthy Recipes
          </button>
          <button
            className="home-nav-button"
            onClick={onNavigateToProgressTracker}
          >
            Progress Tracker
          </button>
          <button className="home-login" onClick={onLogin}>
            Login
          </button>
          <button className="home-signup" onClick={onSignUp}>
            Sign Up
          </button>
        </div>
      </header>

      {/* Full-Width Background Section */}
      <div
        className="home-body"
        style={{ backgroundImage: `url(${frontImage})` }}
      >
        <div className="home-body-content">
          <h1 className="home-body-title">Eat Healthy, Stay Fit</h1>
          <p className="home-body-text">
            Discover the best diet plans and tips to maintain a balanced
            lifestyle.
          </p>
          <button className="home-cta-button" onClick={onSeeThemAll}>
            USER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
