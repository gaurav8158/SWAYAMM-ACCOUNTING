"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Eye, FileText, Printer, Sheet, X } from "lucide-react";
const page = () => {
  const [accountCodeBase, setAccountCodeBase] = useState(false);
  const [accountCode, setAccountCode] = useState("");
  const [accountName, setAccountName] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [fileName, setFileName] = useState("C:\\local.txt");
  const [numberOfCopies, setNumberOfCopies] = useState("1");

  const handleProcess = () => {
    console.log("Processing report...");
    console.log({
      accountCode,
      accountName,
      fromDate,
      toDate,
      fileName,
      numberOfCopies,
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

  return (
    <div className="min-h-screen bg-[#EEEEF1] overflow-y-auto">
      <Navbar pageTitle="Book Reports" menu="Reports" />

      <div className="p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Book Printing */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Book Printing
            </h2>
            <div className="h-px bg-gray-200 mb-6" />

            <div className="space-y-6">
              {/* Period Wise Checkbox */}
              <div>
                <label className="inline-flex items-center space-x-2 text-sm cursor-pointer text-gray-700">
                  <input
                    type="checkbox"
                    checked={accountCodeBase}
                    onChange={(e) => setAccountCodeBase(e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                  />
                  <span className="font-medium">Period Wise</span>
                </label>
              </div>

              {/* Book Code */}
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-sm">
                  Book Code
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    className="custom-input w-1/4"
                    value={accountCode}
                    onChange={(e) => setAccountCode(e.target.value)}
                    placeholder="Code"
                  />
                  <input
                    type="text"
                    className="custom-input w-3/4"
                    value={accountName}
                    onChange={(e) => setAccountName(e.target.value)}
                    placeholder="Name"
                  />
                </div>
              </div>

              {/* Date Range */}
              <div className="grid grid-cols-1  gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1 text-sm">
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
                  <label className="block text-gray-700 font-medium mb-1 text-sm">
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
            </div>
          </div>

          {/* Print Options */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Print Options
            </h2>
            <div className="h-px bg-gray-200 mb-6" />

            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-sm">
                  File Name
                </label>
                <input
                  type="text"
                  className="w-full custom-input"
                  value={fileName}
                  onChange={(e) => setFileName(e.target.value)}
                  placeholder="Enter file name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1 text-sm">
                  No. of Copies
                </label>
                <input
                  type="number"
                  min="1"
                  className="w-full custom-input"
                  value={numberOfCopies}
                  onChange={(e) => setNumberOfCopies(e.target.value)}
                  placeholder="Enter number"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-8">
              <button
                onClick={handleProcess}
                className="flex  flex-col sm:flex-row items-center gap-2 p-3 border-2 border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition-colors"
              >
                <div className="w-8 h-8 bg-green-500 text-white rounded flex items-center justify-center">
                  <Sheet strokeWidth={1.5} className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-gray-800">
                  Download Excel
                </span>
              </button>

              <button
                onClick={handleClose}
                className="flex   flex-col sm:flex-row items-center gap-2 p-3 border-2 border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition-colors"
              >
                <div className="w-8 h-8 bg-yellow-500 text-white rounded flex items-center justify-center">
                  <FileText strokeWidth={1.5} className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-gray-800">
                  Download PDF
                </span>
              </button>

              <button
                onClick={handleView}
                className="flex   flex-col sm:flex-row items-center gap-2 p-3 border-2 border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition-colors"
              >
                <div className="w-8 h-8 bg-blue-500 text-white rounded flex items-center justify-center">
                  <Eye strokeWidth={1.5} className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-gray-800">View</span>
              </button>

              <button
                onClick={handlePrint}
                className="flex  flex-col sm:flex-row items-center gap-2 p-3 border-2 border-gray-300 rounded-lg bg-white hover:bg-gray-100 transition-colors"
              >
                <div className="w-8 h-8 bg-gray-500 text-white rounded flex items-center justify-center">
                  <Printer strokeWidth={1.5} className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-gray-800">Print</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;