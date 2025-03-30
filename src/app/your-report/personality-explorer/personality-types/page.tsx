"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const types = [
  {
    id: 1,
    title: "Inspector",
    tag: "ISTJ",
    color: "bg-[#D9E9F0]",
    textColor: "text-[#3D6272]",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
    image: "/1.png",
  },
  {
    id: 2,
    title: "Inspector",
    tag: "ISFJ",
    color: "bg-[#D9E9F0]",
    textColor: "text-[#3D6272]",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
    image: "/2.png",
  },
  {
    id: 3,
    title: "Inspector",
    tag: "ISFP",
    color: "bg-[#D9E9F0]",
    textColor: "text-[#3D6272]",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
    image: "/3.png",
  },
  {
    id: 4,
    title: "Inspector",
    tag: "ESFJ",
    color: "bg-[#E7F2F7]",
    textColor: "text-[#3D6272]",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
    image: "/4.png",
  },
  {
    id: 5,
    title: "Virtuoso",
    tag: "ISTP",
    color: "bg-[#EFE2C9]",
    textColor:"text-[#AF935E]",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
    image: "/5.png",
  },
  {
    id: 6,
    title: "Entrepreneur",
    tag: "ESTP",
    color: "bg-[#EFE2C9]",
    textColor:"text-[#AF935E]",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
    image: "/6.png",
  },
  {
    id: 7,
    title: "Entertainer",
    tag: "ESFP",
    color: "bg-[#EFE2C9]",
    textColor:"text-[#AF935E]",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
    image: "/7.svg",
  },
  {
    id: 8,
    title: "Executive",
    tag: "ESTJ",
    color: "bg-[#EFE2C9]",
    textColor:"text-[#AF935E]",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
    image: "/8.svg",
  },
  {
    id: 9,
    title: "Advocate",
    tag: "INFJ",
    color: "bg-[#D6ECE2]",
    textColor:"text-[#3D6272]",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
    image: "/9.svg",
  },
  {
    id: 10,
    title: "Mediator",
    tag: "INFJ",
    color: "bg-[#D6ECE2]",
    textColor:"text-[#3D6272]",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
    image: "/10.svg",
  },
  {
    id: 11,
    title: "Campaigner",
    tag: "INFJ",
    color: "bg-[#D6ECE2]",
    textColor:"text-[#3D6272]",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
    image: "/11.svg",
  },
  {
    id: 12,
    title: "Protagonist",
    tag: "INFJ",
    color: "bg-[#D6ECE2]",
    textColor:"text-[#3D6272]",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
    image: "/12.svg",
  },
  {
    id: 13,
    title: "Architect",
    tag: "INFJ",
    color: "bg-[#E7DFEA]",
    textColor:"text-[#9361A6]",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
    image: "/13.svg",
  },
  {
    id: 14,
    title: "Thinker",
    tag: "INFJ",
    color: "bg-[#E7DFEA]",
    textColor:"text-[#9361A6]",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
    image: "/14.svg",
  },
  {
    id: 15,
    title: "Debater",
    tag: "INFJ",
    color: "bg-[#E7DFEA]",
    textColor:"text-[#9361A6]",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
    image: "/15.svg",
  },
  {
    id: 16,
    title: "Commander",
    tag: "INFJ",
    color: "bg-[#E7DFEA]",
    textColor:"text-[#9361A6]",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities",
    image: "/16.svg",
  },
];

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Title Animation with Bounce */}
      <motion.h1
        className="text-[#0047AB] font-bold text-lg"
        initial={{ opacity: 0, y: -10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
        }}
      >
        Personality Types
      </motion.h1>

      {/* Card Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4"
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
        {types.map((type) => (
          <motion.div
            key={type.id}
            className="rounded-lg p-3 transition-all "
            initial={{ opacity: 0, scale: 0.8, rotateZ: -2 }}
            animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              rotateZ: 1.5,
              boxShadow: "0px 12px 24px rgba(0,0,0,0.1)",
            }}
          >
            {/* Image Container with Hover Scaling */}
            <motion.div
              className={`${type.color} flex justify-center items-center p-2 rounded-lg h-[98px]`}
              whileHover={{ scale: 1.15 }}
            >
              <Image src={type.image} alt={type.title} width={70} height={70} />
            </motion.div>

            {/* Title and Tag with Interactive Effects */}
            <div className="flex items-center justify-between gap-2 mt-2">
              <h1 className="font-bold text-sm">{type.title}</h1>
              <motion.span
                className={`${type.color} ${type.textColor} text-sm font-bold rounded-[25px] p-3 transition-all`}
                whileHover={{
                  scale: 1.15,
                  rotate: [0, -5, 5, 0], // Bounce effect
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                {type.tag}
              </motion.span>
            </div>

            {/* Description */}
            <p className="text-[#5B6871] text-sm mt-1">{type.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default page;
