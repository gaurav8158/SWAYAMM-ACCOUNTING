"use client";
import React, { useState } from "react";
import {
  Bell,
  Settings,
  Home,
  ChevronRight,
  User,
  Menu,
  Clock,
  MessageCircle,
  Music,
  CreditCard,
  Search,
  Plus,
  X,
  Save,
  Ban,
  CircleX,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

// Responsive Select Field Component
const SelectField = ({
  label,
  code,
  options,
  value,
  onChange,
  placeholder = "Select...",
}) => {
  return (
    <div className="mb-6">
      {/* Labels - Stack on mobile, side by side on desktop */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2 mb-3">
        <label className="text-gray-700 font-medium text-sm lg:text-base">
          {label}
        </label>
      </div>

      {/* Input and Select - Stack on mobile, side by side on desktop */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center sm:min-w-[140px] lg:min-w-[160px]">
          {code || label}
        </div>
        <div className="flex-1">
          <label className="block text-gray-700 font-medium mb-2 text-sm sm:hidden">
            {label} Description
          </label>
          <select
            className="w-full bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          >
            <option value="">{placeholder}</option>
            {options.map((option) => (
              <option key={option.code} value={option.code}>
                {option.code} - {option.description}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

// Main Page Component
const Page = ({ isCollapsed, activeItem, toggleMobileSidebar }) => {
  const [selectedNarration, setSelectedNarration] = useState("");
  const [selectedVoucherType, setSelectedVoucherType] = useState("");
  const [selectedTranType, setSelectedTranType] = useState("");
  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");
  const [bookValue, setBookValue] = useState("NA");
  const [dateOfOpening, setDateOfOpening] = useState("18-May-25");
  const [responsiblePerson, setResponsiblePerson] = useState("SA");

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
      <div className={`transition-all  duration-300 ease-in-out bg-[#EEEEF1]`}>
        <Navbar pageTitle={pageTitles.narration} />
        <div className="p-6 sm:px-4 md:px-6 py-4">
          {/* Header Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4  mb-6">
            {/* Company Header */}

            <div className="text-center ">
              <div className="flex flex-row gap-2 sm:gap-3 justify-center items-center text-lg font-medium text-gray-800">
                <h2 className="underline">DSM SUGAR RAJPURA</h2>
                <h3 className="underline">BUDAUN</h3>
              </div>
              <h1 className="text-xl lg:text-2xl font-bold text-gray-800">
                NARRATION
              </h1>
            </div>
          </div>

          <div className="bg-white p-4 rounded-3xl">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>General</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <div className="px-1">
                    <div className="h-px bg-gray-200 mb-6"></div>

                    {/* Narration Control */}
                    <SelectField
                      label="Narration"
                      code={selectedNarration}
                      options={narrationOptions}
                      value={selectedNarration}
                      onChange={setSelectedNarration}
                    />
                    <SelectField
                      label="Transaction Type"
                      code={selectedTranType}
                      options={tranTypeOptions}
                      value={selectedTranType}
                      onChange={setSelectedTranType}
                    />
                    <SelectField
                      label="Voucher Type"
                      code={selectedVoucherType}
                      options={voucherOptions}
                      value={selectedVoucherType}
                      onChange={setSelectedVoucherType}
                    />
                    {/* Additional Controls Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-3 text-sm lg:text-base">
                          Book
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black transition-all duration-200"
                          value={bookValue}
                          onChange={(e) => setBookValue(e.target.value)}
                        />
                      </div>

                      <div className="md:col-span-2 xl:col-span-1">
                        <label className="block text-gray-700 font-medium mb-3 text-sm lg:text-base">
                          Date of Opening
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black transition-all duration-200"
                          value={dateOfOpening}
                          onChange={(e) => setDateOfOpening(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Debit Entries</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  {/* Debit Entries Section */}
                  <div className="px-1">
                    <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-6">
                      Debit Entries
                    </h2>
                    <div className="h-px bg-gray-200 mb-8"></div>

                    <SelectField
                      label="DB A/C"
                      code={selectedDebitDbAc}
                      options={dbAcOptions}
                      value={selectedDebitDbAc}
                      onChange={setSelectedDebitDbAc}
                      placeholder="Select DB A/C..."
                    />

                    <SelectField
                      label="Ledger"
                      code={selectedDebitLedger}
                      options={ledgerOptions}
                      value={selectedDebitLedger}
                      onChange={setSelectedDebitLedger}
                      placeholder="Select Ledger..."
                    />

                    <SelectField
                      label="P & L"
                      code={selectedDebitPL}
                      options={plOptions}
                      value={selectedDebitPL}
                      onChange={setSelectedDebitPL}
                      placeholder="Select P&L Account..."
                    />

                    <SelectField
                      label="B.SH."
                      code={selectedDebitBSH}
                      options={bshOptions}
                      value={selectedDebitBSH}
                      onChange={setSelectedDebitBSH}
                      placeholder="Select Balance Sheet Account..."
                    />

                    <SelectField
                      label="C & F"
                      code={selectedDebitCF}
                      options={cfOptions}
                      value={selectedDebitCF}
                      onChange={setSelectedDebitCF}
                      placeholder="Select C & F..."
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Credit Entries</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  {/* Credit Entries Section */}
                  <div className="px-1">
                    <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-6">
                      Credit Entries
                    </h2>
                    <div className="h-px bg-gray-200 mb-8"></div>

                    <SelectField
                      label="CR A/C"
                      code={selectedCreditCrAc}
                      options={crAcOptions}
                      value={selectedCreditCrAc}
                      onChange={setSelectedCreditCrAc}
                      placeholder="Select CR A/C..."
                    />

                    <SelectField
                      label="Ledger"
                      code={selectedCreditLedger}
                      options={ledgerOptions}
                      value={selectedCreditLedger}
                      onChange={setSelectedCreditLedger}
                      placeholder="Select Ledger..."
                    />

                    <SelectField
                      label="P & L"
                      code={selectedCreditPL}
                      options={plOptions}
                      value={selectedCreditPL}
                      onChange={setSelectedCreditPL}
                      placeholder="Select P&L Account..."
                    />

                    <SelectField
                      label="B.SH."
                      code={selectedCreditBSH}
                      options={bshOptions}
                      value={selectedCreditBSH}
                      onChange={setSelectedCreditBSH}
                      placeholder="Select Balance Sheet Account..."
                    />

                    <SelectField
                      label="C & F"
                      code={selectedCreditCF}
                      options={cfOptions}
                      value={selectedCreditCF}
                      onChange={setSelectedCreditCF}
                      placeholder="Select C & F..."
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger> Narration Details</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  {/* Narration Details Section */}
                  <div className="px-1">
                    <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-6">
                      Narration Details
                    </h2>
                    <div className="h-px bg-gray-200 mb-8"></div>

                    <SelectField
                      label="Payment Option"
                      code={selectedPaymentOption}
                      options={paymentOptions}
                      value={selectedPaymentOption}
                      onChange={setSelectedPaymentOption}
                    />

                    {/* Narration Detail Fields */}
                    <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 mb-8">
                      {narrationDetails.map((detail, i) => (
                        <div key={i}>
                          <label className="block text-gray-700 font-medium mb-3 text-sm lg:text-base">
                            Detail {i + 1}
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-black transition-all duration-200"
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
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 mb-12">
                      <div>
                        <label className="block text-gray-700 font-medium mb-3 text-sm lg:text-base">
                          Responsible Person
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black transition-all duration-200"
                          value={responsiblePerson}
                          onChange={(e) => setResponsiblePerson(e.target.value)}
                        />
                      </div>
                      <div className="flex items-end">
                        <span className="text-gray-700 font-medium text-sm lg:text-base">
                          SYSTEM ADMINISTRATOR
                        </span>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Action Buttons */}
          <div className="flex my-5  justify-between sm:justify-center gap-2 sm:gap-4 w-full">
            <Button
              size="lg"
              variant="outline"
              onClick={handleSave}
              className="flex-1 sm:flex-none h-16 sm:h-10 flex-col sm:flex-row w-full sm:w-auto text-blue-600 border-blue-600 hover:bg-blue-50"
            >
              <Save className="text-xl" />
              <span className="block">SAVE</span>
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
  );
};

export default Page;
