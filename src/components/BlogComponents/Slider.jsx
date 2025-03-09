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

  return (
    <div className="relative w-full px-2 md:px-10 lg:px-36 pb-10 lg:pb-20 py-20">
      {/* Journey Section */}
      <div className="bg-white-to-r from-purple-500 to-blue-500 py-16 text-black">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-2xl px-6 mx-auto"
        >
          <h2 className="text-[36px] md:text-4xl font-bold font-opensans text-color-primary">
            Our Journey So Far
          </h2>
          <p className="text-[12px] mt-4 text-color-description">
            With over 10+ years of combined experience in the digital realm
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 bg-color-primary  text-white font-opensans text-[20px] py-3 px-6 rounded-full shadow-md transition duration-300"
          >
            Create the Portfolio Now
          </motion.button>
        </motion.div>
      </div>

      {/* Slider Section */}
      <div className="bg-gray-100 flex items-center justify-center">
        <div className="w-11/12 md:w-3/4">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index} className="p-5">
                <div className="bg-slate-50 rounded-lg shadow-lg p-4  ">
                  <div className="flex justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-60 h-60 object-contain rounded-md"
                    />
                  </div>
                  <div className="mt-4 p-4 bg-color-primary rounded-b-lg">
                    <p className="font-semibold text-white text-center text-lg">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Slide;
