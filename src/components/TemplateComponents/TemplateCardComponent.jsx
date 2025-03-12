import React from "react";
import { ImEye } from "react-icons/im";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function TemplateCardComponent({ id, image, title, category }) {
  const navigate = useNavigate();
  const hanldeClick = ()=>{
    navigate('/p1')
  }
  return (
    <div className="relative rounded-lg cardItem group hover:scale-105 overflow-hidden duration-300 w-full mb-1 hover:shadow-purple-500 shadow-xl">
    <div className="border dark:bg-gray-800 dark:border-gray-700 overflow-hidden ">
      
      {/* Image Container */}
      <div className="relative">
        <a href="#">
          <img
            className="h-48 sm:h-60 md:h-72 w-full rounded-t-lg bg-gray-200 transition-transform duration-300 object-cover"
            src={image}
            alt={title}
          />
        </a>
  
        {/* Hover Buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 sm:gap-5 opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-black/30 p-2">
          <button 
            onClick={hanldeClick} 
            className=" bg-gradient-to-t from-purple-400 to-white-400  border-color-primary hover:border-color-secondary shadow-lg w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center bg-slate-100  text-color-primary hover:text-color-secondary text-base sm:text-lg md:text-xl hover:scale-110 transition-transform rounded-full"
          >
            <ImEye />
          </button>
          {/* <button className="w-12 sm:w-14 md:w-16 lg:w-20 h-8 flex items-center justify-center bg-purple-500 hover:bg-color-secondary text-white text-sm sm:text-base rounded-xl shadow-lg hover:scale-110 transition-transform">
            <FaRegEdit />
          </button> */}
        </div>
      </div>
  
      {/* Card Content */}
      <div className="px-4 sm:px-5 py-3">
        <a href="#">
          <h2 className="mb-1 text-base sm:text-lg font-bold tracking-tight text-gray-900 dark:text-white truncate">
            {title}
          </h2>
        </a>
        <a href="#">
          <p className="text-sm sm:text-base font-normal text-gray-700 dark:text-gray-400 truncate">
            {category}
          </p>
        </a>
      </div>
    </div>
  </div>
  
  );
}

export default TemplateCardComponent;