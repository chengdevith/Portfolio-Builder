import React from 'react';
import Creative_Team from '../../assets/GIF_images/Creative_team.gif';

export default function Our_Vision() {
  return (
    <section className="py-14 px-6 sm:px-8 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">

        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-color-secondary">Our Vision</h2>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-color-description  leading-relaxed">
            To become the leading platform for creating professional portfolios and resumes, inspiring individuals to achieve their career goals with confidence and creativity.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src={Creative_Team}
            alt="Our Vision"
            className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-md rounded-lg"
          />
        </div>

      </div>
    </section>
  );
}
