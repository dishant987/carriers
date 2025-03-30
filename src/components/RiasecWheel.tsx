"use client";

import { useState } from "react";

export default function RiasecWheel() {
  const [activeSegment, setActiveSegment] = useState<string | null>(null);

  const segments = [
    {
      id: "realistic",
      label: "Realistic",
      shortLabel: "R",
      color: "bg-red-400",
      rotation: 0,
    },
    {
      id: "investigative",
      label: "Investigative",
      shortLabel: "I",
      color: "bg-amber-400",
      rotation: 60,
    },
    {
      id: "artistic",
      label: "Artistic",
      shortLabel: "A",
      color: "bg-green-500",
      rotation: 120,
    },
    {
      id: "social",
      label: "Social",
      shortLabel: "S",
      color: "bg-blue-500",
      rotation: 180,
    },
    {
      id: "enterprising",
      label: "Enterprising",
      shortLabel: "E",
      color: "bg-pink-400",
      rotation: 240,
    },
    {
      id: "conventional",
      label: "Conventional",
      shortLabel: "C",
      color: "bg-violet-300",
      rotation: 300,
    },
  ];

  const handleSegmentClick = (id: string) => {
    setActiveSegment(activeSegment === id ? null : id);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] p-8">
      <div className="relative w-[400px] h-[400px]">
        {/* Outer labels */}
        {segments.map((segment) => (
          <div
            key={`label-${segment.id}`}
            className="absolute text-center font-medium text-gray-800"
            style={{
              transform: `rotate(${segment.rotation}deg) translateY(-230px) rotate(-${segment.rotation}deg)`,
              transformOrigin: "center center",
              width: "120px",
              left: "calc(50% - 60px)",
              top: "60%",
            }}
          >
            {segment.label}
          </div>
        ))}

        {/* Segments */}
        <div className="relative w-full h-full">
          {segments.map((segment) => (
            <button
              key={segment.id}
              onClick={() => handleSegmentClick(segment.id)}
              className={`absolute w-[130px] h-[130px] rounded-full origin-bottom-right overflow-hidden ${
                segment.color
              } hover:opacity-90 transition-opacity cursor-pointer ${
                activeSegment === segment.id
                  ? "ring-2 ring-offset-2 ring-black"
                  : ""
              }`}
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                transform: `rotate(${segment.rotation}deg)`,
                transformOrigin: "bottom right",
                left: "17%",
                top: "16%",
              }}
              aria-label={segment.label}
            >
              <div
                className="absolute flex items-center justify-center text-white font-bold text-xl"
                style={{
                  transform: `rotate(-${segment.rotation - 30}deg)`,
                  width: "60px",
                  height: "30px",
                  left: "40px",
                  top: "40px",
                }}
              >
                {segment.shortLabel}
              </div>
            </button>
          ))}

          {/* Center circle with text */}
          <div className="absolute rounded-full bg-white w-[200px] h-[200px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-sm">
            <div className="text-center p-4 text-sm text-gray-600">
              <p>
                Click on the coloured arcs to know about the RIASEC
                personalities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
