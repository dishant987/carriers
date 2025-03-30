import Image from "next/image";
import React from "react";

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
    <>
      <h1 className="text-[28px]  font-bold">
        Understanding <span className="text-[#DE5AFF]">Learning Styles</span>
      </h1>
      <div className="">
        <h1 className="text-lg font-bold mt-5">Introduction</h1>
        <p className="text-[16px] font-normal text-[#5B6871]">
          The <span className="text-[#5B6871]">VARK Learning Style </span> test
          identifies and individual’s prefereed learning style based on visual,
          auditory, reading and Kinesthetic The VARK Learning Style test
          identifies and individual’s prefereed learning style based on visual,
          auditory, reading and Kinesthetic The VARK Learning Style test
          identifies and individual’s prefereed learning style based on visual,
          auditory, reading and Kinesthetic.
        </p>
      </div>
      <div className="py-4 ">
        <div className="flex  gap-4">
          {emotionalElements.map((element) => (
            <div
              key={element.id}
              className="flex h-[120px] w-[247.75px] items-center justify-center gap-[10px]"
            >
              <Image
                src={element.image}
                alt={element.id.toString()}
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="py-[20px]">
        <h1 className="text-lg font-bold text-[#0047AB]">
          The purposes and applications of learning styles in career development
          include
        </h1>

        <div className="grid grid-cols-2 gap-4 text-justify mt-4">
          <div className="bg-[#CACACA33] rounded-xl p-3">
            <h1 className="font-bold text-[16px]">
              Tailored Learning Strategies
            </h1>
            <p className="text-[#5B6871] text-[16px] font-light ">
              Focuses on concrete, tangible information and present realities
              tangible information and present realities Focuses on concrete,
              tangible information and present realities tangible information
              and present realities
            </p>
          </div>
          <div className="bg-[#CACACA33] rounded-xl p-3">
            <h1 className="font-bold text-[16px]">
              Optimized Training Programs
            </h1>
            <p className="text-[#5B6871] text-[16px] font-light">
              Focuses on concrete, tangible information and present realities
              tangible information and present realities Focuses on concrete,
              tangible information and present realities tangible information
              and present realities
            </p>
          </div>
          <div className="bg-[#CACACA33] rounded-xl p-3">
            <h1 className="font-bold text-[16px]">
              Tailored Learning Strategies
            </h1>
            <p className="text-[#5B6871] text-[16px] font-light">
              Focuses on concrete, tangible information and present realities
              tangible information and present realities Focuses on concrete,
              tangible information and present realities tangible information
              and present realities
            </p>
          </div>
          <div className="bg-[#CACACA33] rounded-xl p-3">
            <h1 className="font-bold text-[16px]">
              Improved Communication and Collaboration
            </h1>
            <p className="text-[#5B6871] text-[16px] font-light">
              Focuses on concrete, tangible information and present realities
              tangible information and present realities Focuses on concrete,
              tangible information and present realities tangible information
              and present realities
            </p>
          </div>
        </div>
      </div>
      <div className="py-[20px] text-justify">
        <h1 className="text-lg font-bold text-[#0047AB]">
          The purposes and applications of learning styles in career development
          include
        </h1>
        <div className="flex  gap-4 py-4">
          <div className=" bg-[#CACACA33]  rounded-xl p-3">
            <h1 className="font-bold text-[16px]">
              Personalized Skill Development
            </h1>
            <p className="text-[#5B6871] text-[16px] font-light">
              Focuses on concrete, tangible information and present realities
              tangible information and present realities Focuses on concrete,
              tangible information and present realities tangible information
              and present realities
            </p>
          </div>
          <div className=" bg-[#CACACA33]  rounded-xl p-3">
            <h1 className="font-bold text-[16px]">
              Increased Retention and Recall
            </h1>
            <p className="text-[#5B6871] text-[16px] font-light">
              Focuses on concrete, tangible information and present realities
              tangible information and present realities Focuses on concrete,
              tangible information and present realities tangible information
              and present realities
            </p>
          </div>
          <div className=" bg-[#CACACA33]  rounded-xl p-3">
            <h1 className="font-bold text-[16px]">Enhanced Adaptability</h1>
            <p className="text-[#5B6871] text-[16px] font-light">
              Focuses on concrete, tangible information and present realities
              tangible information and present realities Focuses on concrete,
              tangible information and present realities tangible information
              and present realities
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
