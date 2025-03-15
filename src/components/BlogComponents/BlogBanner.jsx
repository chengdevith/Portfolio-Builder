import React from "react";
import galaxy from "../../assets/images/galaxy.webp";

const BlogBanner = () => {
  return (
    <div className="w-full">
      {/* Hero Banner Section */}
      <section
        className="relative bg-cover bg-center text-white h-screen flex items-center justify-start overflow-hidden"
        style={{ backgroundImage: `url(${galaxy})` }}
      >
        {/* Cosmic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/80 via-purple-900/50 to-transparent"></div>

        {/* Star-like Accents */}
        <div className="absolute inset-0 pointer-events-none">
          <span className="absolute w-1 h-1 bg-white rounded-full top-[20%] left-[10%] opacity-50"></span>
          <span className="absolute w-2 h-2 bg-white rounded-full top-[40%] right-[15%] opacity-70"></span>
          <span className="absolute w-1 h-1 bg-white rounded-full bottom-[25%] left-[60%] opacity-40"></span>
        </div>

        {/* Comet-like Glow */}
        <div className="absolute top-[60%] left-[5%] w-4 h-4 bg-purple-300 rounded-full blur-sm opacity-60 group-hover:left-[10%] transition-all duration-500"></div>

        {/* Content */}
        <div className="relative z-10 px-4 md:px-10 lg:px-36 pb-10 lg:pb-20 ">
          <h2
            className="text-[48px] md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-purple-500 to-purple-800 group-hover:brightness-125 transition-all duration-300"
            style={{ wordSpacing: "0.05em", lineHeight: "1.5" }}
          >
            Introducing PortfolioBuilder: <br /> Crafting Digital Experiences{" "}
            <br /> with Passion
          </h2>
          <p
            className="mt-4 text-[24px] text-gray-200 max-w-lg relative group"
            style={{ lineHeight: "1.8" }}
          >
            Welcome to the launch of PortfolioBuilder, your new go-to platform
            for creating stunning, personal portfolios with ease.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BlogBanner;
