"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Ban, Pencil, Save, Trash2, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const Checkbox = ({ id, label, checked, onChange }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
      />
      <label htmlFor={id} className="text-sm text-gray-700 font-medium">
        {label}
      </label>
    </div>
  );
};
const RadioButton = ({ id, name, label, value, checked, onChange }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
      />
      <label htmlFor={id} className="text-sm text-gray-700 font-medium">
        {label}
      </label>
    </div>
  );
};

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
    cashvoucher: "Cash Voucher Entry",
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
  const [formData, setFormData] = useState({
    acCode: "",
    acHead: "",
    amount: "",
    refDate: "",
    refNo: "",
  });

  const [entries, setEntries] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddOrUpdate = () => {
    if (!formData.acCode || !formData.acHead || !formData.amount) return;

    if (editIndex !== null) {
      // Update
      const updated = [...entries];
      updated[editIndex] = formData;
      setEntries(updated);
      setEditIndex(null);
    } else {
      // Add
      setEntries((prev) => [...prev, formData]);
    }

    setFormData({ acCode: "", acHead: "", amount: "", refDate: "", refNo: "" });
  };

  const handleEdit = (index) => {
    setFormData(entries[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = [...entries];
    updated.splice(index, 1);
    setEntries(updated);
    if (editIndex === index) {
      setFormData({
        acCode: "",
        acHead: "",
        amount: "",
        refDate: "",
        refNo: "",
      });
      setEditIndex(null);
    }
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
                CASH VOUCHER ENTRY
              </h1>
            </div>
          </div>
          <div className="bg-white p-4 rounded-3xl">
            <Accordion
              type="multiple"
              // collapsible
              className="w-full"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>General</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <div className="px-1">
                    {/* Top Controls Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 sm:mb-6">
                      {/* TRAN. TYPE */}
                      <div>
                        <label className="block text-gray-700 font-medium mb-2 text-sm">
                          TRANSACTION TYPE
                        </label>
                        <select
                          className="w-full custom-input"
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

                      {/* SR NO */}
                      <div>
                        <label className="block text-gray-700 font-medium mb-2 text-sm">
                          SR NO.
                        </label>
                        <input
                          type="text"
                          className="w-full custom-input"
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
                          className="w-full custom-input"
                          value={voucherNo}
                          onChange={(e) => setVoucherNo(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Second Row Controls */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 mb-4 sm:mb-6 ">
                      {/* VOUCHER DATE */}
                      <div className="mb-2 sm:mb-0">
                        <label className="block text-gray-700 font-medium mb-2 text-sm">
                          VOUCHER DATE
                        </label>
                        <input
                          type="date"
                          className="w-full custom-input"
                          value={vtDt}
                          onChange={(e) => setVtDt(e.target.value)}
                        />
                      </div>

                      {/* VOUCHER TYPE */}
                      <div className="col-span-2">
                        <label className="block text-gray-700 font-medium mb-2 text-sm">
                          VOUCHER TYPE
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            className="w-[20%] custom-input"
                            value={voucherType}
                            onChange={(e) => setVoucherType(e.target.value)}
                          />
                          <input
                            type="text"
                            className="w-[80%] custom-input"
                            value={cashVoucher}
                            onChange={(e) => setCashVoucher(e.target.value)}
                          />{" "}
                        </div>
                      </div>

                      {/* CASH VOUCHER */}
                    </div>
                    {/* Narration Code Section */}
                    <div className="mb-4 sm:mb-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2 text-sm">
                            NARRATION CODE
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
                        <div className="flex flex-col justify-end ">
                          <Checkbox
                            id="printMemo"
                            label="PRINT MEMO"
                            checked={printMemo}
                            onChange={(e) => setPrintMemo(e.target.checked)}
                          />{" "}
                        </div>
                      </div>
                    </div>

                    {/* Vide Options */}
                    <label className="block border-t-2 pt-2  text-gray-700 font-medium mb-3 text-sm">
                      VIDE
                    </label>
                    <div className="mb-4 bg-blue-50 sm:mb-6 flex flex-col gap-4 border p-3 rounded-xl">
                      <div className="flex gap-2">
                        {/* NO */}
                        <div className="flex-1">
                          <label className="block text-gray-700 font-medium mb-2 text-sm">
                            NO
                          </label>
                          <input
                            type="text"
                            className="w-full custom-input"
                            value={noField}
                            onChange={(e) => setNoField(e.target.value)}
                          />
                        </div>

                        {/* DATE */}
                        <div className="flex-1">
                          <label className="block text-gray-700 font-medium mb-2 text-sm">
                            DATE
                          </label>
                          <input
                            type="date"
                            className="w-full custom-input"
                            value={dateField}
                            onChange={(e) => setDateField(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <RadioButton
                          id="advice"
                          name="videOptions"
                          label="ADVICE"
                          value="advice"
                          checked={vide === "advice"}
                          onChange={(e) => setVide(e.target.value)}
                        />
                        <RadioButton
                          id="challan"
                          name="videOptions"
                          label="CHALLAN"
                          value="challan"
                          checked={vide === "challan"}
                          onChange={(e) => setVide(e.target.value)}
                        />
                        <RadioButton
                          id="invoice"
                          name="videOptions"
                          label="INVOICE"
                          value="invoice"
                          checked={vide === "invoice"}
                          onChange={(e) => setVide(e.target.value)}
                        />
                        <RadioButton
                          id="voucher"
                          name="videOptions"
                          label="VOUCHER"
                          value="voucher"
                          checked={vide === "voucher"}
                          onChange={(e) => setVide(e.target.value)}
                        />
                        <RadioButton
                          id="neField"
                          name="videOptions"
                          label="NE"
                          value="ne"
                          checked={vide === "ne"}
                          onChange={(e) => setVide(e.target.value)}
                        />
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
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                        <span className="text-sm font-medium text-gray-700">
                          FOR DEBIT
                        </span>
                        {/* Ledger, Profit & Loss, Balance Sheet, Cash Flow fields */}
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-600">
  {/* Item */}
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
    <span className="whitespace-nowrap">LEDGER</span>
    <input
      type="text"
      className="w-full sm:flex-1 px-2 py-1 border border-gray-300 rounded-sm text-black text-xs"
      placeholder="0"
      value={debitLedger}
      readOnly
    />
  </div>

  {/* Item */}
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
    <span className="whitespace-nowrap">PROFIT & LOSS</span>
    <input
      type="text"
      className="w-full sm:flex-1 px-2 py-1 border border-gray-300 rounded-sm text-black text-xs"
      placeholder="0"
      value={debitProfitLoss}
      readOnly
    />
  </div>

  {/* Item */}
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
    <span className="whitespace-nowrap">BALANCE SHEET</span>
    <input
      type="text"
      className="w-full sm:flex-1 px-2 py-1 border border-gray-300 rounded-sm text-black text-xs"
      placeholder="0"
      value={debitBalanceSheet}
      readOnly
    />
  </div>

  {/* Item */}
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
    <span className="whitespace-nowrap">CASH FLOW</span>
    <input
      type="text"
      className="w-full sm:flex-1 px-2 py-1 border border-gray-300 rounded-sm text-black text-xs"
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

                    <div className="space-y-6">
                      {/* Form Section */}

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border bg-blue-50 px-2 py-3 rounded-2xl">
                        <input
                          className="custom-input"
                          name="acCode"
                          placeholder="A/C CODE"
                          value={formData.acCode}
                          onChange={handleChange}
                        />
                        <input
                          className="custom-input"
                          name="acHead"
                          placeholder="A/C HEAD"
                          value={formData.acHead}
                          onChange={handleChange}
                        />
                        <input
                          className="custom-input"
                          name="amount"
                          type="text"
                          placeholder="AMOUNT"
                          value={formData.amount}
                          onChange={handleChange}
                        />
                        <input
                          className="w-full custom-input"
                          name="refDate"
                          type="date"
                          placeholder="REF. DATE"
                          value={formData.refDate}
                          onChange={handleChange}
                        />
                        <input
                          className="custom-input"
                          name="refNo"
                          placeholder="REF. NO."
                          value={formData.refNo}
                          onChange={handleChange}
                        />
                        <Button
                          className="sm:col-span-1 mt-auto max-w-[100px]"
                          onClick={handleAddOrUpdate}
                        >
                          {editIndex !== null ? "Update" : "Add Entry"}
                        </Button>
                      </div>

                      {/* Table Section */}
                      <Table className="border ">
                        <TableHeader>
                          <TableRow>
                            <TableHead>SN</TableHead>
                            <TableHead>A/C CODE</TableHead>
                            <TableHead>A/C HEAD</TableHead>
                            <TableHead>AMOUNT</TableHead>
                            <TableHead>REF. DATE</TableHead>
                            <TableHead>REF. NO.</TableHead>
                            <TableHead>ACTION</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {entries.map((entry, index) => (
                            <TableRow key={index}>
                              <TableCell>{index + 1}</TableCell>
                              <TableCell>{entry.acCode}</TableCell>
                              <TableCell>{entry.acHead}</TableCell>
                              <TableCell>{entry.amount}</TableCell>
                              <TableCell>{entry.refDate}</TableCell>
                              <TableCell>{entry.refNo}</TableCell>
                              <TableCell className="flex gap-2">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  onClick={() => handleEdit(index)}
                                >
                                  <Pencil />
                                </Button>

                                <Button
                                  variant="destructive"
                                  size="icon"
                                  onClick={() => handleDelete(index)}
                                >
                                  <Trash2 />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>

                    {/* Debit Total */}
                    <div className="flex justify-end mt-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-700">
                          DEBIT TOTAL
                        </span>
                        <input
                          type="text"
                          className="w-24 custom-input"
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
                          className="w-24 custom-input"
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
                          className="w-full h-20 custom-input resize-none"
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
                            className="w-full custom-input"
                            value={cashInHand}
                            onChange={(e) => setCashInHand(e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2 text-sm">
                            ENCLOSURES :
                          </label>
                          <textarea
                            className="w-full h-16 custom-input resize-none"
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

export default page;
