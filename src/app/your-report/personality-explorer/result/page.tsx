"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Page = () => {
  const [activeTab, setActiveTab] = useState("Personality");

  const tabs = [
    "Personality",
    "Characteristics",
    "Strengths/ Weaknesses",
    "Work Style",
    "Preferences",
    "Interpersonal Interaction",
    "Work Environment",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Title Animation */}
      <motion.h1
        className="text-lg font-semibold"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Your <span className="text-[#0047AB] font-bold">Result</span>
      </motion.h1>

      {/* Tabs with Hover & Active State */}
      <div className="flex gap-6 border-b mt-2 text-[#999CA1] text-sm">
        {tabs.map((tab) => (
          <motion.span
            key={tab}
            className={`pb-2 text-[16px] font-bold cursor-pointer transition-all ${
              activeTab === tab
                ? "border-b-2 border-[#0047AB] text-black"
                : "hover:text-black"
            }`}
            onClick={() => setActiveTab(tab)}
            whileHover={{ scale: 1.05 }}
          >
            {tab}
          </motion.span>
        ))}
      </div>

      {/* Content Section */}
      <div className="flex gap-4 items-start mt-4">
        {/* Image with Hover Effect */}
        <motion.div
          className="w-[247px] h-[189px] bg-[#E7DFEA] rounded-lg flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
        >
          <Image src="/test_1_result.png" alt="Personality Image" width={100} height={100} />
        </motion.div>

        {/* Details Section */}
        <div>
          {/* Title & Type */}
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-2xl">Architect</h2>
            <span className="border border-[#CACACA] h-[21px]" />
            <motion.span
              className="text-[#9361A6] font-bold text-xl cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              INTJ Personality
            </motion.span>
          </div>

          {/* Tags with Smooth Hover Effect */}
          <div className="flex gap-2 mt-2">
            {["STRATEGIC", "ANALYTICAL", "INDEPENDENT"].map((tag) => (
              <motion.span
                key={tag}
                className="bg-[#E7DFEA] text-[#9361A6] px-3 py-1 text-xs font-semibold rounded-full"
                whileHover={{ scale: 1.1, backgroundColor: "#D6C6E1" }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Description with Fade-in Animation */}
          <motion.p
            className="text-gray-700 text-sm mt-3 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Congratulations on taking the first step for personalized Career
            Planning & Assessment! We understand the significance of making
            informed decisions as you navigate your academic journey and future
            career. We are committed to empowering individuals with the tools
            and insights needed to confidently navigate the world of careers and
            education.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
