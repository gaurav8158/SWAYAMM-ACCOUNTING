"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Ban, CircleFadingPlus, Plus, Save, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
                  className="flex-grow w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                  value={personResponsible}
                  onChange={(e) => setPersonResponsible(e.target.value)}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex my-5  justify-between sm:justify-center gap-2 sm:gap-4 w-full">
              <Button
                onClick={handleNew}
                size="lg"
                className="flex-1 sm:flex-none h-16 sm:h-10 flex-col sm:flex-row w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white"
              >
                <Plus className="text-xl" />
                <span className="block">New</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleFind}
                className="flex-1 sm:flex-none h-16 sm:h-10 flex-col sm:flex-row w-full sm:w-auto text-blue-600 border-blue-600 hover:bg-blue-50"
              >
                <Search className="text-xl" />
                <span className="block">Find</span>
              </Button>
              <Button
                onClick={handleCancel}
                size="lg"
                variant="secondary"
                className="flex-1 sm:flex-none h-16 sm:h-10 flex-col sm:flex-row w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-white"
              >
                <Ban className="text-xl" />
                <span className="block">Cancel</span>
              </Button>

              <Button
                onClick={handleClose}
                size="lg"
                variant="destructive"
                className="flex-1 sm:flex-none h-16 sm:h-10 flex-col  sm:flex-row w-full sm:w-auto"
              >
                <X className="text-xl" />
                <span className="block">Close</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
