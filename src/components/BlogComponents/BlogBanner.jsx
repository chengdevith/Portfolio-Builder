import React from 'react';
import bannerImage from '../../assets/images/banners.png';

const BlogBanner = () => {
  return (
    <div className="w-full">
      {/* Hero Banner Section */}
      <section
        className="relative bg-cover bg-center text-white h-screen flex items-center justify-start"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 px-4 md:px-10 lg:px-36 pb-10 lg:pb-20">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight animate-slideInLeft">
            Introducing PortfolioBuilder: <br /> Crafting Digital Experiences <br /> with Passion
          </h2>
          <p className="mt-4 text-[20px] text-color-body max-w-lg mx-auto animate-fadeIn">
            Welcome to the launch of PortfolioBuilder, your new go-to platform for creating stunning, personal portfolios with ease.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BlogBanner;
