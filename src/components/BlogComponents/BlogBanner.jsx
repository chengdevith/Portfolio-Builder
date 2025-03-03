import React from "react";
import bannerImage from "../../assets/images/banner.png";

const BlogBanner = () => {
  return (
    <div className="w-full">
      {/* Hero Banner Section */}
      <section
        className="relative w-full md:min-h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 px-2 md:px-10 lg:px-36 pb-10 lg:pb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Introducing PortfolioBuilder: <br /> 
            Crafting Digital Experiences <br /> 
            with Passion
          </h2>
          <p className="mt-4 text-lg text-gray-200 max-w-lg mx-auto">
            Welcome to the launch of PortfolioBuilder, your new go-to platform
            for creating stunning, personal portfolios with ease.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BlogBanner;
