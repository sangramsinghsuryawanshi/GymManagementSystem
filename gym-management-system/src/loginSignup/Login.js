import React, { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for validation
import axios from "axios";
import "../CSS/Login.css";
import { useNavigate } from "react-router-dom";

const Login = ({ onLoginSuccess }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const adminEmail = "admin@gym.com";
    const adminPassword = "admin123";

    if (
      credentials.email === adminEmail &&
      credentials.password === adminPassword
    ) {
      onLoginSuccess("admin");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/login",
        credentials
      );
      if (response.data === "user") {
        onLoginSuccess("user");
      } else {
        setMessage("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred during login.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="module-title">Login</h2>
      {message && <p className="message">{message}</p>}
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p className="redirect-link">
        Don't have an account?&nbsp;
        <button
          onClick={() => navigate("/signup")}
          className="signup-link"
          style={{
            background: "none",
            border: "none",
            color: "blue",
            cursor: "pointer",
            textDecoration: "underline",
            padding: 0,
          }}
        >
          Sign up here
        </button>
      </p>
    </div>
  );
};

// Add PropTypes validation
Login.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
};

export default Login;
