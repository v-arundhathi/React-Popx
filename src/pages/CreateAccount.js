import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CreateAccount.css";

const CreateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    
    navigate("/account-settings", { state: formData });
  };

  return (
    <div className="create-account-container">
      <div className="create-account-box">
        <h2 className="heading">
          Create your <span>PopX account</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="required-label">Full Name</label>
            <input className="inp" type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label className="required-label">Phone Number</label>
            <input className="inp" type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label className="required-label">Email Address</label>
            <input className="inp" type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label className="required-label">Password</label>
            <input className="inp" type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Company Name</label>
            <input className="inp" type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
          </div>

          <label className="required-label">Are you an Agency?</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="isAgency" value="yes" checked={formData.isAgency === "yes"} onChange={handleChange} required />
              Yes
            </label>
            <label>
              <input type="radio" name="isAgency" value="no" checked={formData.isAgency === "no"} onChange={handleChange} required />
              No
            </label>
          </div>

          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
