import React, { useState } from "react";
import "./SignUp.css";

const SignUp = ({ onNavigateToLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showNotification, setShowNotification] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registration failed.");
      }

      setShowNotification(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleNotificationOk = () => {
    setShowNotification(false);
    onNavigateToLogin(); // Navigate to login or home page
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Create an Account</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>

      <p className="signup-footer">
        Already have an account?{" "}
        <a
          href="#"
          className="signup-footer-link"
          onClick={(e) => {
            e.preventDefault();
            onNavigateToLogin();
          }}
        >
          Log In
        </a>
      </p>

      {/* Notification */}
      {showNotification && (
        <div className="notification">
          <p>Sign-up successful! Click OK to proceed to the Login Page.</p>
          <button
            className="notification-ok-button"
            onClick={handleNotificationOk}
          >
            OK
          </button>
        </div>
      )}
    </div>
  );
};

export default SignUp;
