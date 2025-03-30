"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: {
    y: -5,
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    transition: { duration: 0.3 },
  },
};

const page = () => {
  const emotionalElements = [
    {
      id: 1,
      image: "/ear.svg",
    },
    {
      id: 2,
      image: "/eye.svg",
    },
    {
      id: 3,
      image: "/book.svg",
    },
    {
      id: 4,
      image: "/hand.svg",
    },
  ];
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold">
        Understanding <span className="text-[#DE5AFF]">Learning Styles</span>
      </h1>
      <div className="mt-5">
        <h1 className="text-lg font-bold">Introduction</h1>
        <p className="text-base font-normal text-[#5B6871]">
          The <span className="text-[#5B6871]">VARK Learning Style </span> test
          identifies and individual&apos;s preferred learning style based on visual,
          auditory, reading and Kinesthetic The VARK Learning Style test
          identifies and individual&apos;s preferred learning style based on visual,
          auditory, reading and Kinesthetic The VARK Learning Style test
          identifies and individual&apos;s preferred learning style based on visual,
          auditory, reading and Kinesthetic.
        </p>
      </div>

      <div className="py-4">
        <div className="flex  gap-4 justify-center sm:justify-start">
          {emotionalElements.map((element, index) => (
            <motion.div
              key={element.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex h-[100px] sm:h-[120px] w-[150px] sm:w-[200px] md:w-[247.75px] items-center justify-center gap-[10px]"
            >
              <Image
                src={element.image}
                alt={element.id.toString()}
                width={100}
                height={100}
                className="w-16 h-16 sm:w-20 sm:h-20"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-lg font-bold text-[#0047AB]">
          The purposes and applications of learning styles in career development
          include
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-justify mt-4">
          <motion.div
            variants={item}
            whileHover="hover"
            className="bg-[#CACACA33] rounded-xl p-3"
          >
            <h1 className="font-bold text-base">
              Tailored Learning Strategies
            </h1>
            <p className="text-[#5B6871] text-base font-light">
              Focuses on concrete, tangible information and present realities
              tangible information and present realities Focuses on concrete,
              tangible information and present realities tangible information
              and present realities
            </p>
          </motion.div>
          <motion.div
            variants={item}
            whileHover="hover"
            className="bg-[#CACACA33] rounded-xl p-3"
          >
            <h1 className="font-bold text-base">Optimized Training Programs</h1>
            <p className="text-[#5B6871] text-base font-light">
              Focuses on concrete, tangible information and present realities
              tangible information and present realities Focuses on concrete,
              tangible information and present realities tangible information
              and present realities
            </p>
          </motion.div>
          <motion.div
            variants={item}
            whileHover="hover"
            className="bg-[#CACACA33] rounded-xl p-3"
          >
            <h1 className="font-bold text-base">
              Tailored Learning Strategies
            </h1>
            <p className="text-[#5B6871] text-base font-light">
              Focuses on concrete, tangible information and present realities
              tangible information and present realities Focuses on concrete,
              tangible information and present realities tangible information
              and present realities
            </p>
          </motion.div>
          <motion.div
            variants={item}
            whileHover="hover"
            className="bg-[#CACACA33] rounded-xl p-3"
          >
            <h1 className="font-bold text-base">
              Improved Communication and Collaboration
            </h1>
            <p className="text-[#5B6871] text-base font-light">
              Focuses on concrete, tangible information and present realities
              tangible information and present realities Focuses on concrete,
              tangible information and present realities tangible information
              and present realities
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-5 text-justify">
        <h1 className="text-lg font-bold text-[#0047AB]">
          The purposes and applications of learning styles in career development
          include
        </h1>
        <div className="flex flex-col lg:flex-row gap-4 py-4">
          <motion.div
            variants={item}
            whileHover="hover"
            className="bg-[#CACACA33] rounded-xl p-3"
          >
            <h1 className="font-bold text-base">
              Personalized Skill Development
            </h1>
            <p className="text-[#5B6871] text-base font-light">
              Focuses on concrete, tangible information and present realities
              tangible information and present realities Focuses on concrete,
              tangible information and present realities tangible information
              and present realities
            </p>
          </motion.div>
          <motion.div
            variants={item}
            whileHover="hover"
            className="bg-[#CACACA33] rounded-xl p-3"
          >
            <h1 className="font-bold text-base">
              Increased Retention and Recall
            </h1>
            <p className="text-[#5B6871] text-base font-light">
              Focuses on concrete, tangible information and present realities
              tangible information and present realities Focuses on concrete,
              tangible information and present realities tangible information
              and present realities
            </p>
          </motion.div>
          <motion.div
            variants={item}
            whileHover="hover"
            className="bg-[#CACACA33] rounded-xl p-3"
          >
            <h1 className="font-bold text-base">Enhanced Adaptability</h1>
            <p className="text-[#5B6871] text-base font-light">
              Focuses on concrete, tangible information and present realities
              tangible information and present realities Focuses on concrete,
              tangible information and present realities tangible information
              and present realities
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default page;
