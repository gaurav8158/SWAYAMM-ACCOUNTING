"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Eye, FileText, Printer, Sheet, X } from "lucide-react";
import { formatDateToYMD } from "@/function/formdatetoymd";
import DatePicker from "react-datepicker";
const page = () => {
  const [accountCodeBase, setAccountCodeBase] = useState(false);
  const [accountCode, setAccountCode] = useState("");
  const [accountName, setAccountName] = useState("");

  const [toDate, setToDate] = useState(formatDateToYMD(new Date()));

  const [fileName, setFileName] = useState("C:\\local.txt");
  const [numberOfCopies, setNumberOfCopies] = useState("1");
  const [opening, setOpening] = useState(false);
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
      <Navbar pageTitle="Trial Reports" menu="Reports" />

    
      <div className="p-6 sm:px-4 md:px-6 py-1">
        {/* Book Printing */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Trial Balance Printing
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

            {/* Led Code */}
            <div>
              <label className="block text-gray-700 font-medium mb-1 text-sm">
                Led Code
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
                  Up To
                </label>
                <DatePicker
                  className="w-full custom-input"
                  selected={toDate}
                  onChange={(date) => setToDate(formatDateToYMD(date))}
                />
              </div>
            </div>
            <div className="flex items-end">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={opening}
                  onChange={(e) => setOpening(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-gray-700 font-medium text-sm">
                  With Opeing Balanace
                </span>
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {/* Download Excel */}
            <button
              onClick={handleProcess}
              className="flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-xl bg-white shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-200"
            >
              <div className="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center">
                <Sheet strokeWidth={1.5} className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold text-gray-800">
                Download Excel
              </span>
            </button>

            {/* Download PDF */}
            <button
              onClick={handleClose}
              className="flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-xl bg-white shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-200"
            >
              <div className="w-10 h-10 bg-yellow-500 text-white rounded-lg flex items-center justify-center">
                <FileText strokeWidth={1.5} className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold text-gray-800">
                Download PDF
              </span>
            </button>

            {/* View PDF */}
            <button
              onClick={handleView}
              className="flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-xl bg-white shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-200"
            >
              <div className="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center">
                <Eye strokeWidth={1.5} className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold text-gray-800">
                View PDF
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
