"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";

const page = ({ isCollapsed, activeItem, toggleMobileSidebar }) => {
  const [selectedNarration, setSelectedNarration] = useState("");
  const [selectedVoucherType, setSelectedVoucherType] = useState("");
  const [selectedTranType, setSelectedTranType] = useState("");
  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");
  const [bookValue, setBookValue] = useState("NA");
  const [dateOfOpening, setDateOfOpening] = useState("18-May-25");
  const [responsiblePerson, setResponsiblePerson] = useState("SA");

  // Form data state
  const [debitEntries, setDebitEntries] = useState({
    dbAc1: "",
    dbAc2: "",
    ledger1: "",
    ledger2: "",
    pl1: "",
    pl2: "",
    bsh1: "",
    bsh2: "",
    cf1: "",
    cf2: "",
  });

  const [creditEntries, setCreditEntries] = useState({
    crAc1: "",
    crAc2: "",
    ledger1: "",
    ledger2: "",
    pl1: "",
    pl2: "",
    bsh1: "",
    bsh2: "",
    cf1: "",
    cf2: "",
  });

  // Selected codes for display
  const [selectedDebitDbAc, setSelectedDebitDbAc] = useState("");
  const [selectedDebitLedger, setSelectedDebitLedger] = useState("");
  const [selectedDebitPL, setSelectedDebitPL] = useState("");
  const [selectedDebitBSH, setSelectedDebitBSH] = useState("");
  const [selectedDebitCF, setSelectedDebitCF] = useState("");

  const [selectedCreditCrAc, setSelectedCreditCrAc] = useState("");
  const [selectedCreditLedger, setSelectedCreditLedger] = useState("");
  const [selectedCreditPL, setSelectedCreditPL] = useState("");
  const [selectedCreditBSH, setSelectedCreditBSH] = useState("");
  const [selectedCreditCF, setSelectedCreditCF] = useState("");

  const [narrationDetails, setNarrationDetails] = useState(Array(9).fill("NA"));

  const pageTitles = {
    dashboard: "Dashboard",
    account: "Account Management",
    ledger: "Financial Ledger",
    narration: "Narration",
  };

  // Dropdown options
  const narrationOptions = [
    { code: "N1", description: "Cash Payment" },
    { code: "N2", description: "Bank Transfer" },
    { code: "N3", description: "Expense Payment" },
    { code: "N4", description: "Revenue Receipt" },
  ];

  const voucherOptions = [
    { code: "V1", description: "Payment Voucher" },
    { code: "V2", description: "Receipt Voucher" },
    { code: "V3", description: "Journal Voucher" },
    { code: "V4", description: "Contra Voucher" },
  ];

  const tranTypeOptions = [
    { code: "T1", description: "Debit Transaction" },
    { code: "T2", description: "Credit Transaction" },
    { code: "T3", description: "Transfer Transaction" },
  ];

  const paymentOptions = [
    { code: "P1", description: "Cash Payment" },
    { code: "P2", description: "Bank Payment" },
    { code: "P3", description: "Cheque Payment" },
  ];

  // Account entry options
  const plOptions = [
    { code: "PL001", description: "Revenue Account" },
    { code: "PL002", description: "Cost of Goods Sold" },
    { code: "PL003", description: "Operating Expenses" },
    { code: "PL004", description: "Administrative Expenses" },
    { code: "PL005", description: "Finance Costs" },
  ];

  const bshOptions = [
    { code: "BS001", description: "Current Assets" },
    { code: "BS002", description: "Fixed Assets" },
    { code: "BS003", description: "Current Liabilities" },
    { code: "BS004", description: "Long Term Liabilities" },
    { code: "BS005", description: "Equity" },
  ];

  const dbAcOptions = [
    { code: "DB001", description: "Cash Account" },
    { code: "DB002", description: "Bank Account" },
    { code: "DB003", description: "Petty Cash" },
    { code: "DB004", description: "Accounts Receivable" },
    { code: "DB005", description: "Investment Account" },
  ];

  const crAcOptions = [
    { code: "CR001", description: "Sales Account" },
    { code: "CR002", description: "Service Revenue" },
    { code: "CR003", description: "Interest Income" },
    { code: "CR004", description: "Accounts Payable" },
    { code: "CR005", description: "Accrued Expenses" },
  ];

  const ledgerOptions = [
    { code: "LG001", description: "General Ledger" },
    { code: "LG002", description: "Customer Ledger" },
    { code: "LG003", description: "Supplier Ledger" },
    { code: "LG004", description: "Employee Ledger" },
    { code: "LG005", description: "Bank Ledger" },
  ];

  const cfOptions = [
    { code: "CF001", description: "Operating Cash Flow" },
    { code: "CF002", description: "Investment Cash Flow" },
    { code: "CF003", description: "Financing Cash Flow" },
    { code: "CF004", description: "Free Cash Flow" },
    { code: "CF005", description: "Net Cash Flow" },
  ];

  const handleDebitChange = (field, value) => {
    setDebitEntries((prev) => ({ ...prev, [field]: value }));
  };

  const handleCreditChange = (field, value) => {
    setCreditEntries((prev) => ({ ...prev, [field]: value }));
  };

  const handleNarrationDetailChange = (index, value) => {
    const newDetails = [...narrationDetails];
    newDetails[index] = value;
    setNarrationDetails(newDetails);
  };

  const handleSave = () => {
    console.log("Saving narration data...");
  };

  const handleCancel = () => {
    console.log("Cancelling...");
  };

  const handleClose = () => {
    console.log("Closing...");
  };

  return (
     <div className="h-screen overflow-y-auto ">
      <div className="transition-all  duration-300 ease-in-out bg-[#EEEEF1]">
        <Navbar
          pageTitle={pageTitles.narration}
          toggleMobileSidebar={toggleMobileSidebar}
        />

        {/* Header Section */}
        <div className="p-6 sm:px-4 md:px-6 py-1">
          <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 md:p-6">
            {/* Company Header */}
            <div className="text-center mb-6">
              <h2 className="text-lg font-medium text-gray-800 underline">
                DSM SUGAR RAJPURA
              </h2>
              <h3 className="text-base font-medium text-gray-800 underline mt-1">
                BUDAUN
              </h3>
              <h1 className="text-xl font-bold text-gray-800 mt-4 mb-6">
                NARRATION
              </h1>
            </div>
            <div className="h-0.5 bg-gray-200 mb-6 sm:mb-8"></div>

            {/* Narration Control */}
            <div className="mb-4 sm:mb-6">
              {/* Mobile Layout */}
              <div className="block sm:hidden">
                <div className="mb-3">
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Narration Code
                  </label>
                  <div className="bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center">
                    {selectedNarration || "Narration"}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Narration Description
                  </label>
                  <select
                    className="w-full bg-white text-gray-700 rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={selectedNarration}
                    onChange={(e) => setSelectedNarration(e.target.value)}
                  >
                    <option value="">Select...</option>
                    {narrationOptions.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.code} - {option.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden sm:block">
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2">
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    Narration Code
                  </label>
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    Narration Description
                  </label>
                </div>
                <div className="flex flex-row gap-3 sm:gap-4 items-center">
                  <div className="bg-gray-200 text-gray-700 rounded-xl p-3 sm:min-w-35 font-medium flex items-center">
                    {selectedNarration || "Narration"}
                  </div>
                  <select
                    className="w-full flex-1 bg-white text-gray-700 rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={selectedNarration}
                    onChange={(e) => setSelectedNarration(e.target.value)}
                  >
                    <option value="">Select...</option>
                    {narrationOptions.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.code} - {option.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
              {/* Transaction Type */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                  Transaction Type
                </label>
                <select
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm sm:text-base"
                  value={selectedTranType}
                  onChange={(e) => setSelectedTranType(e.target.value)}
                >
                  <option value="">Select...</option>
                  {tranTypeOptions.map((option) => (
                    <option key={option.code} value={option.code}>
                      {option.code} - {option.description}
                    </option>
                  ))}
                </select>
              </div>

              {/* Voucher Type */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                  Voucher Type
                </label>
                <select
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm sm:text-base"
                  value={selectedVoucherType}
                  onChange={(e) => setSelectedVoucherType(e.target.value)}
                >
                  <option value="">Select...</option>
                  {voucherOptions.map((option) => (
                    <option key={option.code} value={option.code}>
                      {option.code} - {option.description}
                    </option>
                  ))}
                </select>
              </div>

              {/* Book */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                  Book
                </label>
                <input
                  type="text"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm sm:text-base"
                  value={bookValue}
                  onChange={(e) => setBookValue(e.target.value)}
                />
              </div>

              {/* Date of Opening */}
              <div className="sm:col-span-2 md:col-span-1">
                <label className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                  Date of Opening
                </label>
                <input
                  type="text"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm sm:text-base"
                  value={dateOfOpening}
                  onChange={(e) => setDateOfOpening(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Debit Entries Section */}
        <div className="p-6 sm:px-4 md:px-6 py-1">
          <div className="bg-white rounded-lg p-3 sm:p-6 md:p-8">
            <h2 className="text-lg sm:text-xl font-medium text-gray-800 mb-4 sm:mb-6">
              Debit Entries
            </h2>
            <div className="h-px bg-gray-200 mb-6 sm:mb-8"></div>

            {/* DB A/C */}
            <div className="mb-4 sm:mb-6">
              {/* Mobile Layout */}
              <div className="block sm:hidden">
                <div className="mb-3">
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    DB A/C Code
                  </label>
                  <div className="bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center">
                    {selectedDebitDbAc || "DB A/C Code"}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    DB A/C Description
                  </label>
                  <select
                    className="w-full bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={selectedDebitDbAc}
                    onChange={(e) => setSelectedDebitDbAc(e.target.value)}
                  >
                    <option value="">Select DB A/C...</option>
                    {dbAcOptions.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.code} - {option.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden sm:block">
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2">
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    DB A/C Code
                  </label>
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    DB A/C Description
                  </label>
                </div>
                <div className="flex flex-row gap-3 sm:gap-4 items-center">
                  <div className="bg-gray-200 text-gray-700 rounded-xl p-3 sm:min-w-35 font-medium flex items-center">
                    {selectedDebitDbAc || "DB A/C"}
                  </div>
                  <select
                    className="w-full flex-1 bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={selectedDebitDbAc}
                    onChange={(e) => setSelectedDebitDbAc(e.target.value)}
                  >
                    <option value="">Select DB A/C...</option>
                    {dbAcOptions.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.code} - {option.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* LEDGER */}
            <div className="mb-4 sm:mb-6">
              {/* Mobile Layout */}
              <div className="block sm:hidden">
                <div className="mb-3">
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Ledger Code
                  </label>
                  <div className="bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center">
                    {selectedDebitLedger || "Ledger Code"}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Ledger Description
                  </label>
                  <select
                    className="w-full bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={selectedDebitLedger}
                    onChange={(e) => setSelectedDebitLedger(e.target.value)}
                  >
                    <option value="">Select Ledger...</option>
                    {ledgerOptions.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.code} - {option.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden sm:block">
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2">
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    Ledger Code
                  </label>
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    Ledger Description
                  </label>
                </div>
                <div className="flex flex-row gap-3 sm:gap-4 items-center">
                  <div className="bg-gray-200 text-gray-700 rounded-xl p-3 sm:min-w-35 font-medium flex items-center">
                    {selectedDebitLedger || "Ledger"}
                  </div>
                  <select
                    className="w-full flex-1 bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={selectedDebitLedger}
                    onChange={(e) => setSelectedDebitLedger(e.target.value)}
                  >
                    <option value="">Select Ledger...</option>
                    {ledgerOptions.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.code} - {option.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* P & L */}
            <div className="mb-4 sm:mb-6">
              {/* Mobile Layout */}
              <div className="block sm:hidden">
                <div className="mb-3">
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    P & L Code
                  </label>
                  <div className="bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center">
                    {selectedDebitPL || "P & L Code"}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    P & L Description
                  </label>
                  <select
                    className="w-full bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={selectedDebitPL}
                    onChange={(e) => setSelectedDebitPL(e.target.value)}
                  >
                    <option value="">Select P&L Account...</option>
                    {plOptions.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.code} - {option.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden sm:block">
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2">
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    P & L Code
                  </label>
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    P & L Description
                  </label>
                </div>
                <div className="flex flex-row gap-3 sm:gap-4 items-center">
                  <div className="bg-gray-200 text-gray-700 rounded-xl p-3 sm:min-w-35 font-medium flex items-center">
                    {selectedDebitPL || "P & L Code"}
                  </div>
                  <select
                    className="w-full flex-1 bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={selectedDebitPL}
                    onChange={(e) => setSelectedDebitPL(e.target.value)}
                  >
                    <option value="">Select P&L Account...</option>
                    {plOptions.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.code} - {option.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* B.SH. */}
            <div className="mb-4 sm:mb-6">
              {/* Mobile Layout */}
              <div className="block sm:hidden">
                <div className="mb-3">
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    B.SH. Code
                  </label>
                  <div className="bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center">
                    {selectedDebitBSH || "B.SH. Code"}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    B.SH. Description
                  </label>
                  <select
                    className="w-full bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={selectedDebitBSH}
                    onChange={(e) => setSelectedDebitBSH(e.target.value)}
                  >
                    <option value="">Select Balance Sheet Account...</option>
                    {bshOptions.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.code} - {option.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden sm:block">
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2">
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    B.SH. Code
                  </label>
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    B.SH. Description
                  </label>
                </div>
                <div className="flex flex-row gap-3 sm:gap-4 items-center">
                  <div className="bg-gray-200 text-gray-700 rounded-xl p-3 sm:min-w-35 font-medium flex items-center">
                    {selectedDebitBSH || "B.SH. Code"}
                  </div>
                  <select
                    className="w-full flex-1 bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={selectedDebitBSH}
                    onChange={(e) => setSelectedDebitBSH(e.target.value)}
                  >
                    <option value="">Select Balance Sheet Account...</option>
                    {bshOptions.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.code} - {option.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* C & F */}
            <div className="mb-4 sm:mb-6">
              {/* Mobile Layout */}
              <div className="block sm:hidden">
                <div className="mb-3">
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    C & F Code
                  </label>
                  <div className="bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center">
                    {selectedDebitCF || "C & F Code"}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    C & F Description
                  </label>
                  <select
                    className="w-full bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={selectedDebitCF}
                    onChange={(e) => setSelectedDebitCF(e.target.value)}
                  >
                    <option value="">Select C & F...</option>
                    {cfOptions.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.code} - {option.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden sm:block">
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2">
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    C & F Code
                  </label>
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    C & F Description
                  </label>
                </div>
                <div className="flex flex-row gap-3 sm:gap-4 items-center">
                  <div className="bg-gray-200 text-gray-700 rounded-xl p-3 sm:min-w-35 font-medium flex items-center">
                    {selectedDebitCF || "C & F"}
                  </div>
                  <select
                    className="w-full flex-1 bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={selectedDebitCF}
                    onChange={(e) => setSelectedDebitCF(e.target.value)}
                  >
                    <option value="">Select C & F...</option>
                    {cfOptions.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.code} - {option.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credit Entries Section */}
        <div className="p-6 sm:px-4 md:px-6 py-1">
          <div className="bg-white rounded-lg p-3 sm:p-6 md:p-8">
            <h2 className="text-lg sm:text-xl font-medium text-gray-800 mb-4 sm:mb-6">
              Credit Entries
            </h2>
            <div className="h-px bg-gray-200 mb-6 sm:mb-8"></div>

            {/* CR A/C */}
            <div className="mb-4 sm:mb-6">
              {/* Mobile Layout */}
              <div className="block sm:hidden">
                <div className="mb-3">
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    CR A/C Code
                  </label>
                  <div className="bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center">
                    {selectedCreditCrAc || "CR A/C Code"}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    CR A/C Description
                  </label>
                  <select
                    className="w-full bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={selectedCreditCrAc}
                    onChange={(e) => setSelectedCreditCrAc(e.target.value)}
                  >
                    <option value="">Select CR A/C...</option>
                    {crAcOptions.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.code} - {option.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden sm:block">
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2">
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    CR A/C Code
                  </label>
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    CR A/C Description
                  </label>
                </div>
                <div className="flex flex-row gap-3 sm:gap-4 items-center">
                  <div className="bg-gray-200 text-gray-700 rounded-xl p-3 sm:min-w-35 font-medium flex items-center">
                    {selectedCreditCrAc || "CR A/C"}
                  </div>
                  <select
                    className="w-full flex-1 bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={selectedCreditCrAc}
                    onChange={(e) => setSelectedCreditCrAc(e.target.value)}
                  >
                    <option value="">Select CR A/C...</option>
                    {crAcOptions.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.code} - {option.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* LEDGER */}
            <div className="mb-4 sm:mb-6">
              {/* Mobile Layout */}
              <div className="block sm:hidden">
                <div className="mb-3">
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Ledger Code
                  </label>
                  <div className="bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center">
                    {selectedCreditLedger || "Ledger Code"}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Ledger Description
                  </label>
                  <select
                    className="w-full bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={selectedCreditLedger}
                    onChange={(e) => setSelectedCreditLedger(e.target.value)}
                  >
                    <option value="">Select Ledger...</option>
                    {ledgerOptions.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.code} - {option.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden sm:block">
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2">
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    Ledger Code
                  </label>
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    Ledger Description
                  </label>
                </div>
                <div className="flex flex-row gap-3 sm:gap-4 items-center">
                  <div className="bg-gray-200 text-gray-700 rounded-xl p-3 sm:min-w-35 font-medium flex items-center">
                    {selectedCreditLedger || "Ledger"}
                  </div>
                  <select
                    className="w-full flex-1 bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={selectedCreditLedger}
                    onChange={(e) => setSelectedCreditLedger(e.target.value)}
                  >
                    <option value="">Select Ledger...</option>
                    {ledgerOptions.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.code} - {option.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* P & L */}
            <div className="mb-4 sm:mb-6">
              {/* Mobile Layout */}
              <div className="block sm:hidden">
                <div className="mb-3">
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    P & L Code
                  </label>
                  <div className="bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center">
                    {selectedCreditPL || "P & L Code"}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    P & L Description
                  </label>
                  <select
                    className="w-full bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={selectedCreditPL}
                    onChange={(e) => setSelectedCreditPL(e.target.value)}
                  >
                    <option value="">Select P&L Account...</option>
                    {plOptions.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.code} - {option.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden sm:block">
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2">
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    P & L Code
                  </label>
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    P & L Description
                  </label>
                </div>
                <div className="flex flex-row gap-3 sm:gap-4 items-center">
                  <div className="bg-gray-200 text-gray-700 rounded-xl p-3 sm:min-w-35 font-medium flex items-center">
                    {selectedCreditPL || "P & L Code"}
                  </div>
                  <select
                    className="w-full flex-1 bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={selectedCreditPL}
                    onChange={(e) => setSelectedCreditPL(e.target.value)}
                  >
                    <option value="">Select P&L Account...</option>
                    {plOptions.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.code} - {option.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* B.SH. */}
            <div className="mb-4 sm:mb-6">
              {/* Mobile Layout */}
              <div className="block sm:hidden">
                <div className="mb-3">
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    B.SH. Code
                  </label>
                  <div className="bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center">
                    {selectedCreditBSH || "B.SH. Code"}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    B.SH. Description
                  </label>
                  <select
                    className="w-full bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={selectedCreditBSH}
                    onChange={(e) => setSelectedCreditBSH(e.target.value)}
                  >
                    <option value="">Select Balance Sheet Account...</option>
                    {bshOptions.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.code} - {option.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden sm:block">
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2">
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    B.SH. Code
                  </label>
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    B.SH. Description
                  </label>
                </div>
                <div className="flex flex-row gap-3 sm:gap-4 items-center">
                  <div className="bg-gray-200 text-gray-700 rounded-xl p-3 sm:min-w-35 font-medium flex items-center">
                    {selectedCreditBSH || "B.SH. Code"}
                  </div>
                  <select
                    className="w-full flex-1 bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={selectedCreditBSH}
                    onChange={(e) => setSelectedCreditBSH(e.target.value)}
                  >
                    <option value="">Select Balance Sheet Account...</option>
                    {bshOptions.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.code} - {option.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* C & F */}
            <div className="mb-4 sm:mb-6">
              {/* Mobile Layout */}
              <div className="block sm:hidden">
                <div className="mb-3">
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    C & F Code
                  </label>
                  <div className="bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center">
                    {selectedCreditCF || "C & F Code"}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    C & F Description
                  </label>
                  <select
                    className="w-full bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={selectedCreditCF}
                    onChange={(e) => setSelectedCreditCF(e.target.value)}
                  >
                    <option value="">Select C & F...</option>
                    {cfOptions.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.code} - {option.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden sm:block">
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2">
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    C & F Code
                  </label>
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    C & F Description
                  </label>
                </div>
                <div className="flex flex-row gap-3 sm:gap-4 items-center">
                  <div className="bg-gray-200 text-gray-700 rounded-xl p-3 sm:min-w-35 font-medium flex items-center">
                    {selectedCreditCF || "C & F"}
                  </div>
                  <select
                    className="w-full flex-1 bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={selectedCreditCF}
                    onChange={(e) => setSelectedCreditCF(e.target.value)}
                  >
                    <option value="">Select C & F...</option>
                    {cfOptions.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.code} - {option.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Narration Details Section */}
        <div className="p-6 sm:px-4 md:px-6 py-1">
          <div className="bg-white rounded-lg p-3 sm:p-6 md:p-8">
            <h2 className="text-lg sm:text-xl font-medium text-gray-800 mb-4 sm:mb-6">
              Narration Details
            </h2>
            <div className="h-px bg-gray-200 mb-6 sm:mb-8"></div>

            {/* Payment Option */}
            <div className="mb-4 sm:mb-6">
              {/* Mobile Layout */}
              <div className="block sm:hidden">
                <div className="mb-3">
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Payment Option Code
                  </label>
                  <div className="bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center">
                    {selectedPaymentOption || "Payment Option"}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2 text-sm">
                    Payment Option Description
                  </label>
                  <select
                    className="w-full bg-white text-gray-700 rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={selectedPaymentOption}
                    onChange={(e) => setSelectedPaymentOption(e.target.value)}
                  >
                    <option value="">Select...</option>
                    {paymentOptions.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.code} - {option.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden sm:block">
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2">
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    Payment Option Code
                  </label>
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    Payment Option Description
                  </label>
                </div>
                <div className="flex flex-row gap-3 sm:gap-4 items-center">
                  <div className="bg-gray-200 text-gray-700 rounded-xl p-3 sm:min-w-35 font-medium flex items-center">
                    {selectedPaymentOption || "Payment Option"}
                  </div>
                  <select
                    className="w-full flex-1 bg-white text-gray-700 rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={selectedPaymentOption}
                    onChange={(e) => setSelectedPaymentOption(e.target.value)}
                  >
                    <option value="">Select...</option>
                    {paymentOptions.map((option) => (
                      <option key={option.code} value={option.code}>
                        {option.code} - {option.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Narration Detail Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
              {narrationDetails.map((detail, i) => (
                <div key={i}>
                  <label className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                    Detail {i + 1}
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-black text-sm sm:text-base"
                    value={detail}
                    onChange={(e) =>
                      handleNarrationDetailChange(i, e.target.value)
                    }
                    placeholder="NA"
                  />
                </div>
              ))}
            </div>

            {/* Responsible Person */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <div>
                <label className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                  Responsible Person
                </label>
                <input
                  type="text"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm sm:text-base"
                  value={responsiblePerson}
                  onChange={(e) => setResponsiblePerson(e.target.value)}
                />
              </div>
              <div className="flex items-end">
                <span className="text-gray-700 font-medium text-sm sm:text-base">
                  SYSTEM ADMINISTRATOR
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4">
              <button
                onClick={handleSave}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#292F4E] text-white rounded-lg font-medium transform transition-all duration-300 hover:scale-105 text-sm sm:text-base"
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                SAVE
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#292F4E] text-white rounded-lg font-medium transform transition-all duration-300 hover:scale-105 text-sm sm:text-base"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                CANCEL
              </button>
              <button
                onClick={handleClose}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#292F4E] text-white rounded-lg font-medium transform transition-all duration-300 hover:scale-105 text-sm sm:text-base"
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
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
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
