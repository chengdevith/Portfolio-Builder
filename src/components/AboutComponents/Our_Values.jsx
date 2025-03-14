import React from 'react';
import { FaLightbulb, FaPalette, FaUniversalAccess, FaUserShield, FaCheckCircle, FaGift } from 'react-icons/fa';

const values = [
  { title: 'Simplicity', description: 'We create easy-to-use tools.', icon: <FaLightbulb className="text-red-600 text-5xl" /> },
  { title: 'Creativity', description: 'Innovative and unique templates.', icon: <FaPalette className="text-yellow-300 text-5xl" /> },
  { title: 'Accessibility', description: 'Available to everyone.', icon: <FaUniversalAccess className="text-blue-500 text-5xl" /> },
  { title: 'Empowerment', description: 'Helping users control their careers.', icon: <FaUserShield className="text-purple-500 text-5xl" /> },
  { title: 'Quality', description: 'Excellence in every template.', icon: <FaCheckCircle className="text-green-500 text-5xl" /> },
  { title: 'Free', description: 'No hidden fees or subscriptions.', icon: <FaGift className="text-pink-500 text-5xl" /> },
];

export default function Our_Values() {
  return (
    <section className="py-16 text-center">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-color-secondary mb-10">Our Values</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-12">
          {values.map((value, index) => (
            <div key={index} className="shadow-md p-6 rounded-lg flex flex-col items-center text-center">
              {value.icon}
              <h3 className="text-xl font-bold mt-3">{value.title}</h3>
              <p className="text-base lg:text-lg text-color-description mt-2">{value.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
