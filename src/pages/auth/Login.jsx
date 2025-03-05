import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-[1100px] h-[750px] bg-white shadow-2xl rounded-3xl overflow-hidden">
        {/* Forms Container */}
        <div
          className={`absolute w-full h-full flex transition-transform duration-700 ${
            isSignUp ? "-translate-x-1/2" : "translate-x-0"
          }`}
        >
          {/* Sign In Form */}
          <div className="w-1/2 flex flex-col items-center justify-center px-16">
            <h2 className="text-4xl font-bold mb-8">Login</h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-6 py-4 mb-6 border rounded-lg text-xl"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-6 py-4 mb-4 border rounded-lg text-xl"
            />
            <a href="#" className="text-base text-gray-500 mb-6 hover:text-purple-600 transition-colors">
              Forgot Your Password?
            </a>
            <button className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-[0_150px_100px_0] text-xl transition-colors">
              Sign In
            </button>
            <span className="text-gray-500 mt-8 text-base">Or login with</span>
            <button className="flex items-center gap-4 px-10 py-4 mt-6 border rounded-lg hover:bg-gray-50 transition-colors">
              <FcGoogle className="text-4xl" /> <span className="text-xl">Google</span>
            </button>
          </div>

          {/* Sign Up Form */}
          <div className="w-1/2 flex flex-col items-center justify-center px-16">
            <h2 className="text-4xl font-bold mb-8">Create Account</h2>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-6 py-4 mb-6 border rounded-lg text-xl"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-6 py-4 mb-6 border rounded-lg text-xl"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-6 py-4 mb-4 border rounded-lg text-xl"
            />
            <button className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg text-xl transition-colors">
              Sign Up
            </button>
            <span className="text-gray-500 mt-8 text-base">Or sign up with</span>
            <button className="flex items-center gap-4 px-10 py-4 mt-6 border rounded-lg hover:bg-gray-50 transition-colors">
              <FcGoogle className="text-4xl" /> <span className="text-xl">Google</span>
            </button>
          </div>
        </div>

        {/* Gradient Toggle Panel */}
        <div
          className={`absolute top-0 h-full w-1/2 bg-gradient-to-r from-purple-500 to-indigo-700 text-white flex flex-col items-center justify-center text-center transition-transform duration-700 shadow-xl ${
            isSignUp ? "translate-x-full rounded-l-3xl" : "rounded-r-3xl"
          }`}
        >
          {isSignUp ? (
            <>
              <h2 className="text-4xl font-bold mb-6">Welcome Back!</h2>
              <p className="mb-8 text-xl px-8">Sign in to continue your amazing journey with us</p>
              <button
                onClick={() => setIsSignUp(false)}
                className="py-4 px-10 border border-white rounded-lg hover:bg-white hover:bg-opacity-20 text-xl transition-colors"
              >
                Sign In
              </button>
            </>
          ) : (
            <>
              <h2 className="text-4xl font-bold mb-6">Hello, Friend!</h2>
              <p className="mb-8 text-xl px-8">Register now and embark on your extraordinary journey</p>
              <button
                onClick={() => setIsSignUp(true)}
                className="py-4 px-10 border border-white rounded-lg hover:bg-white hover:bg-opacity-20 text-xl transition-colors"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}