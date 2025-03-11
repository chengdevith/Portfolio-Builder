import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useNavigate } from "react-router-dom";
import {
  useGetLoginMutation,
  useGetUserProfileQuery,
} from "../../redux/services/authSlice";

export default function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [getLogin, { isLoading, error }] = useGetLoginMutation();
  const { data: userProfile } = useGetUserProfileQuery();
  
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Must put email"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const accessTokenData = await getLogin(values).unwrap();
        if (accessTokenData) {
          localStorage.setItem("accessToken", accessTokenData?.access);
          navigate("/");
        }
      } catch (error) {
        console.error("Verification failed", error);
      }
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 mt-20 mb-20">
    <div
      data-aos="zoom-in"
      className="relative w-full max-w-2xl h-[600px] bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row"
    >
      <form
        onSubmit={formik.handleSubmit}
        className="w-full md:w-1/2 flex flex-col items-center justify-center px-8 py-6"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="w-full">
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-lg text-lg mb-3"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 mt-1">{formik.errors.email}</div>
          )}
        </div>
        <div className="w-full">
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-lg text-lg mb-3"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 mt-1">{formik.errors.password}</div>
          )}
        </div>
        <div className="w-full flex justify-end">
          <Link
            to="/request-reset-password"
            className="text-gray-500 hover:text-purple-600"
          >
            Forgot Password?
          </Link>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg mt-4"
        >
          Login
        </button>
        <span className="text-gray-500 mt-4 gap-4 px-6 py-3 border rounded-lg hover:border-color-secondary-dark">Or login with</span>
        <button className="flex items-center gap-4 px-6 py-3 border rounded-lg hover:bg-gray-50 mt-4">
          <FcGoogle className="text-2xl" /> <span>Google</span>
        </button>
      </form>
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-r from-purple-500 to-indigo-700 text-white flex-col items-center justify-center text-center p-4">
        <h2 className="text-2xl font-bold mb-3">Welcome Back!</h2>
        <p className="mb-4 text-lg">Sign in to continue your amazing journey with us</p>
        <Link
          to="/sign-up"
          className="py-3 px-6 border border-white rounded-lg hover:bg-white hover:bg-opacity-20 text-lg transition-colors"
        >
          Sign Up
        </Link>
      </div>
    </div>
  </div>
  );
}
