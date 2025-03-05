import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Toggle from "./Toggle";
import "./auth.css"
export default function Login() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      {/* Sign In Form */}
      <div className="form-container sign-in">
        <form>
          <h2>Sign In</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="flex justify-end w-full">
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
          <button 
            className="!bg-white flex items-center gap-3 ring-slate-400 !ring-2 !py-2 !px-4 !rounded-3xl hover:ring-color-secondary"
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