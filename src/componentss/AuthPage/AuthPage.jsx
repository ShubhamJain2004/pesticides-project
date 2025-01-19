
import React, { useState } from "react";
import "./AuthPage.css";

const AuthPage = ({ onClose }) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    onClose();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    onClose();
  };

  return (
    <div className="auth-card">
      {isLoggedIn ? (
        <div className="welcome-box">
          <h2 className="welcome-title">Welcome Back!</h2>
          <button className="logout-button" onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <div className="form-container">
          <h2 className="form-title">{isSignIn ? "Sign In" : "Sign Up"}</h2>
          <form onSubmit={handleLogin} className="auth-form">
            {!isSignIn && <input type="text" placeholder="Name" className="input-field" required />}
            <input type="email" placeholder="Email" className="input-field" required />
            <input type="password" placeholder="Password" className="input-field" required />
            <button type="submit" className="submit-button">
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <p className="toggle-text" onClick={toggleForm}>
            {isSignIn ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
          </p>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
