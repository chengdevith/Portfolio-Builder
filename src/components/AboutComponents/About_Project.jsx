import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Sparkles, Lightbulb, Rocket, ArrowRight } from "lucide-react";

export default function About_Project() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeShape, setActiveShape] = useState(0);
  const [wordEffect, setWordEffect] = useState(0);

  const keyWords = [
    "professional",
    "engineering",
    "teaching",
    "computer science",
    "skills",
    "achievements",
  ];

  useEffect(() => {
    setIsVisible(true);
    const shapeInterval = setInterval(() => {
      setActiveShape((prev) => (prev + 1) % 5);
    }, 3000);
    const wordInterval = setInterval(() => {
      setWordEffect((prev) => (prev + 1) % keyWords.length);
    }, 2200);
    return () => {
      clearInterval(shapeInterval);
      clearInterval(wordInterval);
    };
  }, []);

  // Animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative bg-sky-50 text-gray-800 overflow-hidden py-24 px-8">
      {/* Subtle Background Elements */}
      <div
        className={`absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-200 opacity-30 blur-3xl transform transition-all duration-3000 ${
          activeShape === 0 ? "scale-125" : "scale-100"
        }`}
      ></div>
      <div
        className={`absolute bottom-20 right-20 w-64 h-64 rounded-full bg-orange-200 opacity-30 blur-3xl transform transition-all duration-3000 ${
          activeShape === 1 ? "scale-125" : "scale-100"
        }`}
      ></div>
      <div
        className={`absolute top-40 right-40 w-40 h-40 rounded-full bg-purple-100 opacity-20 blur-3xl transform transition-all duration-3000 ${
          activeShape === 2 ? "scale-125" : "scale-100"
        }`}
      ></div>
      <div
        className={`absolute bottom-40 left-40 w-48 h-48 rounded-full bg-orange-100 opacity-20 blur-3xl transform transition-all duration-3000 ${
          activeShape === 3 ? "scale-125" : "scale-100"
        }`}
      ></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-orange-400 opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-particle ${5 + Math.random() * 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content Container */}
      <div className="max-w-screen-xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="flex items-center justify-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={contentVariants}
        >
          <div className="relative">
            <Sparkles className="text-purple-600 absolute -left-12 -top-6 animate-spin-slow" size={28} />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-wider">
              About Our Project
            </h2>
            <Star className="text-orange-500 absolute -right-12 -top-6 animate-pulse" size={28} />
          </div>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-lg border border-purple-200/50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={contentVariants}
        >
          {/* Illustration */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center relative z-10">
                <Lightbulb size={40} className="text-purple-600" />
              </div>
              <div
                className="absolute top-0 left-0 w-20 h-20 rounded-full bg-orange-200 opacity-50 animate-ping"
                style={{ animationDuration: "3s" }}
              ></div>
            </div>
          </div>

          {/* Text Content */}
          <p className="text-xl md:text-2xl leading-loose tracking-wide text-center max-w-5xl mx-auto text-gray-700">
            This website offers easy-to-use,{" "}
            <span className={wordEffect === 0 ? "text-purple-600 font-semibold" : ""}>
              professional
            </span>{" "}
            portfolio templates for fields like{" "}
            <span className={wordEffect === 1 ? "text-purple-600 font-semibold" : ""}>
              engineering
            </span>
            ,{" "}
            <span className={wordEffect === 2 ? "text-purple-600 font-semibold" : ""}>
              teaching
            </span>
            , and{" "}
            <span className={wordEffect === 3 ? "text-purple-600 font-semibold" : ""}>
              computer science
            </span>
            . These templates help users showcase their{" "}
            <span className={wordEffect === 4 ? "text-purple-600 font-semibold" : ""}>
              skills
            </span>
            , experience, and{" "}
            <span className={wordEffect === 5 ? "text-purple-600 font-semibold" : ""}>
              achievements
            </span>{" "}
            in a clear and attractive way. Whether you're a student, professional, or building a personal brand, this platform simplifies creating a standout portfolio. Our goal is to save you time and effort while helping you present your best self!
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: <Rocket size={36} className="text-purple-600" />,
                title: "Launch Your Career",
                description: "Stand out to employers with a portfolio that shines",
              },
              {
                icon: <Sparkles size={36} className="text-orange-500" />,
                title: "Showcase Your Skills",
                description: "Highlight your unique talents and accomplishments",
              },
              {
                icon: <Lightbulb size={36} className="text-purple-600" />,
                title: "Save Time",
                description: "Create a professional portfolio in minutes",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="bg-gray-50 rounded-2xl p-8 border border-purple-200/50 hover:bg-purple-50 hover:shadow-md transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center mb-6">
                  {feature.icon}
                  <h3 className="font-bold text-2xl ml-4 text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-lg leading-relaxed text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-16 flex justify-center">
            <motion.button
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xl py-4 px-10 rounded-full shadow-md flex items-center transition-all group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Now
              <ArrowRight size={22} className="ml-3 group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float-particle {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-80px) translateX(15px); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.7; }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
}