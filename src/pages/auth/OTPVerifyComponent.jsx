import { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useGetLoginMutation,
  useGetResendOtpMutation,
  useGetVerifyCodeMutation,
} from "../../redux/services/authSlice";
import * as Yup from "yup";
import { useFormik } from "formik";
import "aos/dist/aos.css";
import AOS from "aos";

export function OTPVerifyComponent() {
  const inputRefs = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [verifyCode, { isLoading, error }] = useGetVerifyCodeMutation();
  const [resendCode] = useGetResendOtpMutation();
  const [getLogin] = useGetLoginMutation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleResendCode = async () => {
    await resendCode({ email: location.state.email });
  };

  const formik = useFormik({
    initialValues: {
      otp: new Array(6).fill(""),
    },
    validationSchema: Yup.object({
      otp: Yup.array()
        .of(Yup.string().matches(/^[0-9]$/, "Only numbers are allowed"))
        .test(
          "otp-length",
          "OTP must be 6 digits",
          (value) => value.filter(Boolean).length === 6
        ),
    }),
    onSubmit: async (values) => {
      try {
        const otp_code = values.otp.join("");
        const email = location.state.email;
        const password = location.state.password;
        await verifyCode({ email, otp_code }).unwrap();
        const accessTokenData = await getLogin({email,password,}).unwrap();
        if (accessTokenData) {
          localStorage.setItem("accessToken", accessTokenData?.access);
        }
        navigate("/");
      } catch (error) {
        console.error("Verification failed", error);
      }
    },
  });

  const handleInputChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...formik.values.otp];
      newOtp[index] = value;
      formik.setFieldValue("otp", newOtp);

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !formik.values.otp[index] && index > 0) {
      const newOtp = [...formik.values.otp];
      newOtp[index - 1] = "";
      formik.setFieldValue("otp", newOtp);
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div
      data-aos="zoom-in"
      className="flex items-center justify-center min-h-screen bg-gray-100"
    >
      <div className="relative w-[1100px] h-[750px] bg-white shadow-2xl rounded-3xl overflow-hidden">
        <div className="absolute w-full h-full flex transition-transform duration-700">
          {/* OTP Form */}
          <form
            onSubmit={formik.handleSubmit}
            className="w-1/2 flex flex-col items-center justify-center px-16"
          >
            <h2 className="text-4xl font-bold mb-8">Enter OTP</h2>
            <p className="text-xl text-gray-500 mb-8">
              We've sent a code to your email
            </p>
            <div className="flex justify-center gap-4 mb-6">
              {formik.values.otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={digit}
                  ref={(el) => (inputRefs.current[index] = el)}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onBlur={formik.handleBlur}
                  className="w-14 h-14 text-2xl text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              ))}
            </div>
            {formik.touched.otp && formik.errors.otp && (
              <div className="text-red-500 mb-4">{formik.errors.otp}</div>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg text-xl transition-colors"
            >
              {isLoading ? "Verifying..." : "Verify OTP"}
            </button>
            <span className="text-gray-500 mt-8 text-base">
              Didn't receive the code?{" "}
              <button
                onClick={handleResendCode}
                className="text-purple-500 cursor-pointer font-medium"
              >
                Resend
              </button>
            </span>
          </form>

          {/* Right Panel */}
          <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-r from-purple-500 to-indigo-700 text-white flex flex-col items-center justify-center text-center transition-transform duration-700 shadow-xl">
            <h2 className="text-4xl font-bold mb-6">Verify Your Account</h2>
            <p className="mb-8 text-xl px-8">
              Enter the OTP sent to your email to complete verification
            </p>
            <button className="py-4 px-10 border border-white rounded-lg hover:bg-white hover:bg-opacity-20 text-xl transition-colors">
              Need Help?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
