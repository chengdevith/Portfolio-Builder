import React, { useState, useRef } from "react";
import { Send, MapPin, Phone, Mail, CheckCircle, XCircle, Loader } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact_Us() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    submitted: false,
    loading: false,
    success: false,
    error: false,
  });

  const [focusedField, setFocusedField] = useState(null);
  const form = useRef();

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setFormState({ ...formState, loading: true, success: false, error: false });

    emailjs
      .sendForm("service_czlib9c", "template_ve4ia6r", form.current, {
        publicKey: "8IwfGumgGlxkRxL2L",
      })
      .then(
        () => {
          setFormState({
            ...formState,
            name: "",
            email: "",
            message: "",
            submitted: true,
            loading: false,
            success: true,
            error: false,
          });
          setTimeout(() => {
            setFormState((prevState) => ({
              ...prevState,
              submitted: false,
            }));
          }, 3000);
        },
        (error) => {
          setFormState({
            ...formState,
            loading: false,
            success: false,
            error: true,
          });
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="bg-sky-50 py-16 flex justify-center px-4 min-h-screen">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-8 relative">
        {/* Left Column: Contact Form + Contact Info */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {/* Contact Form */}
          <div className="bg-white backdrop-blur-sm bg-opacity-80 text-color-primary p-8 rounded-2xl shadow-xl shadow-purple-300 transform transition-all duration-500 hover:shadow-purple-400">
            {formState.submitted && formState.success ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4 animate-bounce" />
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Thank You!
                </h2>
                <p className="text-lg text-gray-600">
                  Your message has been sent successfully. We'll get back to you
                  soon!
                </p>
              </div>
            ) : formState.error ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <XCircle className="w-16 h-16 text-red-500 mb-4 animate-bounce" />
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  Oops!
                </h2>
                <p className="text-lg text-gray-600">
                  Something went wrong. Please try again later.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-4"></div>
                <p className="text-center text-gray-600 lg:text-lg mb-6">
                  Have questions or ideas? We'd love to hear from you!
                </p>
                <form className="space-y-5" ref={form} onSubmit={sendEmail}>
                  <div
                    className={`relative transition-all duration-300 ${
                      focusedField === "name" ? "transform -translate-y-1" : ""
                    }`}
                  >
                    <label className="block text-sm font-medium py-1 text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Enter your name"
                      className="w-full p-3 rounded-lg border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div
                    className={`relative transition-all duration-300 ${
                      focusedField === "email" ? "transform -translate-y-1" : ""
                    }`}
                  >
                    <label className="block text-sm font-medium py-1 text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Enter your email"
                      className="w-full p-3 rounded-lg border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div
                    className={`relative transition-all duration-300 ${
                      focusedField === "message"
                        ? "transform -translate-y-1"
                        : ""
                    }`}
                  >
                    <label className="block text-sm font-medium py-1 text-gray-700">
                      Message
                    </label>
                    <textarea
                      rows="4"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Enter your message"
                      className="w-full p-3 rounded-lg border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formState.loading}
                    className="w-full !bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    {formState.loading ? (
                      <Loader className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 animate-pulse" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Contact Information */}
          <div className="bg-white backdrop-blur-sm bg-opacity-80 p-6 rounded-2xl shadow-lg flex flex-col gap-4 transform transition-all duration-500 hover:shadow-indigo-300">
            <h3 className="text-xl font-bold text-gray-800 border-b border-gray-100 pb-2">
              Contact Information
            </h3>
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-2 rounded-full">
                <MapPin className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Our Location</p>
                <p className="text-gray-600">
                  Science and Technology Advanced Development Co., Ltd.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 p-2 rounded-full">
                <Phone className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Phone Number</p>
                <p className="text-gray-600">+855 23 996 638</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-pink-100 p-2 rounded-full">
                <Mail className="w-5 h-5 text-pink-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Email Address</p>
                <p className="text-gray-600">info@example.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full lg:w-1/2">
          <div className="relative h-full bg-white p-2 rounded-2xl shadow-lg overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute inset-0.5 bg-white rounded-2xl z-10 overflow-hidden">
              <iframe
                title="Google Map"
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.235649787656!2d104.89921187481747!3d11.578254588623496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951e96d257a6f%3A0x6b66703c5fc0c7cc!2sScience%20and%20Technology%20Advanced%20Development%20Co.%2C%20Ltd.!5e1!3m2!1sen!2skh!4v1740897037091!5m2!1sen!2skh"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}