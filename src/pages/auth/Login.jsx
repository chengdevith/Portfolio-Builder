import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import {
  useGetLoginMutation,
  useGetUserProfileQuery,
} from "../../redux/services/authSlice";

export default function Login() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  const [getLogin, { isLoading, error }] = useGetLoginMutation();
  const {
    data: userProfile,
    isLoading: myLoading,
    error: myError,
  } = useGetUserProfileQuery();

  const [dataOfUser, setUserData] = useState();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Must put email"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      const accessTokenData = await getLogin({
        email: values?.email,
        password: values?.password,
      }).unwrap();
      if (accessTokenData) {
        localStorage.setItem("accessToken", accessTokenData?.access);
        window.location.reload()
      }
    },
  });
  useEffect(() => {
    async function Verify() {
      const userData = await userProfile;
      console.log(userData);
      setUserData(userData);
    }
    Verify();
  });
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.reload()
  };
  if (dataOfUser) {
    return (
      <>
        <h1>Login sucessed</h1>
        <button onClick={handleLogout}>Logout</button>
      </>
    );
  }
  return (
    <div
      data-aos="zoom-in"
      className="flex items-center justify-center min-h-screen bg-gray-100"
    >
      <div className="relative w-[1100px] h-[750px] bg-white shadow-2xl rounded-3xl overflow-hidden">
        {/* Forms Container */}
        <div
          className={`absolute w-full h-full flex transition-transform duration-700 `}
        >
          {/* Sign In Form */}
          <form
            onSubmit={formik.handleSubmit}
            className="w-1/2 flex flex-col items-center justify-center px-16"
          >
            <h2 className="text-4xl font-bold mb-8"> Login</h2>
            <input
              type="email"
              name="email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              required
              placeholder="Email"
              className="w-full px-6 py-4 mb-6 border rounded-lg text-xl"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-left">
                {formik.errors.email}
              </div>
            ) : null}
            <input
              type="password"
              name="password"
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              required
              placeholder="Password"
              className="w-full px-6 py-4 mb-4 border rounded-lg text-xl"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500">{formik.errors.password}</div>
            ) : null}
            <a
              href="#"
              className="text-base text-gray-500 mb-6 hover:text-purple-600 transition-colors"
            >
              Forgot Your Password?
            </a>
            <button
              type="submit"
              className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg text-xl transition-colors"
            >
              Login
            </button>
            <span className="text-gray-500 mt-8 text-base">Or login with</span>
            <button className="flex items-center gap-4 px-10 py-4 mt-6 border rounded-lg hover:bg-gray-50 transition-colors">
              <FcGoogle className="text-4xl" />{" "}
              <span className="text-xl">Google</span>
            </button>
          </form>
          <div
            className={`absolute top-0 right-0 h-full w-1/2 bg-gradient-to-r from-purple-500 to-indigo-700 text-white flex flex-col items-center justify-center text-center transition-transform duration-700 shadow-xl`}
          >
            <h2 className="text-4xl font-bold mb-6">Welcome Back!</h2>
            <p className="mb-8 text-xl px-8">
              Sign in to continue your amazing journey with us
            </p>
            <button className="py-4 px-10 border border-white rounded-lg hover:bg-white hover:bg-opacity-20 text-xl transition-colors">
              <Link to={"/sign-up"}>Sign Up</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
