import React, { useState } from 'react';

function ChooseUsCard({ id, image, label, title, description }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`w-80 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out transform ${isHovered ? 'scale-105 shadow-xl' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${isHovered ? 'scale-110' : ''}`} 
          src={image} 
          alt={title}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}></div>
        <div className={`absolute top-4 left-4 bg-indigo-600 text-white text-sm font-medium px-3 py-1 rounded-full transform transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
          {label}
        </div>
      </div>
      
      <div className="p-5 flex flex-col gap-2">
        <div className={`h-1 w-12 bg-indigo-600 transition-all duration-300 ${isHovered ? 'w-24' : ''}`}></div>
        <h4 className="text-xl font-semibold tracking-tight transition-colors duration-300 text-gray-900">{title}</h4>
        <p className={`text-gray-600 text-sm transition-all duration-500 ${isHovered ? 'line-clamp-none' : 'line-clamp-2'}`}>
         {description}
        </p>
        
      </div>
    </div>
  );
}

export default ChooseUsCard;