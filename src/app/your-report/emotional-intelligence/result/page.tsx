import React from "react";

const careerResults = [
  {
    id: 1,
    title: "Self Awareness",
    rounder: "45/50",
    color: "bg-[#FF962D]",
    border: "border-[#FF962D]",
    textColor: "text-[#FF962D]",
    roundColor: "bg-[#FF4646]",
    description:
      "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
  },
  {
    id: 2,
    title: "Self-Regulation",
    rounder: "45/50",
    color: "bg-[#00A3FF]",
    border: "border-[#00A3FF]",
    textColor: "text-[#00A3FF]",
    roundColor: "bg-[#FF4646]",
    description:
      "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
  },
  {
    id: 3,
    title: "Financial Rewards",
    rounder: "45/50",
    color: "bg-[#EE82FF]",

    border: "border-[#EE82FF]",
    textColor: "text-[#EE82FF]",
    roundColor: "bg-[#2DC054]",
    description:
      "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
  },
  {
    id: 4,
    title: "Creativity and Innovation",
    rounder: "45/50",
    color: "bg-[#B97979]",
    textColor: "text-[#B97979]",
    border: "border-[#B97979]",
    roundColor: "bg-[#FF4646]",
    description:
      "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
  },
  {
    id: 5,
    title: "Security and Stability",
    rounder: "45/50",
    color: "bg-[#2CCFA1]",
    textColor: "text-[#2CCFA1]",
    border: "border-[#2CCFA1]",
    roundColor: "bg-[#2DC054]",
    description:
      "Prefer tasks that involve physical work and create outcomes. Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
  },
];

const page = () => {
  return (
    <div className="">
      {/* Title */}
      <div className="flex flex-col gap-5">
        <h1 className="text-lg font-bold text-[28px]">
          Your <span className="text-[#398BFF]  ">Result</span>
        </h1>

        <div className="flex gap-[10px]  font-bold   text-[#999CA1] text-[16px] border-b border-[#999CA1]">
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
            <span className="w-[30px] rounded-full h-[30px] bg-[#2DC054]"></span>
            <span className="text-[#999CA1] text-[15px] font-bold">
              Strength
            </span>
          </div>
          <div className="flex items-center  gap-[10px]">
            <span className="w-[30px] rounded-full h-[30px] bg-[#FF4646]"></span>
            <span className="text-[#999CA1] text-[15px] font-bold">
              Needs Attention
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
                <span
                  className={`inline-flex items-center justify-center ${result.textColor} border ${result.border} text-[15px] font-bold rounded-full w-8 h-8`}
                >
                  {result.id}
                </span>

                {/* Title */}
                <span
                  className={`text-[16px] ${result.textColor} font-bold  text-center`}
                >
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
                  <span className="relative font-bold text-[17px]  before:text-black before:text-[22px] ">
                    Strategies
                  </span>
                  <ul className="pl-4 mt-1 space-y-4 text-[#696969] text-[15px] list-disc font-normal">
                    <li>
                      They are friendly, approachable, & enjoy being around
                      people. They are often seen as the &quot;hosts&quot; of
                      their social circles.
                    </li>
                    <li>
                      They are friendly, approachable, & enjoy being around
                      people. They are often seen as the &quot;hosts&quot; of
                      their social circles.
                    </li>
                    <li>
                      They are friendly, approachable, & enjoy being around
                      people. They are often seen as the &quot;hosts&quot; of
                      their social circles.
                    </li>
                  </ul>
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
