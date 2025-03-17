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
        }
        navigate("/");
      } catch (error) {
        console.error("Verification failed", error);
      }
    },
  });

  return (
    <div data-aos="zoom-in" className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-[90%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[50%] h-auto bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row">
        {/* Sign In Form */}
        <form onSubmit={formik.handleSubmit} className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 gap-5">
          <h2 className="text-3xl md:text-4xl font-bold">Login</h2>
          <div className="w-full">
            <input
              type="email"
              name="email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              required
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg text-lg"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 mt-2">{formik.errors.email}</div>
            )}
          </div>
          <div className="w-full">
            <input
              type="password"
              name="password"
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              required
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg text-lg"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 mt-2">{formik.errors.password}</div>
            )}
          </div>
          <div className="w-full flex justify-end">
            <Link to="/request-reset-password" className="text-sm text-gray-500 hover:text-purple-600">
              Forgot Your Password?
            </Link>
          </div>
          <button type="submit" className="w-full py-3 !bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg text-lg transition-colors">
            Login
          </button>
          <span className="text-gray-500 mt-4 text-sm">Or login with</span>
          <button onClick={googleLogin} className="flex items-center gap-3 px-6 py-3 border rounded-lg hover:bg-gray-50 transition-colors">
            <FcGoogle className="text-3xl" /> <span className="text-lg">Google</span>
          </button>
        </form>
        {/* Welcome Section */}
        <div className="flex-1 hidden md:flex flex-col items-center justify-center text-center bg-gradient-to-r from-purple-500 to-indigo-700 text-white p-6 md:p-12">
          <h2 className="text-3xl font-bold">Welcome Back!</h2>
          <p className="mt-4 text-lg">Sign in to continue your amazing journey with us</p>
          <button className="mt-6 py-3 px-6 border border-white rounded-lg hover:bg-white hover:bg-opacity-20 text-lg transition-colors">
            <Link to="/sign-up">Sign Up</Link>
          </button>
        </div>
      </div>
    </div>
  );
}