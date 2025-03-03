import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Toggle from "./Toggle";

export default function SignUp() {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      {/* Sign Up Form */}
      <div className="form-container sign-up">
        <form>
          <h2>Create Account</h2>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="btn mb-5" type="submit">
            Sign Up
          </button>
          <span className="text-color-description">Or</span>
          <button 
            className="!bg-white flex items-center !mt-3 gap-3 ring-slate-400 !ring-2 !py-2 !px-4 !rounded-3xl hover:ring-color-secondary"
            type="button"
          >
            <FcGoogle className="text-4xl" />{" "}
            <span className="text-black !normal-case">Google</span>
          </button>
        </form>
      </div>

      {/* Toggle Section */}
      <Toggle isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
}