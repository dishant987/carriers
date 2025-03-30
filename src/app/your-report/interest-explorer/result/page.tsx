"use client";
import React from "react";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Title */}
      <motion.div
        className="flex items-center gap-4 pb-[16px]"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-lg font-bold text-[28px]">
          Your <span className="text-[#309759]">Result</span>
        </h1>

        <span className="border h-7 border-[#CACACA]" />
        <div className="flex gap-[10px]  font-bold  uppercase text-[#999CA1] text-[16px]">
          <span className="  px-[12px] py-[20px] border-b-2 border-[#309759] text-black font-bold cursor-pointer">
            Personality
          </span>
          <span className="cursor-pointer px-[12px] py-[20px] font-bold ">
            Characteristics
          </span>
          <span className="cursor-pointer px-[12px] py-[20px] font-bold ">
            Strengths/ Weaknesses
          </span>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-[8px] overflow-x-auto whitespace-nowrap text-[16px] mt-2 text-[#999CA1] text-sm border-b border-[#999CA1]">
        <span className="px-[12px] py-[10px] border-b-2 border-[#0047AB] text-black font-bold cursor-pointer">
          Personality
        </span>
        <span className="px-[12px] py-[10px] cursor-pointer font-bold">
          Preferences
        </span>
        <span className="px-[12px] py-[10px] cursor-pointer font-bold">
          Strengths/ Weaknesses
        </span>
        <span className="px-[12px] py-[10px] cursor-pointer font-bold">
          Skills and Strengths
        </span>
        <span className="px-[12px] py-[10px] cursor-pointer font-bold">
          Preferred Work Environment
        </span>
        <span className="px-[12px] py-[10px] cursor-pointer font-bold">
          Interaction Styles
        </span>
        <span className="px-[12px] py-[10px] cursor-pointer font-bold">
          Conclusion
        </span>
      </div>

      {/* Content */}
      <motion.div
        className="flex flex-col gap-4 items-start mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-lg font-bold text-[#FF6969] text-[24px] flex items-center justify-center gap-2">
          Realistic (R)
        </h1>
        <div className="flex gap-[16px]">
          {[
            "Practical and Hands-On",
            "Problem-solvers who prefer tangible results",
            "Enjoying work with tools and machinery",
          ].map((trait, index) => (
            <motion.span
              key={index}
              className="text-[#FF6969] text-[16px] font-normal border px-[12px] py-[10px] rounded-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {trait}
            </motion.span>
          ))}
        </div>
        <motion.span
          className="text-[#FF6969] text-[16px] font-normal border px-[12px] py-[10px] rounded-full"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Value efficiency and effectiveness in tasks
        </motion.span>

        {/* Details */}
        <motion.p
          className="text-[16px] text-[#5B6871] font-normal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Congratulations on taking the first step for personalized Career
          Planning & Assessment! We understand the significance of making
          informed decisions as you navigate your academic journey and future
          career. We are committed to empowering individuals with the tools and
          insights needed to confidently navigate the world of careers and
          education.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Page;
