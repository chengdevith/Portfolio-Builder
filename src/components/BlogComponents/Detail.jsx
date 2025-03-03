import React, { useState } from "react";
import stu2 from "../../assets/images/stu2.png";
import second from "../../assets/images/second.png";
import third from "../../assets/images/third.png";
import creator from "../../assets/images/creator.png";

const Details = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <section className="w-full md:min-h-screen bg-gradient-to-r from-purple-300 to-purple-600 px-4 md:px-10 lg:px-36 py-16 flex flex-col md:flex-row items-center justify-center">
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-black text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">What is PortfolioBuilder?</h2>
        <p className="text-[12px] md:text-xl text-color-description mb-6 leading-relaxed">
          PortfolioBuilder is not just another website; it's a revolution in how
          professionals, students, and creatives from all walks of life can
          present their achievements. Whether you're in engineering, teaching,
          computer science, or any other field, our platform provides:
        </p>
        <button className="bg-color-primary hover:bg-color-secondary text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
          Contact Us Now
        </button>
      </div>

      {/* Right Content (Images) */}
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 mt-8 md:mt-0">
        <img
          src={stu2}
          alt="Student"
          className={`rounded-lg w-full h-auto shadow-lg transition-all duration-1000 ease-in-out transform ${
            clicked ? "scale-110 opacity-100 shadow-2xl rotate-6" : "opacity-50"
          } hover:scale-105 hover:opacity-100 hover:shadow-2xl hover:rotate-3 hover:translate-y-2`}
          onClick={handleClick}
        />
        <img
          src={second}
          alt="Second"
          className={`rounded-lg w-full h-auto shadow-lg transition-all duration-1000 ease-in-out transform ${
            clicked ? "scale-110 opacity-100 shadow-2xl rotate-6" : "opacity-50"
          } hover:scale-105 hover:opacity-100 hover:shadow-2xl hover:rotate-3 hover:translate-y-2`}
          onClick={handleClick}
        />
        <img
          src={third}
          alt="Content"
          className={`rounded-lg w-full h-auto shadow-lg transition-all duration-1000 ease-in-out transform ${
            clicked ? "scale-110 opacity-100 shadow-2xl rotate-6" : "opacity-50"
          } hover:scale-105 hover:opacity-100 hover:shadow-2xl hover:rotate-3 hover:translate-y-2`}
          onClick={handleClick}
        />
        <img
          src={creator}
          alt="Engineer"
          className={`rounded-lg w-full h-auto shadow-lg transition-all duration-1000 ease-in-out transform ${
            clicked ? "scale-110 opacity-100 shadow-2xl rotate-6" : "opacity-50"
          } hover:scale-105 hover:opacity-100 hover:shadow-2xl hover:rotate-3 hover:translate-y-2`}
          onClick={handleClick}
        />
      </div>
    </section>
  );
};

export default Details;
