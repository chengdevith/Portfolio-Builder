import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import { useGetRegisterMutation } from "../../redux/services/authSlice";
export default function SignUp() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  const [getRegister, { isLoading, error }] = useGetRegisterMutation();

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
      // console.log("click")
      // console.log('email :>> ', values.email);
      // navigate("/otp", { state: values.email });
      try {
        const signUpToken = await getRegister(values).unwrap();
        navigate("/otp", { state: values.email });
        if (signUpToken) {
          localStorage.setItem("signUpToken", signUpToken?.email);
        }
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
        <div
          className={`absolute w-full h-full flex transition-transform duration-700 `}
        >
          {/* Sign Up Form */}
          <form
            onSubmit={formik.handleSubmit}
            className="w-1/2 flex flex-col items-center justify-center px-16"
          >
            <h2 className="text-4xl font-bold mb-8">Create Account</h2>
            <input
              type="text"
              name="username"
              id="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              required
              placeholder="Username"
              className="w-full px-6 py-4 mb-6 border rounded-lg text-xl"
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="text-red-500 text-left">
                {formik.errors.username}
              </div>
            ) : null}
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
              <div className="text-red-500">
                {formik.errors.confirmPassword}
              </div>
            ) : null}
            <button
              type="submit"
              className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg text-xl transition-colors"
            >
              
              Sign Up
            </button>
            <span className="text-gray-500 mt-8 text-base">
              Or sign up with
            </span>
            <button className="flex items-center gap-4 px-10 py-4 mt-6 border rounded-lg hover:bg-gray-50 transition-colors">
              <FcGoogle className="text-4xl" />{" "}
              <span className="text-xl">Google</span>
            </button>
          </form>
          <div
            className={`absolute top-0 right-0 h-full w-1/2 bg-gradient-to-r from-purple-500 to-indigo-700 text-white flex flex-col items-center justify-center text-center transition-transform duration-700 shadow-xl`}
          >
            <h2 className="text-4xl font-bold mb-6">Hello, Friend!</h2>
            <p className="mb-8 text-xl px-8">
              Register now and embark on your extraordinary journey
            </p>
            <button className="py-4 px-10 border border-white rounded-lg hover:bg-white hover:bg-opacity-20 text-xl transition-colors">
              <Link to={"/login"}>Login</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
