import React from "react";

const careerResults = [
  {
    id: 1,
    title: "Achievement and Results",
    rounder: "25/30",
    color: "bg-[#1999A1]",
    border: "border-[#1999A1]",
    textColor: "text-[#1999A1]",
    roundColor: "bg-[#FF4646]",
    description:
      "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",

    pros: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
    cons: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
  {
    id: 2,
    title: "Helping Others",
    rounder: "25/30",
    color: "bg-[#A15A19]",
    border: "border-[#A15A19]",
    textColor: "text-[#A15A19]",
    roundColor: "bg-[#FFD146]",
    description:
      "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",

    pros: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
    cons: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
  {
    id: 3,
    title: "Financial Rewards",
    rounder: "25/30",
    color: "bg-[#55DCDC]",

    border: "border-[#55DCDC]",
    textColor: "text-[#55DCDC]",
    roundColor: "bg-[#2DC054]",
    description:
      "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",

    pros: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
    cons: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
  {
    id: 4,
    title: "Creativity and Innovation",
    rounder: "25/30",
    color: "bg-[#F6C61A]",
    textColor: "text-[#F6C61A]",
    border: "border-[#F6C61A]",
    roundColor: "bg-[#FF4646]",
    description:
      "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",

    pros: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
    cons: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
  {
    id: 5,
    title: "Security and Stability",
    rounder: "25/30",
    color: "bg-[#9140F8]",
    textColor: "text-[#9140F8]",
    border: "border-[#9140F8]",
    roundColor: "bg-[#FFD146]",
    description:
      "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",

    pros: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
    cons: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
  {
    id: 6,
    title: "Security and Stability",
    rounder: "25/30",
    color: "bg-[#00A3FF]",
    textColor: "text-[#00A3FF]",
    border: "border-[#00A3FF]",
    roundColor: "bg-[#2DC054]",
    description:
      "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",

    pros: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
    cons: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
  {
    id: 7,
    title: "Continuous Learning",
    rounder: "25/30",
    color: "bg-[#194CA1]",
    textColor:"text-[#194CA1]",
    border: "border-[#194CA1]",
    roundColor: "bg-[#FF4646]",
    description:
      "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",

    pros: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
    cons: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
  {
    id: 8,
    title: "Independence",
    rounder: "25/30",
    color: "bg-[#EE82FF]",
    textColor:"text-[#EE82FF]",
    border: "border-[#EE82FF]",
    roundColor: "bg-[#FF4646]",
    description:
      "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",

    pros: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
    cons: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
  {
    id: 9,
    title: "Security and Stability",
    rounder: "25/30",
    color: "bg-[#B97979]",
    textColor:"text-[#B97979]",
    border: "border-[#B97979]",
    roundColor: "bg-[#2DC054]",
    description:
      "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",

    pros: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
    cons: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
  {
    id: 10,
    title: "Security and Stability",
    rounder: "25/30",
    color: "bg-[#FA9B56]",
    textColor:"text-[#FA9B56]",
    border: "border-[#FA9B56]",
    roundColor: "bg-[#FFD146]",
    description:
      "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",

    pros: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
    cons: "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
];

const page = () => {
  return (
    <div className="">
      {/* Title */}
      <div className="flex flex-col   gap-5">
        <h1 className="text-lg font-bold text-[28px]">
          Your <span className="text-[#FF9706]  ">Result</span>
        </h1>

        <div className="flex gap-[10px]  font-bold   text-[#999CA1] text-[16px]">
          <span className="  px-[12px] py-[20px] border-b-2 border-[#FF9706] text-black font-bold cursor-pointer">
            Your Scores
          </span>
          <span className="cursor-pointer px-[12px] py-[20px] font-bold ">
            Conclusion
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex  gap-4 items-center mt-4">
        <h1 className=" text-lg font-bold text-[#0047AB] text-[24px] flex items-center justify-center gap-2">
          Your Scores
        </h1>
        <span className="border h-7 border-[#CACACA]" />
        <div className="flex gap-4">
          <div className="flex items-center  gap-[10px]">
            <span className="w-[30px] rounded-full h-[30px] bg-[#FF4646]"></span>
            <span className="text-[#999CA1] text-[15px] font-bold">
              Low Relevance
            </span>
          </div>
          <div className="flex items-center  gap-[10px]">
            <span className="w-[30px] rounded-full h-[30px] bg-[#FFD146]"></span>
            <span className="text-[#999CA1] text-[15px] font-bold">
              Moderate Relevance
            </span>
          </div>
          <div className="flex items-center  gap-[10px]">
            <span className="w-[30px] rounded-full h-[30px] bg-[#2DC054]"></span>
            <span className="text-[#999CA1] text-[15px] font-bold">
              Low Relevance
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {careerResults.map((result) => (
          <div key={result.id}>
            <div className="flex flex-col  gap-4">
              <div className="flex items-center justify-between gap-4">
                {/* Number Circle */}
                <span className={`inline-flex items-center justify-center ${result.textColor} border ${result.border} text-[15px] font-bold rounded-full w-8 h-8`}>
                  {result.id}
                </span>

                {/* Title */}
                <span className={`text-[16px] ${result.textColor} font-bold  text-center`}>
                  {result.title}
                </span>

                {/* Rounder + Circle */}
                <span
                  className={`relative flex  w-[101.52381134033203px] items-center py-[9.52px] pr-[5px] pl-[15px] gap-2 ${result.color} rounded-[20px]`}
                >
                  {/* Text */}
                  <span className="text-[16px] font-bold text-white">
                    {result.rounder}
                  </span>

                  {/* Circle - Positioned Absolutely */}
                  <span
                    className={`absolute right-[5px] top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full border border-white w-8 h-8 ${result.roundColor}`}
                  />
                </span>
              </div>
              <div className={`border ${result.border}  rounded-[14px] p-4`}>
                <div>
                  <p className="text-[#5B6871] text-[15px] font-normal">
                    {result.description}
                  </p>
                </div>
                <div>
                  {/* Pros */}
                  <span className="relative font-bold text-[17px] before:content-['•'] before:text-black before:text-[22px] before:mr-2">
                    Pros
                  </span>
                  <p className=" pl-4 mt-1 text-[#696969]">{result.pros}</p>

                  {/* Cons */}
                  <span className="relative font-bold text-[17px] before:content-['•'] before:text-black before:text-[22px] before:mr-2">
                    Cons
                  </span>
                  <p className=" pl-4 mt-1 text-[#696969]">{result.pros}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
