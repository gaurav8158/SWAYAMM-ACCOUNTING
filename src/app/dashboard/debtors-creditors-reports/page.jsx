"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Cpu, Eye, Printer, X } from "lucide-react";
const page = () => {
  const [selectedReportType, setSelectedReportType] =
    useState("Debtors/Creditors");
  const [accountCodeBase, setAccountCodeBase] = useState(false);
  const [accountCode, setAccountCode] = useState("");
  const [accountName, setAccountName] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [fileName, setFileName] = useState("C:\\local.txt");
  const [numberOfCopies, setNumberOfCopies] = useState("1");
  const [selectedDatabase, setSelectedDatabase] = useState("");
  const [transtype, setTransType] = useState("");
  const [amtType, setAmtType] = useState("");
  const [amount, setAmount] = useState("");
  const pageTitles = {
    dashboard: "Dashboard",
    account: "Account Management",
    ledger: "Financial Ledger",
    narration: "Narration",
    reports: "Debtors/Creditors Reports",
  };

  const reportTypes = [
    "Book Printing",

    "Ledger Printing",
    "Trial Printing",
    "Statement of Account",
    "Voucher Printing",
    "Debtors/Creditors",
  ];

  const databaseOptions = [
    { code: "DB2024", description: "Database 2024 Season" },
    { code: "DB2023", description: "Database 2023 Season" },
    { code: "DB2022", description: "Database 2022 Season" },
    { code: "DBCURRENT", description: "Current Active Database" },
  ];

  const handleReportTypeChange = (type) => {
    setSelectedReportType(type);
  };

  const handleProcess = () => {
    console.log("Processing report...");
    console.log({
      reportType: selectedReportType,
      accountCode,
      accountName,
      fromDate,
      toDate,
      fileName,
      numberOfCopies,
      selectedDatabase,
    });
  };

  const handleClose = () => {
    console.log("Closing reports...");
  };

  const handleView = () => {
    console.log("Viewing report...");
  };

  const handlePrint = () => {
    console.log("Printing report...");
  };

  const handleConnect = () => {
    console.log("Connecting to database:", selectedDatabase);
  };

  return (
    <div className="h-screen overflow-y-auto ">
      <div className="transition-all  duration-300 ease-in-out bg-[#EEEEF1]">
        <Navbar pageTitle={pageTitles.reports} />

        {/* Main Reports Container */}
        <div className="p-6 sm:px-4 md:px-6 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Report Type Selection */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg sm:text-xl font-medium text-gray-800 mb-4 sm:mb-6">
                  Report Types
                </h2>
                <div className="h-px bg-gray-200 mb-6"></div>

                <div className="space-y-3">
                  {reportTypes.map((type) => (
                    <label
                      key={type}
                      className="flex items-center space-x-3 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="reportType"
                        value={type}
                        checked={selectedReportType === type}
                        onChange={() => handleReportTypeChange(type)}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-gray-700 font-medium text-sm sm:text-base">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => console.log("Other Reports clicked")}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded font-medium hover:bg-gray-400 transition-colors text-sm"
                  >
                    Other Reports
                  </button>
                </div>
              </div>

              {/* Print Options */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg sm:text-xl font-medium text-gray-800 mb-4 sm:mb-6">
                  Print Option
                </h2>
                <div className="h-px bg-gray-200 mb-6"></div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                      File Name
                    </label>
                    <input
                      type="text"
                      className="w-full custom-input"
                      value={fileName}
                      onChange={(e) => setFileName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                      Nos. Of Copies
                    </label>
                    <input
                      type="number"
                      className="w-full custom-input"
                      value={numberOfCopies}
                      onChange={(e) => setNumberOfCopies(e.target.value)}
                      min="1"
                    />
                  </div>
                </div>

                {/* Action Buttons Grid */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <button
                    onClick={handleProcess}
                    className="flex flex-col items-center justify-center gap-2 p-4 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                      <Cpu strokeWidth={1.5} className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      Process
                    </span>
                  </button>

                  <button
                    onClick={handleClose}
                    className="flex flex-col items-center justify-center gap-2 p-4 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
                      <X strokeWidth={1.5} className="text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      Close
                    </span>
                  </button>

                  <button
                    onClick={handleView}
                    className="flex flex-col items-center justify-center gap-2 p-4 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                      <Eye strokeWidth={1.5} className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      View
                    </span>
                  </button>

                  <button
                    onClick={handlePrint}
                    className="flex flex-col items-center justify-center gap-2 p-4 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-8 h-8 bg-gray-500 rounded flex items-center justify-center">
                      <Printer strokeWidth={1.5} className="text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      Print
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/*  Debtors/Creditors*/}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg sm:text-xl font-medium text-gray-800 mb-4 sm:mb-6">
                  Debtors/Creditors
                </h2>
                <div className="h-px bg-gray-200 mb-6"></div>

                <div className="space-y-4">
                  <div className="flex gap-2 items-center bg-blue-50 py-3 px-2 rounded-xl">
                    <div className="flex gap-4 items-center">
                      {/* Debitors */}
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          value="Debitors"
                          checked={transtype === "Debitors"}
                          onChange={(e) => setTransType(e.target.value)}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="text-sm text-gray-800">Debitors</span>
                      </label>

                      {/* Creditors */}
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          value="Creditors"
                          checked={transtype === "Creditors"}
                          onChange={(e) => setTransType(e.target.value)}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="text-sm text-gray-800">Creditors</span>
                      </label>
                    </div>

                    <div className="flex items-end">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={accountCodeBase}
                          onChange={(e) => setAccountCodeBase(e.target.checked)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-gray-700 font-medium text-sm">
                          Opening Balance
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="grid grid-cols-1  gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                        Led Code
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          className="w-[20%] custom-input"
                          value={accountCode}
                          onChange={(e) => setAccountCode(e.target.value)}
                        />
                        <input
                          type="text"
                          className="w-[80%] custom-input"
                          value={accountName}
                          onChange={(e) => setAccountName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                        From
                      </label>
                      <input
                        type="date"
                        className="w-full custom-input"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                        To
                      </label>
                      <input
                        type="date"
                        className="w-full custom-input"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1  gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                        Amount
                      </label>
                      <div className="flex gap-2">
                        <select
                          className="w-[20%] custom-input"
                          value={amtType}
                          onChange={(e) => setAmtType(e.target.value)}
                        >
                          <option>INR</option>
                          <option>USD</option>
                        </select>
                       
                        <input
                          type="text"
                          className="w-[80%] custom-input"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connect To Database */}
              <div className="bg-white rounded-lg shadow-sm p-6 relative overflow-hidden">
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-32 h-20 bg-gray-300 rounded-tl-3xl opacity-30"></div>

                <div className="relative z-10">
                  <h2 className="text-lg sm:text-xl font-medium text-gray-800 mb-4 sm:mb-6">
                    Connect To :
                  </h2>
                  <div className="h-px bg-gray-200 mb-6"></div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                        Select Database / Season
                      </label>
                      <select
                        className="w-full custom-input"
                        value={selectedDatabase}
                        onChange={(e) => setSelectedDatabase(e.target.value)}
                      >
                        <option value="">Select Database / Season</option>
                        {databaseOptions.map((option) => (
                          <option key={option.code} value={option.code}>
                            {option.code} - {option.description}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={handleConnect}
                        className="px-6 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors text-sm sm:text-base"
                      >
                        Connect
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
