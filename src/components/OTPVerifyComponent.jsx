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
        className="bg-white p-8 rounded-2xl shadow-xl w-96 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-4">Enter OTP</h2>
        <p className="text-gray-600 mb-6">We've sent a code to your email</p>
        <div className="flex justify-center gap-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              value={digit}
              onChange={(e) => handleChange(e, index)}
             
              maxLength={1}
              className="w-12 h-12 text-xl text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>
        <Button onClick={handleSubmit} className="w-full mt-4 !bg-blue-600">
          Verify OTP
        </Button>
        <p className="text-sm text-gray-500 mt-4">
          Didn't receive the code?{" "}
          <span className="text-blue-500 cursor-pointer">Resend</span>
        </p>
      </motion.div>
    </div>
  );
}
