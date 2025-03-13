import React, { useState } from "react";
import { motion } from "framer-motion";

const FeatureCardComponent = ({ id, image, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden text-center p-6 bg-white rounded-lg shadow-md border border-transparent transition-all duration-300 ease-in-out h-auto md:h-64 w-full sm:w-80 md:w-72 lg:w-80"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        borderColor: "rgba(59, 130, 246, 0.5)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex flex-col items-center"
        initial={{ y: 0 }}
        animate={{ y: isHovered ? -5 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-4 p-3 rounded-full bg-blue-50 transition-all duration-300">
          <motion.img
            className="w-12 h-12 object-contain"
            src={image}
            alt={title}
            initial={{ rotate: 0 }}
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        
        <motion.h3
          className="text-lg font-semibold mb-3 text-gray-800"
          animate={{ 
            color: isHovered ? "#3b82f6" : "#1f2937"
          }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-base text-gray-600 line-clamp-3 md:line-clamp-2"
          animate={{ 
            opacity: isHovered ? 1 : 0.85
          }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>
      </motion.div>
      
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default FeatureCardComponent;