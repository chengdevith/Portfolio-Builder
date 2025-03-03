import React from "react";
import { useNavigate } from "react-router-dom";

export default function Toggle({ isActive, setIsActive }) {
  const navigate = useNavigate();

  return (
    <div className="toggle-container">
      <div className="toggle">
        <div className="toggle-panel toggle-left">
          <h1>Welcome Back!</h1>
          <p>Enter your personal details to use all site features</p>
          <button
            className="btn"
            onClick={() => {
              setIsActive(false);
              navigate("/login");
            }}
          >
            Sign In
          </button>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>Hello, Friend!</h1>
          <p>Register with your personal details to use all site features</p>
          <button
            className="btn"
            onClick={() => {
              setIsActive(true);
              navigate("/sign-up");
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
