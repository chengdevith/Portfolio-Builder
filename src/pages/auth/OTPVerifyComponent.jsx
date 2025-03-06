import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "flowbite-react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useGetVerifyCodeMutation } from "../../redux/services/authSlice";
import * as Yup from "yup";

export function OTPVerifyComponent() {
  const inputRefs = useRef([]);
  const [verifyCode, { isLoading, error }] = useGetVerifyCodeMutation();

  const otpSchema = Yup.object().shape({
    otp: Yup.array()
      .of(Yup.string().matches(/^[0-9]$/, "Only numbers are allowed"))
      .test("otp-length", "OTP is required and must be 6 digits", (value) => value.filter(Boolean).length === 6),
  });

  const handleSubmit = async (values) => {
    try{
      const otp_code = values.otp.join("");
      const email = 
      console.log(email)
      const response = await verifyCode({email,otp_code}).unwrap()
      alert("OPT Verified Successfully: " + JSON.stringify(response))
    }catch(error){
      console.error("Verification failed",error)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        className="bg-white p-12 rounded-3xl shadow-2xl w-[480px] text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-4xl font-bold mb-6">Enter OTP</h2>
        <p className="text-lg text-gray-600 mb-8">We've sent a code to your email</p>
        <Formik
          initialValues={{ otp: new Array(6).fill("") }}
          validationSchema={otpSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue, errors, touched }) => (
            <Form>
              <div className="flex justify-center gap-4">
                {values.otp.map((digit, index) => (
                  <Field
                    key={index}
                    name={`otp[${index}]`}
                    type="text"
                    maxLength={1}
                    innerRef={(el) => (inputRefs.current[index] = el)}
                    className="w-16 h-16 text-2xl text-center border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      if (e.key === "Backspace" && !values.otp[index] && index > 0) {
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
              <Button type="submit" className="w-full mt-6 !bg-blue-600 text-lg h-14">
                Verify OTP
              </Button>
            </Form>
          )}
        </Formik>
        <p className="text-base text-gray-500 mt-6">
          Didn't receive the code?{" "}
          <span className="text-blue-500 cursor-pointer font-medium">Resend</span>
        </p>
      </motion.div>
    </div>
  );
}
