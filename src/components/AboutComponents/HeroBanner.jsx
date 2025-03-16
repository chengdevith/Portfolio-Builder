import React, { useEffect, useState } from "react";
import About from "../../assets/GIF_images/About_us.gif";

export default function HeroBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [animateCount, setAnimateCount] = useState(false);
  const [counts, setCounts] = useState({ years: 0, projects: 0, clients: 0 });

  useEffect(() => {
    // Set initial visibility after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // Start counter animations after elements are visible
    const counterTimer = setTimeout(() => {
      setAnimateCount(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearTimeout(counterTimer);
    };
  }, []);

  // Animate the counters
  useEffect(() => {
    if (animateCount) {
      const duration = 2000; // 2 seconds for the animation
      const intervalYears = setInterval(() => {
        setCounts((prev) => {
          const newYears = prev.years < 5 ? prev.years + 1 : 5;
          const newProjects = prev.projects < 20 ? prev.projects + 4 : 20;
          const newClients = prev.clients < 80 ? prev.clients + 16 : 80;

          if (newYears === 5 && newProjects === 20 && newClients === 80) {
            clearInterval(intervalYears);
          }

          return {
            years: newYears,
            projects: newProjects,
            clients: newClients,
          };
        });
      }, duration / 5);

      return () => clearInterval(intervalYears);
    }
  }, [animateCount]);

  // Stats data
  const stats = [
    {
      number: counts.years + "+",
      text: "Years Experience",
      color: "from-purple-400 to-purple-600",
    },
    {
      number: counts.projects + "+",
      text: "Projects Done",
      color: "from-blue-400 to-blue-600",
    },
    {
      number: counts.clients + "+",
      text: "Happy Clients",
      color: "from-pink-400 to-pink-600",
    },
  ];

  return (
    <section className="relative py-16 px-6 md:px-12 max-w-screen-xl mx-auto h-screen overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 h-full">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <div
            className={`overflow-hidden transition-all duration-1000 ${
              isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform -translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-700 leading-tight mb-2">
              Crafting Digital <br className="hidden sm:block" />
              <span className="relative">
                Experiences
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 200 8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0,5 Q50,0 100,5 T200,5"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#9333ea" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#4f46e5" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{" "}
              with Passion
            </h2>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            }`}
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-6 leading-relaxed max-w-lg">
              Transforming ideas into elegant solutions through creative design
              and innovative development that captivates and engages your
              audience.
            </p>
          </div>

          <div
            className={`mt-10 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            }`}
          >
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {stats.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-lg blur transition-opacity duration-300"></div>

                  <div className="relative overflow-hidden p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl z-10">
                    <div
                      className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    ></div>

                    <h3
                      className={`text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${item.color}`}
                    >
                      {item.number}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 text-sm mt-1 whitespace-nowrap">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-4 justify-center lg:justify-start">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-200 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                Get Started
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-medium hover:bg-purple-50 transition-all duration-300">
                Our Work
              </button>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className={`flex justify-center items-center transition-all duration-1000 delay-700 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-10"
          }`}
        >
          <div className="relative">
            {/* Decorative elements around the image */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-purple-500 rounded-tl-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-purple-500 rounded-br-lg"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full opacity-70 animate-pulse"></div>

            <div className="relative p-2 bg-white rounded-2xl shadow-2xl transform hover:rotate-1 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 opacity-30 rounded-2xl blur"></div>
              <img
                src={About}
                alt="About us"
                className="w-full max-w-md rounded-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
