import React from "react";
import { ImEye } from "react-icons/im";
import { FaRegEdit } from "react-icons/fa";

function TemplateCardComponent({ id, image, title, category }) {
  return (
    <div className=" relative cardItem group hover:scale-105 overflow-hidden duration-300 w-full mb-10">
      <div className="border border-gray-300 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 bg-gray-200 overflow-hidden">
        {/* Image Container */}
        <div className="relative">
          <a href="#">
            <img
              className="h-72 md:h-72 w-full sm:h-60 rounded-t-lg bg-gray-200 transition-transform duration-300 object-cover"
              src={`${image}`}
              alt={title}
            />
          </a>

          {/* Hover Buttons */}
          <div className="absolute inset-0 flex items-center justify-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
            <button className="w-14 h-14 flex items-center justify-center bg-white hover:bg-color-secondary text-white text-xl rounded-full border-2 border-purple-400 hover:scale-110 transition-transform">
              <ImEye className="text-color-primary text-2xl" />
            </button>
          </div>
        </div>

        {/* Card Content */}
        <div className="px-5 py-3">
          <a href="#">
            <h2 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white truncate">
              {title}
            </h2>
          </a>
          <a href="#">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate">
              {category}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TemplateCardComponent;