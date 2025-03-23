import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const SignInPage = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); 
    navigate("/account-settings"); 
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>
          Sign in to your <br /> <span>PopX account</span>
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-container">
              <input type="email" id="email" placeholder="Enter email address" required />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="input-container">
              <input type="password" id="password" placeholder="Enter password" required />
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;

