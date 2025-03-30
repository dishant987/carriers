"use client";
import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

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
      title: "Self-Awareness",
      bgColor:
        "bg-[radial-gradient(195.07%_73%_at_50%_50%,_#FFFFFF_0%,_#FF962D_100%)]",
      shadow: "shadow-[0px_24px_22.5px_0px_rgba(255,150,45,0.2)]",
      roundColor: "bg-[#FF962D]",
    },

    {
      id: 2,
      title: "Self-Regulation",
      bgColor:
        "bg-[radial-gradient(195.07%_73%_at_50%_50%,_#FFFFFF_0%,_#00A3FF_100%)]",
      shadow: "shadow-[0px_24px_22.5px_0px_rgba(0,163,255,0.2)]",
      roundColor: "bg-[#00A3FF]",
    },
    {
      id: 3,
      title: "Empathy",
      bgColor:
        "bg-[radial-gradient(195.07%_73%_at_50%_50%,_#FFFFFF_0%,_#EE82FF_100%)]",
      shadow: "shadow-[0px_24px_22.5px_0px_rgba(238,130,255,0.2)]",
      roundColor: "bg-[#EE82FF]",
    },
    {
      id: 4,
      title: "Social Skills",
      bgColor:
        "bg-[radial-gradient(195.07%_73%_at_50%_50%,_#FFFFFF_0%,_#B97979_100%)]",
      shadow: "shadow-[0px_24px_22.5px_0px_rgba(185,121,121,0.2)]",
      roundColor: "bg-[#B97979]",
    },
    {
      id: 5,
      title: "Motivation",
      bgColor:
        "bg-[radial-gradient(195.07%_73%_at_50%_50%,_#FFFFFF_0%,_#2CCFA1_100%)]",
      shadow: "shadow-[0px_24px_22.5px_0px_rgba(44,207,161,0.2)]",
      roundColor: "bg-[#2CCFA1]",
    },
  ];
  return (
    <>
      <Head>
        <title>5 Emotional Elements of Career Growth</title>
        <meta
          name="description"
          content="Explore the five emotional elements that influence career growth, leadership, and decision-making."
        />
        <meta
          name="keywords"
          content="emotional intelligence, career growth, leadership, self-awareness, motivation"
        />
        <meta name="author" content="Your Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="5 Emotional Elements of Career Growth"
        />
        <meta
          property="og:description"
          content="Explore the five emotional elements that influence career growth, leadership, and decision-making."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://yourwebsite.com/emotional-elements"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/og-image.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="5 Emotional Elements of Career Growth"
        />
        <meta
          name="twitter:description"
          content="Explore the five emotional elements that influence career growth, leadership, and decision-making."
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/twitter-image.jpg"
        />
      </Head>
      <h1 className="text-[18px] text-[#0047AB] font-bold">
        5 Emotional Elements
      </h1>

      <div className="flex py-4  gap-4">
        {emotionalElements.map((element) => (
          <motion.div
            key={element.id}
            className="relative flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className={`relative rounded-full h-[170px] w-[170px] ${element.bgColor} ${element.shadow} flex flex-col items-center justify-center`}
            >
              <span
                className={` ${element.roundColor} w-[42px] h-[42px] rounded-full flex items-center justify-center`}
              >
                {element.id}
              </span>
              <h1>{element.title}</h1>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="py-[20px]">
        <h1 className="text-lg font-bold text-[#0047AB]">
          Applications of the Emotional Intelligence Test in career development
          include
        </h1>
        <p className="text-[#5B6871] text-[16px] py-4">
          Congratulations on taking the first step for personalized Career
          Planning & Assessment! We understand the significance of making
          informed decisions as you navigate your academic journey and future
          career. We are committed to empowering individuals with the tools and
          insights needed to confidently navigate the world of careers and
          education.
        </p>
        <div className="flex  gap-4 ">
          <motion.div
            variants={item}
            whileHover={"hover"}
            className=" bg-[#CACACA33]  rounded-xl p-3"
          >
            <p className="font-bold text-[16px]">
              Enhanced Leadership and Communication Skills
            </p>
            <p className="text-[#5B6871] text-sm">
              Focuses on concrete, tangible information and present realities
              tangible information and present realities Focuses on concrete,
              tangible information and present realities tangible information
              and present realities
            </p>
          </motion.div>
          <motion.div
            variants={item}
            whileHover={"hover"}
            className=" bg-[#CACACA33]  rounded-xl p-3"
          >
            <p className="font-bold text-[16px]">
              Improved Decision Making and Problem Solving
            </p>
            <p className="text-[#5B6871] text-sm">
              Focuses on concrete, tangible information and present realities
              tangible information and present realities Focuses on concrete,
              tangible information and present realities tangible information
              and present realities
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <motion.div
            variants={item}
            whileHover={"hover"}
            className=" bg-[#CACACA33]  rounded-xl p-3"
          >
            <p className="font-bold text-[16px]">
              Alignment with Personal Values
            </p>
            <p className="text-[#5B6871] text-sm">
              Focuses on concrete, tangible information and present realities
              tangible information and present realities
            </p>
          </motion.div>
          <motion.div
            variants={item}
            whileHover={"hover"}
            className=" bg-[#CACACA33]  rounded-xl p-3"
          >
            <p className="font-bold text-[16px]">Improved Decision-Making</p>
            <p className="text-[#5B6871] text-sm">
              Focuses on concrete, tangible information and present realities
              tangible information and present realities
            </p>
          </motion.div>
          <motion.div
            variants={item}
            whileHover={"hover"}
            className=" bg-[#CACACA33]  rounded-xl p-3"
          >
            <p className="font-bold text-[16px]">Enhanced Self-Awareness</p>
            <p className="text-[#5B6871] text-sm">
              Focuses on concrete, tangible information and present realities
              tangible information and present realities
            </p>
          </motion.div>
        </div>
      </div>
      <div className="py-[20px]">
        <h1 className="text-lg font-bold text-[#0047AB]">
          Understanding emotional intelligence for career planning offers
          several benefits, including
        </h1>
        <div className="flex  gap-4 py-4">
          <motion.div
            variants={item}
            whileHover={"hover"}
            className=" bg-[#CACACA33]  rounded-xl p-3"
          >
            <p className="font-bold text-[16px]">
              improved Interpersonal Relationships
            </p>
            <p className="text-[#5B6871] text-sm">
              Focuses on concrete, tangible information and present realities
              tangible information and present realities Focuses on concrete,
              tangible information and present realities tangible information
              and present realities
            </p>
          </motion.div>
          <motion.div
            variants={item}
            whileHover={"hover"}
            className=" bg-[#CACACA33]  rounded-xl p-3"
          >
            <p className="font-bold text-[16px]">Enhanced Job Performance</p>
            <p className="text-[#5B6871] text-sm">
              Focuses on concrete, tangible information and present realities
              tangible information and present realities Focuses on concrete,
              tangible information and present realities tangible information
              and present realities
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default page;
