"use client";
import React from "react";
import { motion } from "framer-motion";

const options = [
  {
    left: {
      label: "Extraversion (E)",
      description: "Energized by social interactions and external activities",
    },
    right: {
      label: "Introversion (I)",
      description: "Energized by solitary activities and internal reflection",
    },
  },
  {
    left: {
      label: "Sensing (S)",
      description:
        "Focuses on concrete, tangible information and present realities",
    },
    right: {
      label: "Intuition (N)",
      description:
        "Focuses on abstract, conceptual information and future possibilities",
    },
  },
  {
    left: {
      label: "Thinking (T)",
      description: "Decisions based on logic and objective analysis",
    },
    right: {
      label: "Feeling (F)",
      description: "Decisions based on emotions and subjective analysis",
    },
  },
  {
    left: {
      label: "Judging (J)",
      description: "Prefers structured, organized approaches and planning",
    },
    right: {
      label: "Perceiving (P)",
      description: "Prefers flexible, spontaneous approaches and adaptability",
    },
  },
];

const cardtexts = [
  {
    id: 1,
    title: "Self Awareness",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
  },
  {
    id: 2,
    title: "Leadership Development",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
  },
  {
    id: 3,
    title: "Career Alignment",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
  },
  {
    id: 4,
    title: "Career Planning",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
  },
  {
    id: 5,
    title: "Team Building",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
  },
  {
    id: 6,
    title: "Conflict Resolution",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
  },
  {
    id: 7,
    title: "Improved Communication",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
  },
  {
    id: 8,
    title: "Strength Identification",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
  },
  {
    id: 9,
    title: "Personal Growth",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
  },
];

const page = () => {
  return (
    <>
      <h1 className="text-[28px] font-bold">
        Understanding{" "}
        <span className="text-[#0047AB]">Personality Explorer</span>
      </h1>
      <div>
        <h1 className="text-lg font-bold">Introduction</h1>
        <p className="text-[16px] mt-2 text-[#5B6871]">
          Congratulations on taking the first step for personalized Career
          Planning & Assessment! We understand the significance of making
          informed decisions as you navigate your academic journey and future
          career. We are committed to empowering individuals with the tools and
          insights needed to confidently navigate the world of careers and
          education.
        </p>
      </div>
      <div>
        <p className="text-[16px] mt-2 text-[#252A31]">
          <span className="font-bold">
            To understand your personality Myers-Brig Type Indicator (MBTI) test
            was used.{" "}
          </span>
          It is a personality explorer psychometric assessment tool that helps
          individuals understand their preferences, strengths, and areas for
          growth. Developed by Isabel Briggs Myers and Katharine Cook Briggs,
          the MBTI categorizes individuals into 16 personality types based on
          four dichotomies. The goal is to gain deeper self-awareness, enhance
          personal development, and improve interpersonal relationships
        </p>
      </div>
      <div className="mt-4">
        <h1 className=" uppercase text-[#0047AB] text-lg font-bold">
          The Four Dichotomies
        </h1>

        <div className="w-full max-w-2xl mx-auto p-6 bg-white ">
          {options.map((option, index) => (
            <div key={index} className="flex items-center justify-between py-4">
              <motion.div
                className="w-1/2 border border-[#CACACA] rounded-lg p-3"
                whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              >
                <p className="font-bold text-[16px]">{option.left.label}</p>
                <p className="text-[#696969] text-[16px]">
                  {option.left.description}
                </p>
              </motion.div>

              <div className="flex items-center justify-center w-1/3  px-8">
                <div className="relative w-full h-1 bg-gradient-to-r from-green-600 to-red-600 rounded-full">
                  <div className="absolute -left-3 -top-[6px] w-4 h-4 bg-green-600 rounded-full"></div>
                  <div className="absolute -right-3 -top-[6px] w-4 h-4 bg-red-600 rounded-full"></div>
                </div>
              </div>
              <motion.div
                className="w-1/2  border border-[#CACACA] rounded-lg p-3"
                whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              >
                <p className="font-bold text-[16px]">{option.right.label}</p>
                <p className="text-[#696969] text-[16px]">
                  {option.right.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="text-lg font-bold text-[#0047AB]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Purpose, Applications, and Benefits of MBTI in Career Development
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {cardtexts.map((card) => (
            <motion.div
              key={card.id}
              className="bg-[#CACACA33] rounded-xl p-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
            >
              <p className="font-bold text-[16px]">{card.title}</p>
              <p className="text-[#5B6871] text-[16px] font-light">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default page;
