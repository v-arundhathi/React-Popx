import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="title">Welcome to PopX</h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="button-group">
        <button className="primary-btn" onClick={() => navigate("/create-account")}>
          <span>Create Account</span>
        </button>
        <button className="secondary-btn" onClick={() => navigate("/login")}>
          <span>Already Registered? Login</span>
        </button>
      </div>
    </div>
  );
};

export default Welcome;


