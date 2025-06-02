import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="h-screen overflow-y-auto ">
      <div className={`transition-all  duration-300 ease-in-out bg-[#EEEEF1]`}>
        <Navbar pageTitle="Ledger" />
      </div>
    </div>
  );
};

export default page;
