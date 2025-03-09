import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CiLock } from "react-icons/ci";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetRequestResetPasswordMutation } from "../../redux/services/authSlice";
const RequestResetPassword = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  const [getRequestReset, { isLoading, error }] =
    useGetRequestResetPasswordMutation();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Must put email"),
    }),
    onSubmit: async (values) => {
      try {
        getRequestReset({
          email: values?.email,
        }).unwrap();
        navigate("/reset-password", { state: values.email });
      } catch (error) {}
    },
  });
  return (
    <div
      data-aos="zoom-in"
      className="flex items-center justify-center min-h-screen bg-gray-100"
    >
      <div className="w-full max-w-lg p-10 bg-white rounded-xl shadow-lg">
        <div className="flex justify-center mb-5">
          <div className="w-20 h-20 flex items-center justify-center bg-color-body shadow-sm rounded-full">
            <CiLock className="text-5xl text-color-primary" />
          </div>
        </div>
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-4">
          Reset your password
        </h2>
        <p className="text-center text-gray-500 mb-10 text-lg">
          Enter your email to reset your password.
        </p>

        <form className="space-y-10" onSubmit={formik.handleSubmit}>
          <div className="mb-5">
            <input
              type="email"
              name="email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              required
              placeholder="Email"
              className="w-full px-6 py-5 border rounded-lg text-2xl"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-left text-lg pl-3">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <button
            type="submit"
            className="!mt-0 w-full py-5 !bg-purple-600 hover:!bg-purple-700 text-white font-semibold rounded-lg text-2xl transition-colors"
          >
            Get 6-digit code
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestResetPassword;
