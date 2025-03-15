import React, { useState } from 'react';
import { FaLightbulb, FaPalette, FaUniversalAccess, FaUserShield, FaCheckCircle, FaGift } from 'react-icons/fa';

export default function Our_Values() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const values = [
    { 
      title: 'Simplicity', 
      description: 'We create easy-to-use tools that streamline your workflow and save you time.', 
      icon: <FaLightbulb className="text-5xl" />,
      color: 'from-red-500 to-red-600',
      textColor: 'text-red-500',
      bgColor: 'bg-red-50'
    },
    { 
      title: 'Creativity', 
      description: 'Innovative and unique templates that help you stand out from the crowd.', 
      icon: <FaPalette className="text-5xl" />,
      color: 'from-yellow-400 to-yellow-500',
      textColor: 'text-yellow-500',
      bgColor: 'bg-yellow-50'
    },
    { 
      title: 'Accessibility', 
      description: 'Our tools are designed to be accessible to everyone, regardless of background or ability.', 
      icon: <FaUniversalAccess className="text-5xl" />,
      color: 'from-blue-500 to-blue-600',
      textColor: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    { 
      title: 'Empowerment', 
      description: 'We help users take control of their careers and professional development.', 
      icon: <FaUserShield className="text-5xl" />,
      color: 'from-purple-500 to-purple-600',
      textColor: 'text-purple-500',
      bgColor: 'bg-purple-50'
    },
    { 
      title: 'Quality', 
      description: 'We strive for excellence in every template and tool we create, ensuring professional results.', 
      icon: <FaCheckCircle className="text-5xl" />,
      color: 'from-green-500 to-green-600',
      textColor: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    { 
      title: 'Free', 
      description: 'No hidden fees or subscriptions - our core tools are free for everyone to use.', 
      icon: <FaGift className="text-5xl" />,
      color: 'from-pink-500 to-pink-600',
      textColor: 'text-pink-500',
      bgColor: 'bg-pink-50'
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
   

      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-color-secondary md:text-5xl font-bold mb-4 inline-block relative">
            Our Values
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide our work and shape our mission to empower your success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className={`flex flex-col items-center text-center p-8 rounded-2xl shadow-lg transition-all duration-500 ${value.bgColor} backdrop-blur-sm h-full transform ${hoveredIndex === index ? 'scale-105' : 'scale-100'}`}
              >
                {/* Animated icon container */}
                <div className={`relative flex items-center justify-center w-20 h-20 rounded-full mb-6 bg-white shadow-md overflow-hidden group-hover:shadow-lg transition-all duration-300`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className={`relative z-10 ${value.textColor} group-hover:text-white transition-colors duration-300`}>
                    {value.icon}
                  </div>
                </div>

                <h3 className={`text-2xl font-bold mb-3 ${value.textColor}`}>{value.title}</h3>
                
                <p className="text-gray-700 transition-all duration-300 group-hover:text-gray-900">
                  {value.description}
                </p>
                
                {/* Animated bottom border */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${value.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}