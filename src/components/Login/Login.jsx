import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = ({ onLogin, onNavigateToSignUp }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );
      console.log("✅ Login successful:", res.data);
      onLogin(); // Trigger navigation to the home page
    } catch (err) {
      console.error("❌ Login error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Login failed"); // Display error message from the backend
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Welcome Back</h2>
      <form className="login-form" onSubmit={handleSubmit}>
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
        {error && <p className="error-message">{error}</p>}{" "}
        {/* Display error message */}
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <p className="login-footer">
        Don't have an account?{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigateToSignUp();
          }}
        >
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default Login;
