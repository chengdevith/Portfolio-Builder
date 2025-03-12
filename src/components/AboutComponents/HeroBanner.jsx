import React from "react";
import About from "../../assets/GIF_images/About_us.gif";

export default function HeroBanner() {
  return (
    <section className="py-16 px-6 md:px-12 max-w-screen-xl mx-auto h-[100vh]">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="text-center lg:text-left ">
          <h2 className="text-3xl sm:text-4xl md:text-[45px] font-bold text-color-primary leading-tight">
            Crafting Digital <br className="hidden sm:block" /> Experiences with Passion
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-color-description  mt-6 leading-relaxed py-5">
            Transforming ideas into elegant solutions through creative design and innovative development.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
            {[
              { number: "5+", text: "Years Experience" },
              { number: "20+", text: "Projects Done" },
              { number: "80+", text: "Happy Clients" },
            ].map((item, index) => (
              <div
                key={index}
                className="shadow-lg shadow-purple-200 p-6 rounded-lg text-center w-28 bg-white"
              >
                <h3 className="text-xl font-semibold text-color-primary">{item.number}</h3>
                <p className="text-gray-500 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={About}
            alt="About us"
            className="w-full max-w-xs sm:max-w-md rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
