import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/AccountSettings.css";

const AccountSettings = () => {
  const location = useLocation();
  const userData = location.state || {};

  return (
    <div className="account-settings-container">
      {/* Header Section */}
      <header className="header">
        <h1 className="header-title">Account Settings</h1>
      </header>

      {/* Profile Section */}
      <div className="profile-container">
        <img 
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=300&h=300&q=80" 
          alt="User" 
          className="profile-pic" 
        />
        <div className="profile-info">
          <h2 className="name">{userData.fullName || "User Name"}</h2>
          <p className="email">{userData.email || "user@example.com"}</p>
        </div>
      </div>
      <p className="company">{userData.companyName || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"}</p>

    </div>
    
  );
};

export default AccountSettings;

