import React from "react";
import Mission from "../../assets/GIF_images/Mission.gif";

export default function Our_Mission() {
  return (
    <section className="py-14 px-8 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        <div className="flex justify-center">
          <img
            src={Mission}
            alt="Our Mission"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-md"
          />
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-color-secondary">
            Our Mission
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-color-description  mt-6 leading-relaxed">
            To empower professionals and job seekers with beautifully designed, customizable portfolio and CV templates that help them showcase their skills and stand out in their careers.
          </p>
        </div>
      </div>
    </section>
  );
}
