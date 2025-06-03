"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";

const page = ({
  isCollapsed = false,
  activeItem,
  toggleMobileSidebar = () => {},
}) => {
  // State for form fields
  const [srNo, setSrNo] = useState("");
  const [date, setDate] = useState("28-May-25");
  const [party, setParty] = useState("");
  const [tdsAc, setTdsAc] = useState("");
  const [info, setInfo] = useState("");
  const [docNo, setDocNo] = useState("");
  const [billAmt, setBillAmt] = useState("");
  const [tdsAmount, setTdsAmount] = useState("");
  const [netAmount, setNetAmount] = useState("");
  const [personResponsible, setPersonResponsible] = useState(
    "SYSTEM ADMINISTRATOR"
  );

  const pageTitles = {
    tdsregister: "TDS Register",
  };

  // Handler functions for buttons
  const handleNew = () => {
    console.log("New button clicked");
    // Reset form fields
    setSrNo("");
    setDate("28-May-25");
    setParty("");
    setTdsAc("");
    setInfo("");
    setDocNo("");
    setBillAmt("");
    setTdsAmount("");
    setNetAmount("");
    setPersonResponsible("SYSTEM ADMINISTRATOR");
  };

  const handleFind = () => {
    console.log("Find button clicked");
    // TODO: Add find logic
  };

  const handleCancel = () => {
    console.log("Cancel button clicked");
    // TODO: Add cancel logic
  };

  const handleClose = () => {
    console.log("Close button clicked");
    // TODO: Add close logic, potentially navigate away
  };

  return (
    <div className="h-screen overflow-y-auto ">
      <div className="transition-all  duration-300 ease-in-out bg-[#EEEEF1]">
        <Navbar
          pageTitle={pageTitles.tdsregister}
          toggleMobileSidebar={toggleMobileSidebar}
        />

        {/* Main Content Container */}
        <div className="p-4 sm:p-6">
          {/* Header Section */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
            {/* Company Header */}
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-lg font-bold text-gray-800 underline">
                DSM SUGAR RAJPURA
              </h2>
              <h3 className="text-lg font-bold text-gray-800 underline">
                BUDAUN
              </h3>
              <h1 className="text-xl font-bold text-gray-800 underline mt-4">
                TDS REGISTER
              </h1>
            </div>
            <div className="h-0.5 bg-gray-200 mb-4 sm:mb-6"></div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 items-center">
              <div className="sm:col-span-2">
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Sr No
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                  value={srNo}
                  onChange={(e) => setSrNo(e.target.value)}
                />
              </div>

              {/* Date */}
              <div className="sm:col-span-2">
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Date
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              {/* Party */}
              <div className="col-span-full">
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Party
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                  value={party}
                  onChange={(e) => setParty(e.target.value)}
                />
              </div>

              {/* TDS A/C */}
              <div className="col-span-full">
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  TDS A/C
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                  value={tdsAc}
                  onChange={(e) => setTdsAc(e.target.value)}
                />
              </div>

              {/* Info */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Info
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                  value={info}
                  onChange={(e) => setInfo(e.target.value)}
                />
              </div>

              {/* Doc No */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Doc No
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                  value={docNo}
                  onChange={(e) => setDocNo(e.target.value)}
                />
              </div>

              {/* Bill Amt */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Bill Amt
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                  value={billAmt}
                  onChange={(e) => setBillAmt(e.target.value)}
                />
              </div>

              {/* TDS Amount */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  TDS Amount :
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                  value={tdsAmount}
                  onChange={(e) => setTdsAmount(e.target.value)}
                />
              </div>

              {/* Net Amount */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Net Amount :
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                  value={netAmount}
                  onChange={(e) => setNetAmount(e.target.value)}
                />
              </div>
            </div>

            {/* Entered By Section */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2 text-sm">
                Entered By
              </label>
              <div className="flex gap-2 items-center">
                <span className="text-sm text-gray-700 font-medium">
                  Person Responsible
                </span>
                {/* SA Input */}
                <input
                  type="text"
                  className="w-16 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                  value="SA" // This appears to be a fixed value from the image
                  readOnly
                />
                {/* SYSTEM ADMINISTRATOR Input */}
                <input
                  type="text"
                  className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                  value={personResponsible}
                  onChange={(e) => setPersonResponsible(e.target.value)}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-end gap-3">
              <button
                onClick={handleNew}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-[#292F4E] text-white rounded-lg font-medium transform transition-all duration-300 hover:scale-105 text-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                NEW
              </button>
              <button
                onClick={handleFind}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-[#292F4E] text-white rounded-lg font-medium transform transition-all duration-300 hover:scale-105 text-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                FIND
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-[#292F4E] text-white rounded-lg font-medium transform transition-all duration-300 hover:scale-105 text-sm"
              >
                {/* Placeholder for Cancel icon */}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                CANCEL
              </button>
              <button
                onClick={handleClose}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-[#292F4E] text-white rounded-lg font-medium transform transition-all duration-300 hover:scale-105 text-sm"
              >
                {/* Placeholder for Stop icon */}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3v1"
                  />
                </svg>
                CLOSE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
