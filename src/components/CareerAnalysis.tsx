"use client";
import React from "react";
import { motion } from "framer-motion";

const CareerAnalysis = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex items-center mx-auto w-full max-w-7xl py-6"
    >
      <div className="w-full max-w-7xl gap-4 md:gap-8 flex flex-col md:flex-row justify-between items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full md:w-3/4 text-center md:text-left"
        >
          <h1 className="text-xl md:text-3xl font-bold text-gray-800">
            Your Career Analysis Report
          </h1>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Your Report ensures a complete understanding of your strengths, areas for growth, and ideal career fit.
          </p>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full md:w-1/2 flex flex-col md:flex-row items-center border border-custom rounded-lg px-4 py-3 bg-white text-center md:text-left"
        >
          <div className="flex-1">
            <span className="block font-semibold text-gray-700 text-sm">
              Want to speak to an expert Career Counsellor?
            </span>
            <span className="block text-gray-500 text-xs mt-1">
              Explore a list of 1000+ Expert Career Counsellors near you!
            </span>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-3 md:mt-0 bg-gray-200 hover:bg-gray-500 hover:text-white transition-all duration-300 font-bold text-sm py-2 px-4 rounded-lg"
          >
            See All
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CareerAnalysis;