import React, { useState } from "react";
const frequentlyAskQuestions = [
  {
    title: "Do I need coding skills to use this portfolio builder?",
    description:
      "You don't need coding skills to use this portfolio builder. Our platform is designed to be simple and intuitive, letting you create a professional portfolio with easy-to-use tools—no coding required.",
    icon: "💻",
  },
  {
    title: "Does my portfolio work on mobile devices?",
    description:
      "Yes, your portfolio works on mobile devices. Our platform is fully optimized to ensure your site looks great and functions smoothly on smartphones, tablets, and desktops alike. You can also preview how it appears on different screen sizes before publishing.",
    icon: "📱",
  },
];

const FaqComponent = () => {
  const [activeId, setActiveId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const togglerFunction = (index) => {
    if (activeId === index) {
      setActiveId(null);
    } else {
      setActiveId(index);
    }
  };

  return (
    <div className="w-full flex justify-center p-6 ">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600">
            Everything you need to know about our portfolio builder
          </p>
        </div>

        <div className="space-y-4">
          {frequentlyAskQuestions.map((item, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden shadow-sm transition-all duration-300 ${
                activeId === i ? "shadow-md border-blue-200" : ""
              } ${
                hoveredId === i && activeId !== i
                  ? "shadow-md border-gray-200"
                  : ""
              }`}
              onMouseEnter={() => setHoveredId(i)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`px-6 py-5 flex items-center justify-between cursor-pointer transition-colors duration-300 ${
                  activeId === i
                    ? "bg-blue-50"
                    : hoveredId === i
                    ? "bg-gray-50"
                    : "bg-white"
                }`}
                onClick={() => togglerFunction(i)}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-2xl bg-white p-2 rounded-lg shadow-sm">
                    {item.icon}
                  </span>
                  <h6 className="font-medium text-gray-800 text-lg">
                    {item.title}
                  </h6>
                </div>
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 ${
                    activeId === i ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L7 7L13 1"
                      stroke={activeId === i ? "#3B82F6" : "#9CA3AF"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Answer section with animation */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeId === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 py-5 bg-white border-t border-gray-100">
                  <div className="pl-16 pr-4">
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow transition-all duration-300 hover:bg-blue-600 hover:shadow-md transform hover:-translate-y-1">
            Still have questions? Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;
