import React, { useState, useEffect } from "react";
import logo from "../assets/Logo_images/Logo.png"

export default function FooterComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    { name: "Provide Templates" },
    { name: "Portfolio Builder" },
    { name: "Download CV" },
  ];

  const courses = [
    { name: "Web Design" },
    { name: "Java Programming" },
    { name: "Database Management" },
  ];

  const socials = [
    { name: "Twitter", icon: "twitter" },
    { name: "Instagram", icon: "instagram" },
    { name: "LinkedIn", icon: "linkedin" },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#634BA7] to-[#A632CD] text-white py-12 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/5 animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-32 h-32 rounded-full bg-white/5 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-10 left-1/2 w-48 h-48 rounded-full bg-white/5 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div
        className={`max-w-screen-xl mx-auto px-6 lg:px-12 relative z-10 transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center sm:text-left">
          {/* Logo & Brand Name */}
          <div
            className={`flex flex-col items-center sm:items-start transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
              <div className="p-4 overflow-hidden rounded-full mb-4 relative group  bg-purple-400">
                <div className="absolute inset-0  opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full"></div>
                <img
                  className="w-20 h-20 object-cover transition-transform duration-700 group-hover:scale-110"
                  src={logo}
                  alt="Logo"
                />
              </div>
            <span className="font-bold text-2xl mb-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Portify
            </span>
            <p className="text-white/80 text-sm max-w-xs">
              Your ultimate portfolio builder platform for creative
              professionals
            </p>
          </div>

          {/* Services */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="font-semibold text-xl mb-4 relative">
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Services
              </span>
              <div className="h-1 w-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mt-2"></div>
            </h3>
            <ul className="space-y-3 text-base">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="flex items-center transition-all duration-300 hover:translate-x-2"
                  onMouseEnter={() => setHoveredItem(`service-${index}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span className="mr-2">{service.icon}</span>
                  <span
                    className={`transition-colors duration-300 ${
                      hoveredItem === `service-${index}`
                        ? "text-pink-200"
                        : "text-white/80"
                    }`}
                  >
                    {service.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="font-semibold text-xl mb-4 relative">
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Courses
              </span>
              <div className="h-1 w-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mt-2"></div>
            </h3>
            <ul className="space-y-3 text-base">
              {courses.map((course, index) => (
                <li
                  key={index}
                  className="flex items-center transition-all duration-300 hover:translate-x-2"
                  onMouseEnter={() => setHoveredItem(`course-${index}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span className="mr-2">{course.icon}</span>
                  <span
                    className={`transition-colors duration-300 ${
                      hoveredItem === `course-${index}`
                        ? "text-pink-200"
                        : "text-white/80"
                    }`}
                  >
                    {course.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="font-semibold text-xl mb-4 relative">
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Contact
              </span>
              <div className="h-1 w-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mt-2"></div>
            </h3>
            <ul className="space-y-3 text-base">
              <li className="flex items-center transition-all duration-300 hover:translate-x-2">
                <span className="text-white/80">laysokneang@gmail.com</span>
              </li>
              <li className="flex items-center transition-all duration-300 hover:translate-x-2">
                <span className="text-white/80">+123 456 7890</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-white/90">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {socials.map((social, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110"
                  >
                    <span className="text-white text-sm">
                      {social.name.charAt(0)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2025 Portify | All Rights Reserved
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <button className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </button>
              <button className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                Sitemap
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
    </footer>
  );
}
