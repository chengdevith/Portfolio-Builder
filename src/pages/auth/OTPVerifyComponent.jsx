import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "flowbite-react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useGetVerifyCodeMutation } from "../../redux/services/authSlice";
import * as Yup from "yup";
import { useLocation } from "react-router-dom";

export function OTPVerifyComponent() {
  const inputRefs = useRef([]);
  const location = useLocation();
  const email = location.state?.email || ""; 
  const [verifyCode, { isLoading, error }] = useGetVerifyCodeMutation();

  const otpSchema = Yup.object().shape({
    otp: Yup.array()
      .of(Yup.string().matches(/^[0-9]$/, "Only numbers are allowed"))
      .test(
        "otp-length",
        "OTP is required and must be 6 digits",
        (value) => value.filter(Boolean).length === 6
      ),
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        className="bg-white p-12 rounded-3xl shadow-2xl w-[480px] text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-4xl font-bold mb-6">Enter OTP</h2>
        <p className="text-lg text-gray-600 mb-8">
          We've sent a code to {email || "your email"}
        </p>
        <Formik
          initialValues={{ email: email, otp: new Array(6).fill("") }}
          validationSchema={otpSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const otp_code = values.otp.join("");
              const finalValue = {
                email: values.email,
                otp_code,
              };
              await verifyCode(finalValue).unwrap();
              // Handle success (e.g., redirect)
            } catch (err) {
              console.error("Verification failed:", err);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ values, setFieldValue, errors, touched, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div className="flex justify-center gap-4">
                {values.otp.map((digit, index) => (
                  <Field
                    key={index}
                    name={`otp[${index}]`}
                    type="text"
                    maxLength={1}
                    innerRef={(el) => (inputRefs.current[index] = el)}
                    className={`w-16 h-16 text-2xl text-center border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      touched.otp && errors.otp ? "border-red-500" : ""
                    }`}
                    value={values.otp[index]}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^[0-9]?$/.test(value)) {
                        setFieldValue(`otp[${index}]`, value);
                        if (value && index < 5) {
                          inputRefs.current[index + 1]?.focus();
                        }
                      }
                    }}
                    onKeyDown={(e) => {
                      if (
                        e.key === "Backspace" &&
                        !values.otp[index] &&
                        index > 0
                      ) {
                        setFieldValue(`otp[${index - 1}]`, "");
                        inputRefs.current[index - 1]?.focus();
                      }
                    }}
                  />
                ))}
              </div>
              {touched.otp && errors.otp && (
                <div className="text-red-500 mt-2">{errors.otp}</div>
              )}
              {error && (
                <div className="text-red-500 mt-2">
                  {error.data?.message || "Verification failed"}
                </div>
              )}
              <Button
                type="submit"
                className="w-full mt-6 !bg-blue-600 text-lg h-14"
                disabled={isLoading}
              >
                {isLoading ? "Verifying..." : "Verify OTP"}
              </Button>
            </Form>
          )}
        </Formik>
        <p className="text-base text-gray-500 mt-6">
          Didn't receive the code?{" "}
          <span className="text-blue-500 cursor-pointer font-medium">
            Resend
          </span>
        </p>
      </motion.div>
    </div>
  );
}