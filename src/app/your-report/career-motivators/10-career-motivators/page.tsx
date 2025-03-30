import React from "react";

const page = () => {
  const topCareers = [
    {
      id: 1,
      title: "Achievement and Results",
      color: "bg-[#1999A1]",
      border: "border-[#1999A1]",
    },
    {
      id: 2,
      title: "Leadership and Influence",
      color: "bg-[#A15A19]",
      border: "border-[#A15A19]",
    },
    {
      id: 3,
      title: "Helping Others",
      color: "bg-[#55DCDC]",
      border: "border-[#55DCDC]",
    },
    {
      id: 4,
      title: "Continuous Learning",
      color: "bg-[#F6C61A]",
      border: "border-[#F6C61A]",
    },
    {
      id: 5,
      title: "Continuous Learning",
      color: "bg-[#9140F8]",
      border: "border-[#9140F8]",
    },
    {
      id: 6,
      title: "Continuous Learning",
      color: "bg-[#00A3FF]",
      border: "border-[#00A3FF]",
    },
    {
      id: 7,
      title: "Continuous Learning",
      color: "bg-[#194CA1]",
      border: "border-[#194CA1]",
    },
    {
      id: 8,
      title: "Continuous Learning",
      color: "bg-[#EE82FF]",
      border: "border-[#EE82FF]",
    },
    {
      id: 9,
      title: "Continuous Learning",
      color: "bg-[#B97979]",
      border: "border-[#B97979]",
    },
    {
      id: 10,
      title: "Continuous Learning",
      color: "bg-[#FA9B56]",
      border: "border-[#FA9B56]",
    },
  ];
  return (
    <>
      <h1 className="text-[18px] text-[#0047AB] font-bold">
        TOP 10 Career Motivators
      </h1>
      <div className="py-4 grid grid-cols-2 gap-4">
        {[...Array(2)].map((_, rowIndex) => (
          <div key={rowIndex} className="flex flex-col gap-4">
            {topCareers
              .filter((_, index) => (rowIndex === 0 ? index < 5 : index >= 5))
              .map((career) => (
                <div
                  key={career.id}
                  className={`relative flex items-center justify-center text-center border ${
                    career.border || "border-gray-300"
                  } h-[62px] rounded-full px-4 py-2 w-28 md:w-[502.5px]`}
                >
                  {/* Number Circle - Positioned Absolutely */}
                  <div
                    className={`absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-[25px] h-[25px] md:w-[42px] md:h-[42px] rounded-full ${
                      career.color || "bg-gray-300"
                    } text-white text-xs md:text-sm font-semibold`}
                  >
                    {career.id}
                  </div>

                  {/* Career Title */}
                  <span className="ml-6 md:ml-8 text-gray-600 text-sm md:text-lg font-medium">
                    {career.title}
                  </span>
                </div>
              ))}
          </div>
        ))}
      </div>
      <div className="py-[20px]">
        <h1 className="text-lg font-bold text-[#0047AB]">
          Purpose and Applications of Career Motivators in career development
          include
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className=" bg-[#CACACA33]  rounded-xl p-3">
            <p className="font-bold text-[16px]">Enhanced Job Satisfaction</p>
            <p className="text-[#5B6871] text-sm">
              Focuses on concrete, tangible information and present realities
              tangible information and present realities
            </p>
          </div>
          <div className=" bg-[#CACACA33]  rounded-xl p-3">
            <p className="font-bold text-[16px]">
              Improved Performance and Engagement
            </p>
            <p className="text-[#5B6871] text-sm">
              Focuses on concrete, tangible information and present realities
              tangible information and present realities
            </p>
          </div>
          <div className=" bg-[#CACACA33]  rounded-xl p-3">
            <p className="font-bold text-[16px]">
              Career Planning and Development
            </p>
            <p className="text-[#5B6871] text-sm">
              Focuses on concrete, tangible information and present realities
              tangible information and present realities
            </p>
          </div>
        </div>
      </div>
      <div className="py-[20px]">
        <h1 className="text-lg font-bold text-[#0047AB]">
        Benefits of understanding interest using career motivators for career planning include
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className=" bg-[#CACACA33]  rounded-xl p-3">
            <p className="font-bold text-[16px]">Alignment with Personal Values</p>
            <p className="text-[#5B6871] text-sm">
              Focuses on concrete, tangible information and present realities
              tangible information and present realities
            </p>
          </div>
          <div className=" bg-[#CACACA33]  rounded-xl p-3">
            <p className="font-bold text-[16px]">Improved Decision-Making</p>
            <p className="text-[#5B6871] text-sm">
              Focuses on concrete, tangible information and present realities
              tangible information and present realities
            </p>
          </div>
          <div className=" bg-[#CACACA33]  rounded-xl p-3">
            <p className="font-bold text-[16px]">Enhanced Self-Awareness</p>
            <p className="text-[#5B6871] text-sm">
              Focuses on concrete, tangible information and present realities
              tangible information and present realities
            </p>
          </div>
         
         
        </div>
      </div>
    </>
  );
};

export default page;
