"use client";
import RiasecWheel from "@/components/RiasecWheel";
import React from "react";
import { motion } from "framer-motion";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: {
    y: -5,
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    transition: { duration: 0.3 },
  },
};

const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-lg font-bold text-[#0047AB]"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Themes of RIASEC
      </motion.h1>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <RiasecWheel />
      </motion.div>

      <motion.div className="py-[20px]">
        <motion.h1
          className="text-lg font-bold text-[#0047AB]"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Purpose and Applications of RIASEC in Career Development
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {[
            {
              title: "Alignment with Preferences",
              content:
                "Focuses on concrete, tangible information and present realities tangible information and present realities",
            },
            {
              title: "Enhanced Self-Awareness",
              content:
                "Focuses on concrete, tangible information and present realities tangible information and present realities",
            },
            {
              title: "Facilitates Goal Setting",
              content:
                "Focuses on concrete, tangible information and present realities tangible information and present realities",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-[#CACACA33] rounded-xl p-3"
              variants={item}
              whileHover="hover"
            >
              <p className="font-bold text-[16px]">{card.title}</p>
              <p className="text-[#5B6871] text-sm">{card.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="py-[20px]">
        <motion.h1
          className="text-lg font-bold text-[#0047AB]"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Benefits of Understanding Interest Using RIASEC for Career Planning
        </motion.h1>

        <motion.div
          className="flex gap-4 mt-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {[
            {
              title: "Career Exploration",
              content:
                "Focuses on concrete, tangible information and present realities tangible information and present realities",
            },
            {
              title: "Career Guidance",
              content:
                "Focuses on concrete, tangible information and present realities tangible information and present realities",
            },
            {
              title: "Team Building",
              content:
                "Focuses on concrete, tangible information and present realities tangible information and present realities",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-[#CACACA33] rounded-xl p-3"
              variants={item}
              whileHover="hover"
            >
              <p className="font-bold text-[16px]">{card.title}</p>
              <p className="text-[#5B6871] text-sm">{card.content}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-4 mt-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {[
            {
              title: "Assess Fit",
              content:
                "Focuses on concrete, tangible information and present realities tangible information and present realities",
            },
            {
              title: "Improved Decision-Making",
              content:
                "Focuses on concrete, tangible information and present realities tangible information and present realities",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-[#CACACA33] rounded-xl p-3"
              variants={item}
              whileHover="hover"

            >
              <p className="font-bold text-[16px]">{card.title}</p>
              <p className="text-[#5B6871] text-sm">{card.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Page;
