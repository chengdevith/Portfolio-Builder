import React from "react";
function Blogs(){
    return(
        <div className="relative bg-gradient-to-r from-purple-700 via-purple-500 to-blue-500 text-white py-20 px-6 flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: "url('/path-to-your-image.jpeg')", // Replace with your image path
        }}
      ></div>

      {/* Content */}
      <div className="relative max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          Introducing <span className="text-pink-300">PortfolioBuilder</span>: 
          <br /> Crafting Digital Experiences with Passion
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Welcome to the launch of PortfolioBuilder, your new go-to platform for creating stunning, professional portfolios with ease! 
          Our mission is simple yet profound: Transforming ideas into elegant solutions through creative design and innovative development.
        </p>

        {/* Image Credit */}
        <div className="mt-6 text-gray-300 text-sm">
          <strong>iStock</strong> <br />
          Credit: akinbostanci
        </div>
      </div>
    </div>
      
    );
    
}
export default Blogs;