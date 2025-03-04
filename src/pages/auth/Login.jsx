import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import "./auth.css"
export default function Login() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={` container ${isActive ? "active" : ""}`} id="container">
      {/* Sign Up Form */}
      <div className="form-container sign-up ">
        <form>
          <h2>Create Account</h2>

          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="btn mb-5" type="submit">
            Sign Up
          </button>
          <span className=" text-color-description">Or</span>
          <button className="!bg-white flex items-center !mt-3 gap-3 ring-slate-400 !ring-2 !py-2 !px-4 !rounded-3xl hover:ring-color-secondary">
            <FcGoogle className="text-4xl" />{" "}
            <span className="text-black !normal-case">Google</span>
          </button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className="form-container sign-in">
        <form>
          <h2>Sign In</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className=" flex justify-end w-full">
            <a
              className="sub-description mt-2 hover:!text-color-secondary"
              href="#"
            >
              Forget Your Password?
            </a>
          </div>
          <button className="btn mb-5" type="submit">
            Sign In
          </button>
          <span className="mb-2 text-color-description">Or login with</span>
          <button className="!bg-white flex items-center gap-3 ring-slate-400 !ring-2 !py-2 !px-4 !rounded-3xl hover:ring-color-secondary">
            <FcGoogle className="text-4xl" />{" "}
            <span className="text-black !normal-case">Google</span>
          </button>
        </form>
      </div>

      {/* Toggle Section */}
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="btn" onClick={() => setIsActive(false)}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all site features</p>
            <button className="btn" onClick={() => setIsActive(true)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
