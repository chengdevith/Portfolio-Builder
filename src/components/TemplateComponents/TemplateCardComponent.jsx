import React from "react";
import { ImEye } from "react-icons/im";
import { FaRegEdit } from "react-icons/fa";
function TemplateCardComponent({ id, image, title, category }) {
  return (
    
      <div className="relative cardItem group hover:scale-110 overflow-hidden duration-300">
        <div className="border border-gray-300 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 bg-gray-200 overflow-hidden">
          <a href="#">
            <img
              className="h-60 w-full rounded-t-lg bg-gray-200 transition-transform duration-300"
              src={`${image}`}
              alt={title}
            />
          </a>
          <div className="px-5 py-3">
            <a href="#">
              <h2 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h2>
            </a>
            <a href="#">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {category}
              </p>
            </a>
          </div>
        </div>

        {/* Hover Buttons */}
        <div className="absolute bottom-24 left-0 w-full h-60 rounded-t-md bg-black/20 flex items-center justify-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-20 h-8 flex items-center justify-center bg-purple-500 hover:bg-purple-600 text-white text-xl rounded-xl shadow-lg hover:scale-110 transition-transform">
            <ImEye />
          </button>
          <button className="w-20 h-8 flex items-center justify-center bg-purple-500 hover:bg-purple-600 text-white text-xl rounded-xl shadow-lg hover:scale-110 transition-transform">
            <FaRegEdit />
          </button>
        </div>
      </div>
  );
}

export default TemplateCardComponent;
