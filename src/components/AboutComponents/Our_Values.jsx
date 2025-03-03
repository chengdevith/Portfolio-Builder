
import React from 'react'
import { Card } from "flowbite-react";
import { FaStar } from "react-icons/fa";


const values = [
    {
      title: "Simplicity",
      description: "We believe in creating tools that are easy to use and understand.",
    },
    {
      title: "Creativity",
      description: "We design unique and innovative templates that stand out.",
    },
    {
      title: "Accessibility",
      description: "We ensure our tools are available to everyone, everywhere.",
    },
    {
      title: "Empowerment",
      description: "We help users take control of their professional stories.",
    },
    {
      title: "Quality",
      description: "We deliver excellence in every template and feature we offer.",
    },
    {
      title: "Free",
      description: "Create and showcase your portfolio for free—no hidden fees or subscriptions.",
    },
  ];

export default function Our_Values() {
  return (
    <div className="max-w-screen-xl m-auto py-16 ">
      <h2 className="text-center text-4xl font-bold text-color-secondary mb-10">Our Values</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
        {values.map((value, index) => (
          <Card key={index} className="shadow-md p-6 text-center border-none">
            <div className="flex flex-col items-center">
              {/* Icon */}
              <FaStar className="text-red-400 text-5xl mb-4" />
              {/* Title */}
              <h3 className="text-xl font-bold">{value.title}</h3>
              {/* Description */}
              <p className="text-color-description mt-2">{value.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
