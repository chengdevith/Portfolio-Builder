import React from 'react';

const Card = ({ image, title, categoies, template}) => {
  return (

    <div className="border border-gray-300 rounded-lg p-4 w-64 text-center shadow-md">
      <img src={`${image}`} className="text-xl font-semibold mb-2"></img>
      <h3 className="text-gray-700 mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{categoies}</p>
      <a
        href={template}
        className="text-blue-600 hover:text-blue-800 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Personal Website
      </a>
    </div>
  );
};

export default Card;