import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing images
import stu1 from "../../assets/images/stu1.png";
import beginner from "../../assets/images/beginner.png";
import professional from "../../assets/images/professional.png";
import content from "../../assets/images/content.png";
import engineer1 from "../../assets/images/engineer1.png";

const data = [
  { image: stu1, title: "Student" },
  { image: beginner, title: "Beginner" },
  { image: professional, title: "Professional" },
  { image: content, title: "Content Creator" },
  { image: engineer1, title: "Engineering" },
];

function Slide() {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" },
  };

  return (
    <div className="relative w-full px-2 md:px-10 lg:px-36 pb-10 lg:pb-20 py-20">
      {/* Journey Section */}
      <div className="bg-white-to-r from-purple-500 to-blue-500 py-16 text-black">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-center max-w-2xl px-6 mx-auto"
        >
          <motion.h2
            className="text-[48px] md:text-5xl font-bold font-opensans text-color-primary"
            style={{ wordSpacing: "0.2em", lineHeight: "1.5" }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Our Journey So Far
          </motion.h2>
          <motion.p
            className="text-[16px] mt-4 text-color-description"
            style={{ wordSpacing: "0.15em", lineHeight: "1.8" }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            With over 10+ years of combined experience in the digital realm
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-color-primary text-white font-opensans text-[24px] py-3 px-8 rounded-lg shadow-lg border-2 border-transparent hover:bg-color-secondary transition-all duration-300"
            style={{ wordSpacing: "0.1em", lineHeight: "1.6" }}
          >
            Create the Portfolio Now
          </motion.button>
        </motion.div>
      </div>

      {/* Slider Section */}
      <div className="bg-gray-100 flex items-center justify-center py-10">
        <div className="w-11/12 md:w-3/4">
          <Slider {...settings}>
            {data.map((item, index) => (
              <motion.div
                key={index}
                className="p-5" // Increased from p-5 to p-8 for larger gaps
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:border-purple-400 transition-all duration-300">
                  <div className="flex justify-center p-6 bg-gradient-to-t from-gray-50 to-white">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-60 h-60 object-contain rounded-md"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="p-4 bg-gradient-to-r from-purple-200 to-purple-500">
                    <p
                      className="font-semibold text-white text-center text-[22px]"
                      style={{ wordSpacing: "0.15em", lineHeight: "1.6" }}
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Slide;
