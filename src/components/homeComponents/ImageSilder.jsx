import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";


const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((index) => (index + 1) % 3)
    );
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((index) => (index + 2) % 3)
    );
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Automatically move to next image
    }, 3000); // Change every 3 seconds (adjust as needed)

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array means it runs once on mount

  const images = [slide1, slide2, slide3];
  const positions = ["center", "left", "right"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left: { x: "-80%", scale: 0.7, zIndex: 3 },
    right: { x: "80%", scale: 0.7, zIndex: 3 },
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 ">
      <div className="relative w-full max-w-3xl flex items-center justify-center h-[300px] overflow-hidden">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="rounded-lg absolute shadow-lg"
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            style={{ width: "50%" }}
          />
        ))}
      </div>
     
    </div>
  );
};

export default ImageSlider;