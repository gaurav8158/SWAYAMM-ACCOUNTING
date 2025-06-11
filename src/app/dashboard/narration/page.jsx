"use client";
import React, { useState } from "react";
import { Save, Ban } from "lucide-react";
import Navbar from "@/components/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Cardheader from "@/components/dashboard/Cardheader";
import DatePicker from "react-datepicker";

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
        <select
          className="bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center sm:min-w-[140px] lg:min-w-[160px]"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.code} value={option.description}>
              {option.code}
            </option>
          ))}
        </select>
        <div className="flex-1">
          <div className="w-full bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
            {code || label}
          </div>
        </div>
      </div>
    </div>
  );
};
const EntryField = ({
  label,
  value1,
  onChange1,
  value2,
  onChange2,
  placeholder = "Select...",
}) => {
  return (
    <div className="mb-6">
      {/* Label */}
      <div className="mb-3">
        <label className="text-gray-700 font-medium text-sm lg:text-base block">
          {label}
        </label>
      </div>

      {/* Inputs */}
      <div className="flex flex-row gap-3">
        <input
          className="custom-input w-[20%]"
          value={value1}
          onChange={(e) => onChange1(e.target.value)}
        />

        <input
          className="custom-input w-[80%]"
          value={value2}
          onChange={(e) => onChange2(e.target.value)}
        />
      </div>
    </div>
  );
};
// Main Page Component
const Page = () => {
  const [selectedNarration, setSelectedNarration] = useState("");
  const [selectedVoucherType, setSelectedVoucherType] = useState("");
  const [selectedTranType, setSelectedTranType] = useState("");
  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");
  const [bookValue, setBookValue] = useState("NA");
  const [dateOfOpening, setDateOfOpening] = useState("18-May-25");
  const [responsiblePerson, setResponsiblePerson] = useState("SA");

  // Selected codes for display
  const [selectedDebitDbAccode, setSelectedDebitDbAccode] = useState("");
  const [selectedDebitLedgercode, setSelectedDebitLedgercode] = useState("");
  const [selectedDebitPLcode, setSelectedDebitPLcode] = useState("");
  const [selectedDebitBSHcode, setSelectedDebitBSHcode] = useState("");
  const [selectedDebitCFcode, setSelectedDebitCFcode] = useState("");
  const [selectedDebitDbAc, setSelectedDebitDbAc] = useState("");

  const [selectedDebitLedger, setSelectedDebitLedger] = useState("");

  const [selectedDebitPL, setSelectedDebitPL] = useState("");

  const [selectedDebitBSH, setSelectedDebitBSH] = useState("");
  const [selectedDebitCF, setSelectedDebitCF] = useState("");

  const [selectedCreditCrAccode, setSelectedCreditCrAccode] = useState("");
  const [selectedCreditLedgercode, setSelectedCreditLedgercode] = useState("");
  const [selectedCreditPLcode, setSelectedCreditPLcode] = useState("");
  const [selectedCreditBSHcode, setSelectedCreditBSHcode] = useState("");
  const [selectedCreditCFcode, setSelectedCreditCFcode] = useState("");
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

  return (
    <div className="h-screen overflow-y-auto bg-[#EEEEF1] ">
      <div className={`transition-all  duration-300 ease-in-out `}>
        <Navbar pageTitle={pageTitles.narration} menu="Transaction Entry" />
        {/* Main Content Container */}
        <div className="p-6 sm:px-4 md:px-6 py-1">
          <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 md:p-6">
            {/* Company Header */}
            <Cardheader
              title1="DSM SUGAR RAJPURA"
              title2="BUDAUN"
              head="NARRATION"
            />

            <div>
              <Accordion
                type="multiple"
                // collapsible
                className="w-full"
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
                      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 lg:gap-6">
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

                          <DatePicker
                            className="custom-input w-full"
                            selected={dateOfOpening}
                            onChange={(date) => setDateOfOpening(date)}
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
                      <div className="h-px bg-gray-200 mb-8"></div>

                      <EntryField
                        label="DB A/C"
                        value1={selectedDebitDbAccode}
                        value2={selectedDebitDbAc}
                        onChange1={setSelectedDebitDbAccode}
                        onChange2={setSelectedDebitDbAc}
                        placeholder="Select DB A/C..."
                      />

                      <EntryField
                        label="Ledger"
                        value1={selectedDebitLedgercode}
                        onChange1={setSelectedDebitLedgercode}
                        value2={selectedDebitLedger}
                        onChange2={setSelectedDebitLedger}
                        placeholder="Select Ledger..."
                      />

                      <EntryField
                        label="P & L"
                        value1={selectedDebitPLcode}
                        onChange1={setSelectedDebitPLcode}
                        value2={selectedDebitPL}
                        onChange2={setSelectedDebitPL}
                        placeholder="Select P&L Account..."
                      />

                      <EntryField
                        label="B.SH."
                        value1={selectedDebitBSHcode}
                        onChange1={setSelectedDebitBSHcode}
                        value2={selectedDebitBSH}
                        onChange2={setSelectedDebitBSH}
                        placeholder="Select Balance Sheet Account..."
                      />

                      <EntryField
                        label="C & F"
                        value1={selectedDebitCFcode}
                        onChange1={setSelectedDebitCFcode}
                        value2={selectedDebitCF}
                        onChange2={setSelectedDebitCF}
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
                      <div className="h-px bg-gray-200 mb-8"></div>
                      <EntryField
                        label="CR A/C"
                        value1={selectedCreditCrAccode}
                        value2={selectedCreditCrAc}
                        onChange1={setSelectedCreditCrAccode}
                        onChange2={setSelectedCreditCrAc}
                        placeholder="Select CR A/C..."
                      />

                      <EntryField
                        label="Ledger"
                        value1={selectedCreditLedgercode}
                        onChange1={setSelectedCreditLedgercode}
                        value2={selectedCreditLedger}
                        onChange2={setSelectedCreditLedger}
                        placeholder="Select Ledger..."
                      />

                      <EntryField
                        label="P & L"
                        value1={selectedCreditPLcode}
                        onChange1={setSelectedCreditPLcode}
                        value2={selectedCreditPL}
                        onChange2={setSelectedCreditPL}
                        placeholder="Select P&L Account..."
                      />

                      <EntryField
                        label="B.SH."
                        value1={selectedCreditBSHcode}
                        onChange1={setSelectedCreditBSHcode}
                        value2={selectedCreditBSH}
                        onChange2={setSelectedCreditBSH}
                        placeholder="Select Balance Sheet Account..."
                      />

                      <EntryField
                        label="C & F"
                        value1={selectedCreditCFcode}
                        onChange1={setSelectedCreditCFcode}
                        value2={selectedCreditCF}
                        onChange2={setSelectedCreditCF}
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
                            onChange={(e) =>
                              setResponsiblePerson(e.target.value)
                            }
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
          </div>
          {/* Action Buttons */}
          <div className="flex my-5  justify-center gap-2 sm:gap-4 w-full">
            <Button
              onClick={handleSave}
              size="lg"
              variant="secondary"
              className="flex-none sm:h-10 flex-row w-auto bg-green-500 hover:bg-green-600 text-white"
            >
              <Save className="text-xl" />
              <span className="block">SAVE</span>
            </Button>

            <Button
              onClick={handleCancel}
              size="lg"
              variant="destructive"
              className="flex-none sm:h-10 flex-row w-auto"
            >
              <Ban className="text-xl" />
              <span className="block">CANCEL</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
