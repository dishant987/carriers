"use client";
import React from "react";
import { motion } from "framer-motion";

const careerOptions = ["Engineer", "Doctor", "Teacher"];

const TopCareers = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-5 bg-white px-4 md:px-16 py-4 border-t border-b border-custom shadow-md"
    >
      {/* Left Side - Career Options */}
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-3 text-center md:text-left">
        <span className="text-gray-600 text-sm md:text-lg">
          Your <span className="font-semibold text-blue-600">TOP 3</span> Career Options
        </span>
        
        {/* Career Pills */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          {careerOptions.map((career, index) => (
            <motion.div
              key={career}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.4, ease: "easeOut" }}
              className="relative flex items-center border border-gray-300 h-[40px] rounded-full px-4 py-2 w-28 md:w-32 hover:shadow-lg transition"
            >
              {/* Number Circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.3, duration: 0.3 }}
                className="absolute left-1 top-1/2 -translate-y-1/2 flex items-center justify-center w-[25px] h-[25px] md:w-[30px] md:h-[30px] rounded-full bg-gray-300 text-white text-xs md:text-sm font-semibold"
              >
                {index + 1}
              </motion.div>
              
              {/* Text */}
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="ml-6 md:ml-8 text-gray-600 text-sm md:text-lg font-medium blur-[2px]"
              >
                {career}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Divider for larger screens */}
      <motion.span 
        initial={{ height: 0 }}
        animate={{ height: "40px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="hidden md:block border-r border-[#CACACA] h-10"
      />
      
      {/* Right Side - Call to Action */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3 text-center md:text-left"
      >
        <span className="text-gray-700 text-sm md:text-lg font-semibold">
          Choose them right here!
        </span>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-blue-300 transition"
        >
          Your Career Options
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default TopCareers;