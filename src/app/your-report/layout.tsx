import CareerAnalysis from "@/components/CareerAnalysis";
import ReportSidebar from "@/components/ReportSidebar";
import TopCareers from "@/components/TopCareers";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <CareerAnalysis />
      <TopCareers />
      <div className="flex flex-col sm:flex-row w-full p-10 sm:px-[66px]">
        {/* Sidebar (collapsible on mobile) */}
        <div className="w-full sm:w-1/5">
          <ReportSidebar />
        </div>
        {/* Middle Border with left-right spacing */}
        <div className="w-[1px] mx-[20px] bg-[#CACACA] hidden sm:block"></div>
        {/* Main content */}
        <div className="flex-1  sm:h-fit">{children}</div>
      </div>
    </>
  );
};

export default Layout;
