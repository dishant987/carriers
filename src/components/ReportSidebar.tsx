"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Icon from "./Icons";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface ITabs {
  name: string;
  key: "test_1" | "test_2" | "test_3" | "test_4" | "test_5";
  title: string;
  color?: string;
  subRoutes: { name: string; title: string; path: string }[];
}

const tabs: ITabs[] = [
  {
    name: "test1",
    key: "test_1",
    title: "Personality Explorer",
    color: "#0047ab",
    subRoutes: [
      {
        name: "Understanding Personality",
        title: "Understanding Personality Explorer",
        path: "/your-report/personality-explorer/understanding",
      },
      {
        name: "Personality",
        title: "Personality Types",
        path: "/your-report/personality-explorer/personality-types",
      },
      {
        name: "Result",
        title: "Your Result",
        path: "/your-report/personality-explorer/result",
      },
    ],
  },
  {
    name: "test2",
    key: "test_2",
    title: "Interest Explorer",
    color: "#309759",
    subRoutes: [
      {
        name: "Understanding Interest",
        title: "Understanding Interest Explorer",
        path: "/your-report/interest-explorer/understanding",
      },
      {
        name: "RIASEC Model",
        title: "RIASEC Model",
        path: "/your-report/interest-explorer/ria-sec-model",
      },
      {
        name: "Result",
        title: "Your Result",
        path: "/your-report/interest-explorer/result",
      },
    ],
  },
  {
    name: "test3",
    key: "test_3",
    title: "Career Motivators",
    color: "#FF9706",
    subRoutes: [
      {
        name: "Understanding Career Motivators",
        title: "Understanding Career Motivators",
        path: "/your-report/career-motivators/understanding",
      },
      {
        name: "10 Career Motivators",
        title: "10 Career Motivators",
        path: "/your-report/career-motivators/10-career-motivators",
      },
      {
        name: "Result",
        title: "Your Result",
        path: "/your-report/career-motivators/result",
      },
    ],
  },
  {
    name: "test4",
    key: "test_4",
    title: "Emotional Intelligence",
    color: "#398BFF",
    subRoutes: [
      {
        name: "Understanding Emotional Intelligence",
        title: "Understanding Emotional Intelligence",
        path: "/your-report/emotional-intelligence/understanding",
      },
      {
        name: "Daniel Goleman Emotional Intelligence Test",
        title: "Daniel Goleman Emotional Intelligence Test",
        path: "/your-report/emotional-intelligence/daniel-goleman-emotional-intelligence-test",
      },
      {
        name: "Result",
        title: "Your Result",
        path: "/your-report/emotional-intelligence/result",
      },
    ],
  },
  {
    name: "test5",
    key: "test_5",
    title: "Learning Styles",
    color: "#DE5AFF",
    subRoutes: [
      {
        name: "Understanding Learning Styles",
        title: "Understanding Learning Styles",
        path: "/your-report/learning-styles/understanding",
      },
      {
        name: "Result",
        title: "Your Result",
        path: "/your-report/learning-styles/result",
      },
    ],
  },
];

const ReportSidebar = () => {
  const [openTab, setOpenTab] = useState<string | null>(null);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const pathname = usePathname();

  // Auto-expand the tab if current path matches any subroute
  useEffect(() => {
    const currentTab = tabs.find((tab) =>
      tab.subRoutes.some((sub) => pathname === sub.path)
    );
    if (currentTab) {
      setOpenTab(currentTab.name);
    }
  }, [pathname]);

  const toggleTab = (name: string) => {
    setOpenTab(openTab === name ? null : name);
  };

  return (
    <div className="pl-4 pt-4 pr-4 w-72">
      <ul className="space-y-2">
        {tabs.map((tab) => {
          const isActiveTab = tab.subRoutes.some(
            (sub) => pathname === sub.path
          );
          return (
            <motion.li
              key={tab.key}
              className="border-b rounded-lg border-gray-200"
              initial={false}
              transition={{ duration: 0.3 }}
            >
              <button
                className={`w-full text-left flex gap-2 items-center p-3 py-[15px] rounded-lg border-r-4 transition-all duration-300 ease-in-out
                ${
                  isActiveTab
                    ? "border-r-[tab.color] shadow-lg shadow-gray-300"
                    : "border-transparent hover:shadow-lg hover:shadow-gray-300"
                }
                `}
                style={{
                  borderRightColor: isActiveTab ? tab.color : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActiveTab)
                    e.currentTarget.style.borderRightColor = tab.color || "";
                }}
                onMouseLeave={(e) => {
                  if (!isActiveTab)
                    e.currentTarget.style.borderRightColor = "transparent";
                }}
                onClick={() => toggleTab(tab.name)}
              >
                {/* Svg Icon */}
                <Icon name={tab.key} color={tab.color} />

                <span className="flex flex-col">
                  <span className="font-semibold text-[16px]">
                    {tab.name.toUpperCase()}
                  </span>
                  <span
                    className="text-[16px] font-bold"
                    style={{ color: tab.color }}
                  >
                    {tab.title}
                  </span>
                </span>
              </button>

              <AnimatePresence>
                {openTab === tab.name && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      transition: {
                        opacity: { duration: 0.2 },
                        height: { duration: 0.3 },
                      },
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      transition: {
                        opacity: { duration: 0.1 },
                        height: { duration: 0.2 },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="overflow-hidden">
                      {tab.subRoutes.map((sub) => {
                        const isActive = pathname === sub.path;
                        return (
                          <motion.li
                            key={sub.name}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{
                              x: 0,
                              opacity: 1,
                              transition: {
                                duration: 0.3,
                                delay: isActive ? 0.2 : 0,
                              },
                            }}
                          >
                            <Link
                              href={sub.path}
                              className={`block pl-6 pr-3 py-2 ${
                                isActive
                                  ? "font-semibold text-black"
                                  : "text-gray-700 hover:text-black"
                              }`}
                            >
                              <motion.div
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                {sub.title}
                              </motion.div>
                            </Link>
                          </motion.li>
                        );
                      })}
                    </div>
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>
          );
        })}
      </ul>

      <motion.button
        className="mt-6 w-full border border-[#0047AB] text-[#0047AB] py-2 rounded-lg flex items-center justify-center gap-2"
        whileHover={{
          backgroundColor: "#0047AB",
          color: "white",
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.95 }}
      >
        Download Report Card
        <motion.svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{
            y: [0, 3, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M7 13L6.29289 13.7071L7 14.4142L7.70711 13.7071L7 13ZM8 1C8 0.447715 7.55229 0 7 0C6.44772 0 6 0.447715 6 1H8ZM0.292893 7.70711L6.29289 13.7071L7.70711 12.2929L1.70711 6.29289L0.292893 7.70711ZM7.70711 13.7071L13.7071 7.70711L12.2929 6.29289L6.29289 12.2929L7.70711 13.7071ZM8 13V1H6V13H8Z"
            fill="currentColor"
          />
        </motion.svg>
      </motion.button>
    </div>
  );
};

export default ReportSidebar;
