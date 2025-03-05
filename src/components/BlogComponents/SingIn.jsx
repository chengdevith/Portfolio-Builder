import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-[750px] h-[500px] bg-white shadow-lg rounded-3xl overflow-hidden">
        {/* Forms Container */}
        <div
          className={`absolute w-full h-full flex transition-transform duration-700 ${
            isSignUp ? "-translate-x-1/2" : "translate-x-0"
          }`}
        >
          {/* Sign In Form */}
          <div className="w-1/2 flex flex-col items-center justify-center px-10">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 mb-4 border rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 mb-2 border rounded-lg"
            />
            <a href="#" className="text-sm text-gray-500 mb-4">
              Forgot Your Password?
            </a>
            <button className="w-full py-2 bg-purple-600 text-white font-semibold rounded-[0_150px_100px_0] ">
              Sign In
            </button>
            <span className="text-gray-500 mt-4">Or login with</span>
            <button className="flex items-center gap-2 px-6 py-2 mt-2 border rounded-lg">
              <FcGoogle className="text-2xl" /> <span>Google</span>
            </button>
          </div>

          {/* Sign Up Form */}
          <div className="w-1/2 flex flex-col items-center justify-center px-10">
            <h2 className="text-2xl font-bold mb-4">Create Account</h2>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 mb-4 border rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 mb-4 border rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 mb-2 border rounded-lg"
            />
            <button className="w-full py-2 bg-color-primary hover:bg-color-secondary text-white font-semibold rounded-lg">
              Login
            </button>
            <span className="text-gray-500 mt-4">Or sign up with</span>
            <button className="flex items-center gap-2 px-6 py-2 mt-2 border rounded-lg">
              <FcGoogle className="text-2xl" /> <span>Google</span>
            </button>
          </div>
        </div>

        {/* Gradient Toggle Panel */}
        <div
          className={`absolute top-0 h-full w-1/2 bg-gradient-to-r from-purple-500 to-indigo-700 text-white flex flex-col items-center justify-center text-center transition-transform duration-700 ${
            isSignUp ? "translate-x-full rounded-l-3xl" : "rounded-r-3xl"
          }`}
        >
          {isSignUp ? (
            <>
              <h2 className="text-2xl font-bold mb-2">Welcome Back!</h2>
              <p className="mb-4">Sign in to continue</p>
              <button
                onClick={() => setIsSignUp(false)}
                className="py-2 px-6 border border-white rounded-lg">
               Sign In
              </button>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-2">Hello, Friend!</h2>
              <p className="mb-4">Register and start your journey</p>
              <button
                onClick={() => setIsSignUp(true)}
                className="py-2 px-6 border border-white rounded-lg">
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
