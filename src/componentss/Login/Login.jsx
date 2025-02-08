import React, { useState } from "react";
import { UserData } from "../../context/User";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser, btnLoading } = UserData();

  const navigate = useNavigate();

  // form submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    loginUser(email, password, navigate);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login to Pesticides Control</h2>

        <form className="login-form" onSubmit={submitHandler}>
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
            {btnLoading ? "Please Wait..." : "Login"}
          </button>
        </form>

        <div className="register-link">
          <Link to="/register">Don't have an account?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
