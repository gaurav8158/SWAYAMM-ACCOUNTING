"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Ban, Plus, Save, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      <div className={`transition-all  duration-300 ease-in-out bg-[#EEEEF1]`}>
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
              <label className="block text-gray-700 font-medium mb-4 border-b-1 pb-2 text-sm">
                Entered By
              </label>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-sm text-gray-700 font-medium">
                  Person Responsible
                </span>

                {/* SA Input */}
                <input
                  type="text"
                  className="w-full sm:w-16 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-sm"
                  value="SA"
                  readOnly
                />

                {/* SYSTEM ADMINISTRATOR Input */}
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black text-sm"
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
