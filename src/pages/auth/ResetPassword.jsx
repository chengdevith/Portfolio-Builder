import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useRef } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import { useGetResetPasswordMutation } from "../../redux/services/authSlice";

export default function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || ""; // Safely handle missing email
  const inputRefs = useRef([]);
  const [resetPassword, { isLoading, error }] = useGetResetPasswordMutation();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      email: email,
      otp: new Array(6).fill(""),
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      otp: Yup.array()
        .of(Yup.string().matches(/^[0-9]$/, "Only numbers are allowed"))
        .test(
          "otp-length",
          "OTP must be 6 digits",
          (value) => value.filter(Boolean).length === 6
        ),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const otp_code = values.otp.join("");
        const finalValue = {
          email: values.email,
          otp_code,
          password: values.password,
        };
        await resetPassword(finalValue).unwrap();
        navigate("/login"); // Redirect to login on success
      } catch (e) {
        console.log("error :>> ", e);
      } finally {
        resetForm();
      }
    },
  });

  return (
    <div
      data-aos="zoom-in"
      className="flex items-center justify-center min-h-screen bg-gray-100"
    >
      <div className="relative w-[1100px] h-[750px] bg-white shadow-2xl rounded-3xl overflow-hidden">
        {/* Forms Container */}
        <div className="absolute w-full h-full flex transition-transform duration-700">
          {/* Reset Password Form */}
          <form
            onSubmit={formik.handleSubmit}
            className="w-1/2 flex flex-col items-center justify-center px-16"
          >
            <h2 className="text-4xl font-bold mb-8">Reset Password</h2>

            {/* OTP Inputs */}
            <div className="flex justify-center gap-2 mb-6">
              {formik.values.otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  name={`otp[${index}]`}
                  value={formik.values.otp[index]}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^[0-9]?$/.test(value)) {
                      formik.setFieldValue(`otp[${index}]`, value);
                      if (value && index < 5) {
                        inputRefs.current[index + 1]?.focus();
                      }
                    }
                  }}
                  onBlur={formik.handleBlur}
                  onKeyDown={(e) => {
                    if (
                      e.key === "Backspace" &&
                      !formik.values.otp[index] &&
                      index > 0
                    ) {
                      formik.setFieldValue(`otp[${index - 1}]`, "");
                      inputRefs.current[index - 1]?.focus();
                    }
                  }}
                  ref={(el) => (inputRefs.current[index] = el)}
                  className={`w-12 px-2 py-4 border rounded-lg text-xl text-center ${
                    formik.touched.otp && formik.errors.otp
                      ? "border-red-500"
                      : ""
                  }`}
                />
              ))}
            </div>
            {formik.touched.otp && formik.errors.otp ? (
              <div className="text-red-500 text-left mb-4">
                {formik.errors.otp}
              </div>
            ) : null}

            {/* Password */}
            <input
              type="password"
              name="password"
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              required
              placeholder="New Password"
              className="w-full px-6 py-4 mb-4 border rounded-lg text-xl"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 mb-4">{formik.errors.password}</div>
            ) : null}

            {/* Confirm Password */}
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              required
              placeholder="Confirm Password"
              className="w-full px-6 py-4 mb-4 border rounded-lg text-xl"
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-red-500 mb-4">
                {formik.errors.confirmPassword}
              </div>
            ) : null}

            {/* API Error */}
            {error && (
              <div className="text-red-500 mb-4">
                {error.data?.message || "Reset password failed"}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg text-xl transition-colors"
            >
              {isLoading ? "Resetting..." : "Reset Password"}
            </button>

            <span className="text-gray-500 mt-8 text-base">
              Back to{" "}
              <Link to="/login" className="text-purple-600 hover:underline">
                Login
              </Link>
            </span>
          </form>

          {/* Right Panel */}
          <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-r from-purple-500 to-indigo-700 text-white flex flex-col items-center justify-center text-center transition-transform duration-700 shadow-xl">
            <h2 className="text-4xl font-bold mb-6">Secure Your Account</h2>
            <p className="mb-8 text-xl px-8">
              Enter the OTP and create a new password to regain access
            </p>
            <button className="py-4 px-10 border border-white rounded-lg hover:bg-white hover:bg-opacity-20 text-xl transition-colors">
              <Link to="/login">Login</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
