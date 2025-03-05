import React from "react";
import { useState } from "react";

const frequentlyAskQuestions = [
  {
    title: "Do I need coding skills to use this portfolio builder?",
    description:
      "you don't need coding skills to use this portfolio builder. Our platform is designed to be simple and intuitive, letting you create a professional portfolio with easy-to-use tools—no coding required.",
  },
  {
    title: "Does my portfolio work on mobile devices?",
    description: "Yes, your portfolio works on mobile devices. Our platform is fully optimized to ensure your site looks great and functions smoothly on smartphones, tablets, and desktops alike. You can also preview how it appears on different screen sizes before publishing."
  },
  
];

const FaqComponent  = () => {
  const [activeId, setActiveId] = useState(null);

  const togglerFunction = (index) => {
    if (activeId === index) {
      setActiveId(null);
    } else {
      setActiveId(index);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[800px] h-max border rounded-lg bg-white ">
        {frequentlyAskQuestions.map((item, i) => (
          <div key={i} className="border-b last:border-b-0">
            <div
              className={`px-5 py-4 flex items-center justify-between ${
                activeId === i ? "bg-white rounded-lg" : ""
              }`}
              onClick={() => togglerFunction(i)}
            >
              <h6 className="flex-1 ">{item.title}</h6>
              <span>
                {activeId === i ? (
                  <i className="fa-solid fa-angle-up"></i>
                ) : (
                  <i className="fa-solid fa-angle-down"></i>
                )}
              </span>
            </div>
            {activeId === i && (
              <div className="px-5 py-4 flex items-center justify-between description">
                <p>{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqComponent;