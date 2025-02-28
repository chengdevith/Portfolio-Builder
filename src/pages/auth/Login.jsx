import React, { useState } from "react";

export default function Login() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={` container ${isActive ? "active" : ""}`} id="container">
      {/* Sign Up Form */}
      <div className="form-container sign-up">
        <form>
          <h2>Create Account</h2>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fa fa-google"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa fa-github"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className="form-container sign-in">
        <form>
          <h2>Sign In</h2>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fa fa-google"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa fa-github"></i>
            </a>
            <a href="#" className="icon">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>

      {/* Toggle Section */}
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button onClick={() => setIsActive(false)}>Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all site features</p>
            <button onClick={() => setIsActive(true)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
