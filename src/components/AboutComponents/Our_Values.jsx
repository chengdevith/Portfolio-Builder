import React from 'react';
import { Card } from "flowbite-react";
import { FaLightbulb, FaPalette, FaUniversalAccess, FaUserShield, FaCheckCircle, FaGift } from "react-icons/fa";

const values = [
  {
    title: "Simplicity",
    description: "We believe in creating tools that are easy to use and understand.",
    icon: <FaLightbulb className="text-red-600 text-5xl mb-4" />,
  },
  {
    title: "Creativity",
    description: "We design unique and innovative templates that stand out.",
    icon: <FaPalette className="text-yellow-300 text-5xl mb-4" />,
  },
  {
    title: "Accessibility",
    description: "We ensure our tools are available to everyone, everywhere.",
    icon: <FaUniversalAccess className="text-blue-500 text-5xl mb-4" />,
  },
  {
    title: "Empowerment",
    description: "We help users take control of their professional stories.",
    icon: <FaUserShield className="text-purple-500 text-5xl mb-4" />,
  },
  {
    title: "Quality",
    description: "We deliver excellence in every template and feature we offer.",
    icon: <FaCheckCircle className="text-green-500 text-5xl mb-4" />,
  },
  {
    title: "Free",
    description: "Create and showcase your portfolio for free—no hidden fees or subscriptions.",
    icon: <FaGift className="text-pink-500 text-5xl mb-4" />,
  },
];

export default function Our_Values() {
  return (
    <div className="max-w-screen-xl m-auto py-16">
      <h2 className="text-center text-4xl font-bold text-color-secondary mb-10">Our Values</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
        {values.map((value, index) => (
          <Card key={index} className="shadow-md p-6 text-center border-none">
            <div className="flex flex-col items-center">
              {/* Icon */}
              {value.icon}
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
