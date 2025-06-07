"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex font-poppins h-screen w-full  bg-gray-100">
      {/* Sidebar */}
      <aside className=" bg-white flex-shrink-0  shadow-md">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="overflow-auto custom-scrollbar flex-1">{children}</main>
    </div>
  );
};

export default Layout;
