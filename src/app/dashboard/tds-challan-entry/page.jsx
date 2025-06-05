"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Ban, Cpu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const page = ({
  isCollapsed = false,
  activeItem,
  toggleMobileSidebar = () => {},
}) => {
  // State for form fields
  const [fromDate, setFromDate] = useState("28-May-25");
  const [toDate, setToDate] = useState("28-May-25");
  const [refNoFrom, setRefNoFrom] = useState("1");
  const [refNoTo, setRefNoTo] = useState("99999");
  const [challanNo, setChallanNo] = useState("");
  const [challanDate, setChallanDate] = useState("28-May-25");
  const [chqNo, setChqNo] = useState("");
  const [underSec, setUnderSec] = useState("");
  const [bankBrCode, setBankBrCode] = useState("0000633");
  const [account, setAccount] = useState("");
  const [ledger, setLedger] = useState("");
  const [challanAmt, setChallanAmt] = useState("");
  const [vchType, setVchType] = useState("");
  const [voucherNo, setVoucherNo] = useState("");
  const [vchAmount, setVchAmount] = useState("");
  const [personResponsible, setPersonResponsible] = useState(
    "SYSTEM ADMINISTRATOR"
  );

  const pageTitles = {
    tdschallanentry: "TDS Challan Entry",
  };

  // Handler functions for buttons
  const handleProcess = () => {
    console.log("Process button clicked");
    // TODO: Add process logic
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
          pageTitle={pageTitles.tdschallanentry}
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
                CHALLAN
              </h1>
            </div>
            <div className="h-0.5 bg-gray-200 mb-4 sm:mb-6"></div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 items-center">
              {/* From Date */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  From Date
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
              </div>

              {/* To Date */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  To Date
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                />
              </div>

              {/* Ref No. From */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Ref No. From
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                  value={refNoFrom}
                  onChange={(e) => setRefNoFrom(e.target.value)}
                />
              </div>

              {/* Ref No. To */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  To
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                  value={refNoTo}
                  onChange={(e) => setRefNoTo(e.target.value)}
                />
              </div>

              {/* Challan No. */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Challan No.
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                  value={challanNo}
                  onChange={(e) => setChallanNo(e.target.value)}
                />
              </div>

              {/* Date (Challan Date) */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Date
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                  value={challanDate}
                  onChange={(e) => setChallanDate(e.target.value)}
                />
              </div>

              {/* CHQ NO */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  CHQ NO
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                  value={chqNo}
                  onChange={(e) => setChqNo(e.target.value)}
                />
              </div>

              {/* Under Sec. */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Under Sec.
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                  value={underSec}
                  onChange={(e) => setUnderSec(e.target.value)}
                />
              </div>

              {/* Bank Br Code */}
              <div className="md:col-span-3">
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Bank Br Code
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                  value={bankBrCode}
                  onChange={(e) => setBankBrCode(e.target.value)}
                />
              </div>

              {/* Account */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Account
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}
                />
              </div>

              {/* Ledger and Challan Amt on the same row */}
              <div className="md:col-span-3 grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Ledger
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                    value={ledger}
                    onChange={(e) => setLedger(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Challan Amt
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                    value={challanAmt}
                    onChange={(e) => setChallanAmt(e.target.value)}
                  />
                </div>
              </div>

              {/* Vch Type and Voucher No on the same row */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Vch Type
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                  value={vchType}
                  onChange={(e) => setVchType(e.target.value)}
                />
              </div>

              {/* Voucher No and Vch Amount on the same row */}
              <div className="md:col-span-3 grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Voucher No
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                    value={voucherNo}
                    onChange={(e) => setVoucherNo(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Vch Amount
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                    value={vchAmount}
                    onChange={(e) => setVchAmount(e.target.value)}
                  />
                </div>
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
                size="lg"
                variant="outline"
                onClick={handleProcess}
                className="flex-1 sm:flex-none h-16 sm:h-10 flex-col sm:flex-row w-full sm:w-auto text-blue-600 border-blue-600 hover:bg-blue-50"
              >
                <Cpu className="text-xl" />
                <span className="block">Process</span>
              </Button>

              <Button
                onClick={handleCancel}
                size="lg"
                variant="secondary"
                className="flex-1 sm:flex-none h-16 sm:h-10 flex-col sm:flex-row w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-white"
              >
                <Ban className="text-xl" />
                <span className="block">CANCEL</span>
              </Button>

              <Button
                onClick={handleClose}
                size="lg"
                variant="destructive"
                className="flex-1 sm:flex-none h-16 sm:h-10 flex-col  sm:flex-row w-full sm:w-auto"
              >
                <X className="text-xl" />
                <span className="block">CLOSE</span>
              </Button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
