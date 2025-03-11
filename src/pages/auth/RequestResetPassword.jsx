import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import { useGetRegisterMutation } from "../../redux/services/authSlice";
import { useGoogleLogin } from "@react-oauth/google";

export default function SignUp() {
  const navigate = useNavigate();
  const [getRegister, { isLoading, error }] = useGetRegisterMutation();
  
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  const handleLoginWithGoogle = useGoogleLogin({
    onSuccess: async (res) => {
      if (res) {
        const accessToken = res.access_token;
        try {
          const userData = await fetch(
            "https://www.googleapis.com/oauth2/v1/userinfo",
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                Accept: "application/json",
              },
            }
          ).then((data) => data.json());
          if (userData) {
            try {
              const submitValues = {
                username: `${userData.family_name}${userData.given_name}`,
                email: userData.email,
                password: `${import.meta.env.VITE_SECRET_KEY}`,
                confirmPassword: `${import.meta.env.VITE_SECRET_KEY}`,
              };
              await getRegister(submitValues).unwrap();
              navigate("/otp", {
                state: {
                  email: submitValues.email,
                  password: submitValues.password,
                },
              });
            } catch (error) {
              console.log(error);
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
    onError: (error) => console.log("error :>> ", error),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Must put username"),
      email: Yup.string().email("Invalid email").required("Must put email"),
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
        await getRegister(values).unwrap();
        navigate("/otp", {
          state: {
            email: values.email,
            password: values.password,
          },
        });
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
      className="flex items-center justify-center min-h-screen bg-gray-100 p-4"
    >
      <div className="relative w-full max-w-4xl bg-white shadow-2xl rounded-3xl overflow-hidden">
        <div className="flex flex-col md:flex-row w-full">
          <form
            onSubmit={formik.handleSubmit}
            className="w-full md:w-1/2 flex flex-col items-center justify-center px-8 py-10"
          >
            <h2 className="text-3xl font-bold mb-6">Create Account</h2>
            <input
              type="text"
              name="username"
              id="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              required
              placeholder="Username"
              className="w-full px-4 py-3 mb-4 border rounded-lg text-lg"
            />
            {formik.touched.username && formik.errors.username && (
              <div className="text-red-500 text-left">{formik.errors.username}</div>
            )}
            <input
              type="email"
              name="email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              required
              placeholder="Email"
              className="w-full px-4 py-3 mb-4 border rounded-lg text-lg"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-left">{formik.errors.email}</div>
            )}
            <input
              type="password"
              name="password"
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              required
              placeholder="Password"
              className="w-full px-4 py-3 mb-4 border rounded-lg text-lg"
            />
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              required
              placeholder="Confirm Password"
              className="w-full px-4 py-3 mb-4 border rounded-lg text-lg"
            />
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg text-lg transition-colors"
            >
              Sign Up
            </button>
            <span className="text-gray-500 mt-8 text-base py-3 px-6 border-2 rounded-lg hover:border-color-secondary">Or sign up with</span>
            <button
              onClick={handleLoginWithGoogle}
              className="flex items-center gap-3 px-6 py-3 mt-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FcGoogle className="text-3xl" /> <span className="text-lg">Google</span>
            </button>
          </form>
          <div className="hidden md:flex w-1/2 bg-gradient-to-r from-purple-500 to-indigo-700 text-white flex-col items-center justify-center text-center p-10">
            <h2 className="text-3xl font-bold mb-4">Hello, Friend!</h2>
            <p className="mb-6 text-lg">Register now and embark on your extraordinary journey</p>
            <Link to="/login" className="py-3 px-6 border border-white rounded-lg hover:bg-white hover:bg-opacity-20 text-lg transition-colors">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
