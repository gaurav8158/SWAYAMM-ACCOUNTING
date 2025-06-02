"use client"
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
const page = ({
  isCollapsed = false,
  activeItem,
  toggleMobileSidebar = () => {},
}) => {
  // State for form fields
  const [bankStatementDate, setBankStatementDate] = useState("");
  const [dateOfEntry, setDateOfEntry] = useState("28-May-25");
  const [chqDdNo, setChqDdNo] = useState("");
  const [amount, setAmount] = useState("");
  const [party, setParty] = useState("");
  const [bank, setBank] = useState("");
  const [personResponsible, setPersonResponsible] = useState(
    "SYSTEM ADMINISTRATOR"
  );
  const [tranType, setTranType] = useState("WITHDRAWAL"); // WITHDRAWAL or DEPOSIT
  const [videType, setVideType] = useState("CHEQUE"); // CHEQUE, DD, PAY ORDER, TPO/TT/MT, RTGS, LC

  const pageTitles = {
    bankstatemententry: "Bank Statement Entry",
  };

  // Handler functions for buttons
  const handleNew = () => {
    console.log("New button clicked");
    // Reset form fields
    setBankStatementDate("");
    setDateOfEntry("28-May-25");
    setChqDdNo("");
    setAmount("");
    setParty("");
    setBank("");
    setPersonResponsible("SYSTEM ADMINISTRATOR");
    setTranType("WITHDRAWAL");
    setVideType("CHEQUE");
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
      <div
        className={`transition-all  duration-300 ease-in-out bg-[#EEEEF1]`}
      >
        <Navbar
          pageTitle={pageTitles.bankstatemententry}
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
                Bank Statement Entry
              </h1>
            </div>
            <div className="h-0.5 bg-gray-200 mb-4 sm:mb-6"></div>

            {/* Transaction Type Radio Buttons */}
            <div className="flex justify-center gap-6 mb-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="tranType"
                  value="WITHDRAWAL"
                  checked={tranType === "WITHDRAWAL"}
                  onChange={(e) => setTranType(e.target.value)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700 font-medium">
                  WITHDRAWAL
                </span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="tranType"
                  value="DEPOSIT"
                  checked={tranType === "DEPOSIT"}
                  onChange={(e) => setTranType(e.target.value)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700 font-medium">
                  DEPOSIT
                </span>
              </label>
            </div>

            {/* VIDE Options */}
            <div className="mb-6 p-4 border border-gray-300 rounded-lg">
              <label className="block text-gray-700 font-medium mb-3 text-sm">
                VIDE
              </label>
              <div className="flex flex-wrap gap-4">
                {["CHEQUE", "DD", "PAY ORDER", "TPO/TT/MT", "RTGS", "LC"].map(
                  (type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="radio"
                        name="videType"
                        value={type}
                        checked={videType === type}
                        onChange={(e) => setVideType(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-700 font-medium">
                        {type}
                      </span>
                    </label>
                  )
                )}
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Bank Statement Date */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Bank Statement Date :
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                  value={bankStatementDate}
                  onChange={(e) => setBankStatementDate(e.target.value)}
                />
              </div>

              {/* Date of Entry */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Date of Entry :
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                  value={dateOfEntry}
                  onChange={(e) => setDateOfEntry(e.target.value)}
                />
              </div>

              {/* Chq./DD/TPO/TT/MT/LC/PAY ORDER No. */}
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Chq./DD/TPO/TT/MT/LC/PAY ORDER No. :
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                  value={chqDdNo}
                  onChange={(e) => setChqDdNo(e.target.value)}
                />
              </div>

              {/* Amount */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Amount :
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              {/* Party */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Party :
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                  value={party}
                  onChange={(e) => setParty(e.target.value)}
                />
              </div>

              {/* Bank */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Bank :
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                  value={bank}
                  onChange={(e) => setBank(e.target.value)}
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
