import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PlusIcon = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    className="text-current"
  >
    <motion.path
      d="M12 5V19M5 12H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ rotate: 0 }}
      whileHover={{ rotate: 45 }}
      transition={{ duration: 0.3 }}
    />
  </svg>
);

function TemplateCardComponent({ id, image, description, name, more_info }) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/p1');
  };

  const cardVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    hover: { 
      scale: 1.03,
      boxShadow: "0px 15px 30px rgba(147, 51, 234, 0.3)"
    }
  };

  const buttonVariants = {
    initial: { scale: 0, opacity: 0 },
    hover: { scale: 1, opacity: 1 }
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <motion.div
        variants={cardVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="relative w-full max-w-sm mb-10 cursor-pointer"
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-purple-50 dark:from-gray-800 dark:to-gray-900 shadow-lg">
          <div className="relative overflow-hidden">
            <motion.img
              className="h-72 w-full object-cover rounded-t-xl"
              src={image}
              alt={description}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />

            <motion.div
              className="absolute top-4 right-4" 
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                variants={buttonVariants}
                onClick={handleClick}
                className="relative z-10 w-10 h-10 rounded-full bg-white flex items-center justify-center text-purple-600 hover:text-white hover:bg-purple-600 transition-colors duration-300 shadow-md" // Smaller button
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0px 0px 10px rgba(147, 51, 234, 0.5)"
                }}
              >
                <PlusIcon />
              </motion.button>
            </motion.div>
          </div>

          <motion.div 
            className="px-6 py-4 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h2 
              className="!text-2xl py-3  text-gray-900 dark:text-white truncate bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              {description}
            </motion.h2>
            <motion.p 
              className="mt-1 text-sm text-gray-600 dark:text-gray-300"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {name} - {more_info}
            </motion.p>
            
            <motion.div
              className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full opacity-20"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 90, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default TemplateCardComponent;