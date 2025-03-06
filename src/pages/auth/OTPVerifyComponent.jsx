import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "flowbite-react";

export function OTPVerifyComponent() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]); // Create refs for each input field

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleSubmit = () => {
    alert("OTP Submitted: " + otp.join(""));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        className="bg-white p-12 rounded-3xl shadow-2xl w-[480px] text-center" // Increased padding and width
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-4xl font-bold mb-6">Enter OTP</h2> {/* Larger text */}
        <p className="text-lg text-gray-600 mb-8">We've sent a code to your email</p> {/* Larger text and margin */}
        <div className="flex justify-center gap-4"> {/* Increased gap */}
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              maxLength={1}
              className="w-16 h-16 text-2xl text-center border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" // Larger input size
            />
          ))}
        </div>
        <Button 
          onClick={handleSubmit} 
          className="w-full mt-6 !bg-blue-600 text-lg h-14" // Larger button
        >
          Verify OTP
        </Button>
        <p className="text-base text-gray-500 mt-6"> {/* Larger text */}
          Didn't receive the code?{" "}
          <span className="text-blue-500 cursor-pointer font-medium">
            Resend
          </span>
        </p>
      </motion.div>
    </div>
  );
}