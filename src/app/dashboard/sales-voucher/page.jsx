"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Ban, Save, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const page = () => {
  // Header fields
  const [tranType, setTranType] = useState("JV");
  const [cashPayment, setCashPayment] = useState("CASH PAYMENT");
  const [srNo, setSrNo] = useState("9384");
  const [voucherNo, setVoucherNo] = useState("1585");
  const [narrationCode, setNarrationCode] = useState("");
  const [vtDt, setVtDt] = useState("17-Mar-25");
  const [voucherType, setVoucherType] = useState("C");
  const [cashVoucher, setCashVoucher] = useState("CASH VOUCHER");
  const [noField, setNoField] = useState("");
  const [dateField, setDateField] = useState("");
  const [neField, setNeField] = useState("");

  // Print options
  const [printMemo, setPrintMemo] = useState(true);
  const [vide, setVide] = useState(false);
  const [advice, setAdvice] = useState(false);
  const [challan, setChallan] = useState(false);
  const [invoice, setInvoice] = useState(false);
  const [voucher, setVoucher] = useState(false);

  // Debit entries
  const [debitUniversalCode, setDebitUniversalCode] = useState("");
  const [debitAcCode, setDebitAcCode] = useState("");
  const [debitAcHead, setDebitAcHead] = useState("");
  const [debitAmount, setDebitAmount] = useState("");
  const [debitRefDt, setDebitRefDt] = useState("");
  const [debitRefNo, setDebitRefNo] = useState("");
  const [debitTotal, setDebitTotal] = useState("");
  const [debitLedger, setDebitLedger] = useState("");
  const [debitProfitLoss, setDebitProfitLoss] = useState("");
  const [debitBalanceSheet, setDebitBalanceSheet] = useState("");
  const [debitCashFlow, setDebitCashFlow] = useState("");

  // Credit entries
  const [creditUniversalCode, setCreditUniversalCode] = useState("");
  const [creditAcCode, setCreditAcCode] = useState("");
  const [creditAcHead, setCreditAcHead] = useState("");
  const [creditAmount, setCreditAmount] = useState("");
  const [creditRefDt, setCreditRefDt] = useState("");
  const [creditRefNo, setCreditRefNo] = useState("");
  const [creditTotal, setCreditTotal] = useState("");
  const [creditLedger, setCreditLedger] = useState("");
  const [creditProfitLoss, setCreditProfitLoss] = useState("");
  const [creditBalanceSheet, setCreditBalanceSheet] = useState("");
  const [creditCashFlow, setCreditCashFlow] = useState("");

  // Bottom fields
  const [narration, setNarration] = useState("CASH");
  const [cashInHand, setCashInHand] = useState("0");
  const [enclosures, setEnclosures] = useState("");

  const pageTitles = {
    dashboard: "Dashboard",
    account: "Account Management",
    ledger: "Financial Ledger",
    cashvoucher: "Journal/Sales/Purchase Voucher Entry",
  };

  // Dropdown options
  const tranTypeOptions = [
    { code: "JV", description: "Journal Voucher" },
    { code: "PV", description: "Payment Voucher" },
    { code: "RV", description: "Receipt Voucher" },
    { code: "CV", description: "Contra Voucher" },
  ];

  const narrationOptions = [
    { code: "N1", description: "Cash Payment" },
    { code: "N2", description: "Bank Transfer" },
    { code: "N3", description: "Expense Payment" },
    { code: "N4", description: "Revenue Receipt" },
  ];

  const handlePrompt = () => {
    console.log("Prompt clicked");
  };

  const handleSave = () => {
    console.log("Saving cash voucher...");
  };

  const handleCancel = () => {
    console.log("Cancelling...");
  };

  const handleClose = () => {
    console.log("Closing...");
  };

  const handleDebitAcHeadChange = (e) => {
    const newAcHead = e.target.value;
    setDebitAcHead(newAcHead);
    // TODO: Add logic here to fetch or calculate data based on newAcHead
    // and update debitLedger, debitProfitLoss, debitBalanceSheet, debitCashFlow
    // Example: fetchBalanceData(newAcHead).then(data => { setDebitLedger(data.ledger); ... });
  };

  const handleCreditAcHeadChange = (e) => {
    const newAcHead = e.target.value;
    setCreditAcHead(newAcHead);
    // TODO: Add logic here to fetch or calculate data based on newAcHead
    // and update creditLedger, creditProfitLoss, creditBalanceSheet, creditCashFlow
    // Example: fetchBalanceData(newAcHead).then(data => { setCreditLedger(data.ledger); ... });
  };

  return (
    <div className="h-screen overflow-y-auto ">
      <div className="transition-all  duration-300 ease-in-out bg-[#EEEEF1]">
        <Navbar pageTitle={pageTitles.cashvoucher} />

        {/* Main Content Container */}
        <div className=" p-6 sm:p-4 md:p-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4  mb-6">
            {/* Company Header */}
            <div className="text-center ">
              <div className="flex flex-row gap-2 sm:gap-3 justify-center items-center text-lg font-medium text-gray-800">
                <h2 className="underline">DSM SUGAR RAJPURA</h2>
                <h3 className="underline">BUDAUN</h3>
              </div>
              <h1 className="text-xl lg:text-2xl font-bold text-gray-800">
                Journal/Sales/Purchase VOUCHER ENTRY
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
                    {/* Top Controls Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 sm:mb-6">
                      {/* TRAN. TYPE */}
                      <div>
                        <label className="block text-gray-700 font-medium mb-2 text-sm">
                          TRAN. TYPE
                        </label>
                        <select
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                          value={tranType}
                          onChange={(e) => setTranType(e.target.value)}
                        >
                          {tranTypeOptions.map((option) => (
                            <option key={option.code} value={option.code}>
                              {option.code}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* CASH PAYMENT */}
                      <div>
                        <label className="block text-gray-700 font-medium mb-2 text-sm">
                          CASH PAYMENT
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                          value={cashPayment}
                          onChange={(e) => setCashPayment(e.target.value)}
                        />
                      </div>

                      {/* SR NO */}
                      <div>
                        <label className="block text-gray-700 font-medium mb-2 text-sm">
                          SR NO.
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                          value={srNo}
                          onChange={(e) => setSrNo(e.target.value)}
                        />
                      </div>

                      {/* VOUCHER NO */}
                      <div>
                        <label className="block text-gray-700 font-medium mb-2 text-sm">
                          VOUCHER NO.
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                          value={voucherNo}
                          onChange={(e) => setVoucherNo(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Narration Code Section */}
                    <div className="mb-4 sm:mb-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2 text-sm">
                            Narration Code
                          </label>
                          <div className="bg-gray-100 text-gray-700 rounded-lg p-3 font-medium">
                            {narrationCode || "Narration"}
                          </div>
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2 text-sm">
                            Narration Description
                          </label>
                          <div className="flex gap-2">
                            <select
                              className="flex-1 bg-white text-gray-700 rounded-lg border border-gray-300 p-2 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300"
                              value={narrationCode}
                              onChange={(e) => setNarrationCode(e.target.value)}
                            >
                              <option value="">Select...</option>
                              {narrationOptions.map((option) => (
                                <option key={option.code} value={option.code}>
                                  {option.code} - {option.description}
                                </option>
                              ))}
                            </select>
                            <button
                              onClick={handlePrompt}
                              className="px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg text-black text-sm hover:bg-gray-300"
                            >
                              PROMPT
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Second Row Controls */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-4 sm:mb-6">
                      {/* VT. DT */}
                      <div>
                        <label className="block text-gray-700 font-medium mb-2 text-sm">
                          VT. DT
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                          value={vtDt}
                          onChange={(e) => setVtDt(e.target.value)}
                        />
                      </div>

                      {/* VOUCHER TYPE */}
                      <div>
                        <label className="block text-gray-700 font-medium mb-2 text-sm">
                          VOUCHER TYPE
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                          value={voucherType}
                          onChange={(e) => setVoucherType(e.target.value)}
                        />
                      </div>

                      {/* CASH VOUCHER */}
                      <div>
                        <label className="block text-gray-700 font-medium mb-2 text-sm">
                          CASH VOUCHER
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                          value={cashVoucher}
                          onChange={(e) => setCashVoucher(e.target.value)}
                        />
                      </div>

                      {/* NO */}
                      <div>
                        <label className="block text-gray-700 font-medium mb-2 text-sm">
                          NO
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                          value={noField}
                          onChange={(e) => setNoField(e.target.value)}
                        />
                      </div>

                      {/* DATE */}
                      <div>
                        <label className="block text-gray-700 font-medium mb-2 text-sm">
                          DATE
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                          value={dateField}
                          onChange={(e) => setDateField(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* NE Field */}
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mb-4 sm:mb-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2 text-sm">
                          NE
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                          value={neField}
                          onChange={(e) => setNeField(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Print Options */}
                    <div className="mb-4 sm:mb-6">
                      <label className="block text-gray-700 font-medium mb-3 text-sm">
                        Print Options
                      </label>
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="printMemo"
                            checked={printMemo}
                            onChange={(e) => setPrintMemo(e.target.checked)}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            htmlFor="printMemo"
                            className="text-sm text-gray-700 font-medium"
                          >
                            PRINT MEMO
                          </label>
                        </div>

                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="advice"
                            checked={advice}
                            onChange={(e) => setAdvice(e.target.checked)}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            htmlFor="advice"
                            className="text-sm text-gray-700 font-medium"
                          >
                            ADVICE
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="challan"
                            checked={challan}
                            onChange={(e) => setChallan(e.target.checked)}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            htmlFor="challan"
                            className="text-sm text-gray-700 font-medium"
                          >
                            CHALLAN
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="invoice"
                            checked={invoice}
                            onChange={(e) => setInvoice(e.target.checked)}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            htmlFor="invoice"
                            className="text-sm text-gray-700 font-medium"
                          >
                            INVOICE
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id="voucher"
                            checked={voucher}
                            onChange={(e) => setVoucher(e.target.checked)}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <label
                            htmlFor="voucher"
                            className="text-sm text-gray-700 font-medium"
                          >
                            VOUCHER
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Debit Entries</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  {/* DR (Debit) Section */}
                  <div className="px-1">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                      <h2 className="text-lg font-medium text-gray-800 mb-2 sm:mb-0">
                        DR
                      </h2>
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                        <span className="text-sm font-medium text-gray-700">
                          FOR DEBIT
                        </span>
                        {/* Ledger, Profit & Loss, Balance Sheet, Cash Flow fields */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600">
                          <div className="flex items-start gap-2">
                            <span className="sm:hidden">LEDGER</span>
                            <input
                              type="text"
                              className="flex-grow px-1 py-0.5 border border-gray-300 rounded-sm text-black text-xs"
                              placeholder="0"
                              value={debitLedger}
                              readOnly
                            />
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="sm:hidden">PROFIT & LOSS</span>
                            <input
                              type="text"
                              className="flex-grow px-1 py-0.5 border border-gray-300 rounded-sm text-black text-xs"
                              placeholder="0"
                              value={debitProfitLoss}
                              readOnly
                            />
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="sm:hidden">BALANCE SHEET</span>
                            <input
                              type="text"
                              className="flex-grow px-1 py-0.5 border border-gray-300 rounded-sm text-black text-xs"
                              placeholder="0"
                              value={debitBalanceSheet}
                              readOnly
                            />
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="sm:hidden">CASH FLOW</span>
                            <input
                              type="text"
                              className="flex-grow px-1 py-0.5 border border-gray-300 rounded-sm text-black text-xs"
                              placeholder="0"
                              value={debitCashFlow}
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-px bg-gray-200 mb-4 sm:mb-6"></div>

                    {/* Universal Code */}
                    <div className="mb-4 sm:mb-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2 text-sm">
                            Universal Code
                          </label>
                          <input
                            className="w-full bg-white border border-gray-300 rounded-lg text-black p-2 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium"
                            placeholder="0"
                            value={debitUniversalCode}
                            onChange={(e) =>
                              setDebitUniversalCode(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2 text-sm">
                            Description
                          </label>
                          <input
                            className="w-full bg-gray-100 text-black rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            placeholder="NA"
                            readOnly
                          />
                        </div>
                      </div>
                    </div>

                    {/* Account Entry Headers */}
                    <div className="grid grid-cols-1 sm:grid-cols-9 gap-2 mb-4 text-sm font-medium text-gray-700 border-b pb-2 hidden sm:grid">
                      <div className="sm:col-span-1">S.NO</div>
                      <div className="sm:col-span-2">A/C CODE</div>
                      <div className="sm:col-span-2">A/C HEAD</div>
                      <div className="sm:col-span-1">AMOUNT</div>
                      <div className="sm:col-span-1">REF. DT.</div>
                      <div className="sm:col-span-1">REF. NO.</div>
                      <div className="sm:col-span-1">For FDR CHANGE</div>
                    </div>

                    {/* Account Entries */}
                    <div className="mb-4 sm:mb-6 border-b pb-4">
                      <div className="grid grid-cols-1 sm:grid-cols-9 gap-y-4 sm:gap-4 items-center text-sm">
                        <div className="sm:col-span-1">
                          <label className="block text-gray-700 font-medium mb-1 sm:hidden">
                            S.NO
                          </label>
                          <span className="text-gray-600">1</span>
                        </div>
                        <div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-1">
                          <label className="block text-gray-700 font-medium sm:hidden">
                            A/C CODE
                          </label>
                          <input
                            className="w-full bg-white border border-gray-300 rounded-lg text-black p-2 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium text-sm"
                            placeholder="Enter Code"
                            value={debitAcCode}
                            onChange={(e) => setDebitAcCode(e.target.value)}
                          />
                        </div>
                        <div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-1">
                          <label className="block text-gray-700 font-medium sm:hidden">
                            A/C HEAD
                          </label>
                          <input
                            className="w-full bg-white text-black rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
                            placeholder="Enter Head"
                            value={debitAcHead}
                            onChange={handleDebitAcHeadChange}
                          />
                        </div>
                        <div className="sm:col-span-1 flex flex-col sm:flex-row items-start sm:items-center gap-1">
                          <label className="block text-gray-700 font-medium sm:hidden">
                            AMOUNT
                          </label>
                          <input
                            className="w-full bg-white text-black rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
                            placeholder="Amount"
                            value={debitAmount}
                            onChange={(e) => setDebitAmount(e.target.value)}
                          />
                        </div>
                        <div className="sm:col-span-1 flex flex-col sm:flex-row items-start sm:items-center gap-1">
                          <label className="block text-gray-700 font-medium sm:hidden">
                            REF. DT.
                          </label>
                          <input
                            className="w-full bg-white text-black rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
                            placeholder="Ref. Dt."
                            value={debitRefDt}
                            onChange={(e) => setDebitRefDt(e.target.value)}
                          />
                        </div>
                        <div className="sm:col-span-1 flex flex-col sm:flex-row items-start sm:items-center gap-1">
                          <label className="block text-gray-700 font-medium sm:hidden">
                            REF. NO.
                          </label>
                          <input
                            className="w-full bg-white text-black rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
                            placeholder="Ref. No."
                            value={debitRefNo}
                            onChange={(e) => setDebitRefNo(e.target.value)}
                          />
                        </div>
                        <div className="sm:col-span-1 flex flex-col sm:flex-row items-start sm:items-center gap-1">
                          <label className="block text-gray-700 font-medium mb-1 sm:hidden">
                            For FDR CHANGE
                          </label>
                          <div className="w-full bg-gray-100 border border-gray-300 h-10 rounded-lg"></div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons Row */}
                    <div className="flex justify-center gap-2 mb-4">
                      <button className="px-3 py-1 bg-gray-200 border border-gray-300 rounded text-black text-sm hover:bg-gray-300">
                        +
                      </button>
                      <button className="px-3 py-1 bg-gray-200 border border-gray-300 rounded text-black text-sm hover:bg-gray-300">
                        EDIT
                      </button>
                      <button className="px-3 py-1 bg-gray-200 border border-gray-300 rounded text-black text-sm hover:bg-gray-300">
                        -
                      </button>
                    </div>

                    {/* Debit Total */}
                    <div className="flex justify-end mt-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-700">
                          DEBIT TOTAL
                        </span>
                        <input
                          type="text"
                          className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                          value={debitTotal}
                          onChange={(e) => setDebitTotal(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Credit Entries</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  {/* CR (Credit) Section */}
                  <div className="px-1">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                      <h2 className="text-lg font-medium text-gray-800 mb-2 sm:mb-0">
                        CR
                      </h2>
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                        <span className="text-sm font-medium text-gray-700">
                          FOR CREDIT
                        </span>
                        {/* Ledger, Profit & Loss, Balance Sheet, Cash Flow fields */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600">
                          <div className="flex items-start gap-2">
                            <span className="sm:hidden">LEDGER</span>
                            <input
                              type="text"
                              className="flex-grow px-1 py-0.5 border border-gray-300 rounded-sm text-black text-xs"
                              placeholder="0"
                              value={creditLedger}
                              readOnly
                            />
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="sm:hidden">PROFIT & LOSS</span>
                            <input
                              type="text"
                              className="flex-grow px-1 py-0.5 border border-gray-300 rounded-sm text-black text-xs"
                              placeholder="0"
                              value={creditProfitLoss}
                              readOnly
                            />
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="sm:hidden">BALANCE SHEET</span>
                            <input
                              type="text"
                              className="flex-grow px-1 py-0.5 border border-gray-300 rounded-sm text-black text-xs"
                              placeholder="0"
                              value={creditBalanceSheet}
                              readOnly
                            />
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="sm:hidden">CASH FLOW</span>
                            <input
                              type="text"
                              className="flex-grow px-1 py-0.5 border border-gray-300 rounded-sm text-black text-xs"
                              placeholder="0"
                              value={creditCashFlow}
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-px bg-gray-200 mb-4 sm:mb-6"></div>

                    {/* Universal Code */}
                    <div className="mb-4 sm:mb-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2 text-sm">
                            Universal Code
                          </label>
                          <input
                            className="w-full bg-white border border-gray-300 rounded-lg text-black p-2 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium"
                            placeholder="0"
                            value={creditUniversalCode}
                            onChange={(e) =>
                              setCreditUniversalCode(e.target.value)
                            }
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2 text-sm">
                            Description
                          </label>
                          <input
                            className="w-full bg-gray-100 text-black rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            placeholder="NA"
                            readOnly
                          />
                        </div>
                      </div>
                    </div>

                    {/* Account Entry Headers */}
                    <div className="grid grid-cols-1 sm:grid-cols-9 gap-2 mb-4 text-sm font-medium text-gray-700 border-b pb-2 hidden sm:grid">
                      <div className="sm:col-span-1">S.NO</div>
                      <div className="sm:col-span-2">A/C CODE</div>
                      <div className="sm:col-span-2">A/C HEAD</div>
                      <div className="sm:col-span-1">AMOUNT</div>
                      <div className="sm:col-span-1">REF. DT.</div>
                      <div className="sm:col-span-1">REF. NO.</div>
                      <div className="sm:col-span-1">CHANGE</div>
                    </div>

                    {/* Account Entries */}
                    <div className="mb-4 sm:mb-6 border-b pb-4">
                      <div className="grid grid-cols-1 sm:grid-cols-9 gap-y-4 sm:gap-4 items-center text-sm">
                        <div className="sm:col-span-1">
                          <label className="block text-gray-700 font-medium mb-1 sm:hidden">
                            S.NO
                          </label>
                          <span className="text-sm text-gray-600">1</span>
                        </div>
                        <div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-1">
                          <label className="block text-gray-700 font-medium sm:hidden">
                            A/C CODE
                          </label>
                          <input
                            className="w-full bg-white border border-gray-300 rounded-lg text-black p-2 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium text-sm"
                            placeholder="Enter Code"
                            value={creditAcCode}
                            onChange={(e) => setCreditAcCode(e.target.value)}
                          />
                        </div>
                        <div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-1">
                          <label className="block text-gray-700 font-medium sm:hidden">
                            A/C HEAD
                          </label>
                          <input
                            className="w-full bg-white text-black rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
                            placeholder="Enter Head"
                            value={creditAcHead}
                            onChange={handleCreditAcHeadChange}
                          />
                        </div>
                        <div className="sm:col-span-1 flex flex-col sm:flex-row items-start sm:items-center gap-1">
                          <label className="block text-gray-700 font-medium sm:hidden">
                            AMOUNT
                          </label>
                          <input
                            className="w-full bg-white text-black rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
                            placeholder="Amount"
                            value={creditAmount}
                            onChange={(e) => setCreditAmount(e.target.value)}
                          />
                        </div>
                        <div className="sm:col-span-1 flex flex-col sm:flex-row items-start sm:items-center gap-1">
                          <label className="block text-gray-700 font-medium sm:hidden">
                            REF. DT.
                          </label>
                          <input
                            className="w-full bg-white text-black rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
                            placeholder="Ref. Dt."
                            value={creditRefDt}
                            onChange={(e) => setCreditRefDt(e.target.value)}
                          />
                        </div>
                        <div className="sm:col-span-1 flex flex-col sm:flex-row items-start sm:items-center gap-1">
                          <label className="block text-gray-700 font-medium sm:hidden">
                            REF. NO.
                          </label>
                          <input
                            className="w-full bg-white text-black rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
                            placeholder="Ref. No."
                            value={creditRefNo}
                            onChange={(e) => setCreditRefNo(e.target.value)}
                          />
                        </div>
                        <div className="sm:col-span-1 flex flex-col sm:flex-row items-start sm:items-center gap-1">
                          <label className="block text-gray-700 font-medium mb-1 sm:hidden">
                            CHANGE
                          </label>
                          <div className="w-full bg-gray-100 border border-gray-300 h-10 rounded-lg"></div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons Row */}
                    <div className="flex justify-center gap-2 mb-4">
                      <button className="px-3 py-1 bg-gray-200 border border-gray-300 rounded text-black text-sm hover:bg-gray-300">
                        +
                      </button>
                      <button className="px-3 py-1 bg-gray-200 border border-gray-300 rounded text-black text-sm hover:bg-gray-300">
                        EDIT
                      </button>
                      <button className="px-3 py-1 bg-gray-200 border border-gray-300 rounded text-black text-sm hover:bg-gray-300">
                        -
                      </button>
                    </div>

                    {/* Credit Total */}
                    <div className="flex justify-end mt-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-700">
                          CREDIT TOTAL
                        </span>
                        <input
                          type="text"
                          className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                          value={creditTotal}
                          onChange={(e) => setCreditTotal(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Narration</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  {/* Bottom Section - Narration */}
                  <div className="px-1">
                    <h2 className="text-lg font-medium text-gray-800 mb-4">
                      Narration
                    </h2>
                    <div className="h-px bg-gray-200 mb-4 sm:mb-6"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {/* Left Side - Narration */}
                      <div>
                        <label className="block text-gray-700 font-medium mb-2 text-sm">
                          NARRATION :
                        </label>
                        <div className="bg-gray-100 border border-gray-300 rounded-lg p-2 mb-2 text-sm">
                          <span>CASH</span>
                        </div>
                        <textarea
                          className="w-full h-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm resize-none"
                          value={narration}
                          onChange={(e) => setNarration(e.target.value)}
                        />
                      </div>

                      {/* Right Side - Cash in Hand and Enclosures */}
                      <div className="space-y-4">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2 text-sm">
                            CASH IN HAND:
                          </label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm"
                            value={cashInHand}
                            onChange={(e) => setCashInHand(e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2 text-sm">
                            ENCLOSURES :
                          </label>
                          <textarea
                            className="w-full h-16 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm resize-none"
                            value={enclosures}
                            onChange={(e) => setEnclosures(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className=" flex flex-row mt-3 justify-center sm:justify-end gap-3">
            <button
              onClick={handleSave}
              className="flex flex-col sm:flex-row items-center justify-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-lg font-medium hover:bg-slate-800 transition-all duration-200 transform hover:scale-105"
            >
              <Save className="w-5" />
              SAVE
            </button>
            <button
              onClick={handleCancel}
              className="flex flex-col sm:flex-row items-center justify-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-lg font-medium hover:bg-slate-800 transition-all duration-200 transform hover:scale-105"
            >
              <Ban className="w-5" />
              CANCEL
            </button>
            <button
              onClick={handleClose}
              className="flex flex-col sm:flex-row items-center justify-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-lg font-medium hover:bg-slate-800 transition-all duration-200 transform hover:scale-105"
            >
              <X className="w-5" />
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
