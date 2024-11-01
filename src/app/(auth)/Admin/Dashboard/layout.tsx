"use client";
import React from "react";
import SideNav from "./_components/SideNav";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
      <div>
        <div className="hidden md:block h-full bg-gradient-to-b from-[#041d1a] to-[#041d1a] fixed  bottom-0 top-0 pt-[130px] w-64 border-r border-[#041d1a] shadow-2xl">
          <SideNav />
        </div>

        <div>
          <div className="w-full fixed top-0 z-10">
          </div>

          <div className="md:ml-64  pl-10 pb-10 ">{children}</div>
        </div>
      </div>
  );
}

export default DashboardLayout;