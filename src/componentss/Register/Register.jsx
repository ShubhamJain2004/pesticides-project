import React, { useState } from "react";
import { UserData } from "../../context/User.js";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css"; 

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { registerUser, btnLoading } = UserData();

  const navigate = useNavigate();

  // submit handler function
  const submitHandler = (e) => {
    e.preventDefault();
    registerUser(name, email, password, navigate);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Register to Pesticides Control</h2>

        <form className="register-form" onSubmit={submitHandler}>
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="auth-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email or Username</label>
            <input
              type="email"
              placeholder="Email or Username"
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button disabled={btnLoading} className="auth-btn">
            {btnLoading ? "Please Wait..." : "Register"}
          </button>
        </form>

        <div className="login-link">
          <Link to="/login">Already have an account?</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
