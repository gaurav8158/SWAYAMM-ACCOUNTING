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
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Cardheader from "@/components/dashboard/Cardheader";
import { PromptModal } from "./PromptModal";
import DatePicker from "react-datepicker";
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
  const [tranType, setTranType] = useState("Cash Payment");
  const [trandesc, setTrandesc] = useState("");
  const [srNo, setSrNo] = useState("9384");
  const [voucherNo, setVoucherNo] = useState("1585");
  const [narrationCode, setNarrationCode] = useState("");
  const [vtDt, setVtDt] = useState("17-Mar-25");
  const [voucherType, setVoucherType] = useState("Cash Voucher");

  const [noField, setNoField] = useState("");
  const [dateField, setDateField] = useState(new Date());

  // Print options
  const [printMemo, setPrintMemo] = useState(true);
  const [vide, setVide] = useState(false);

  // Debit entries
  const [debitUniversalCode, setDebitUniversalCode] = useState("BA001");

  const [debitTotal, setDebitTotal] = useState("");
  const [debitLedger, setDebitLedger] = useState("");
  const [debitProfitLoss, setDebitProfitLoss] = useState("");
  const [debitBalanceSheet, setDebitBalanceSheet] = useState("");
  const [debitCashFlow, setDebitCashFlow] = useState("");

  // Credit entries
  const [creditUniversalCode, setCreditUniversalCode] = useState("ZC006");

  const [creditLedger, setCreditLedger] = useState("");
  const [creditProfitLoss, setCreditProfitLoss] = useState("");
  const [creditBalanceSheet, setCreditBalanceSheet] = useState("");
  const [creditCashFlow, setCreditCashFlow] = useState("");

  // Bottom fields
  const [narration, setNarration] = useState("");
  const [cashInHand, setCashInHand] = useState("0");
  const [enclosures, setEnclosures] = useState("");
  const [enclosurescode, setEnclosurescode] = useState("");

  // Dropdown options
  const voucherTypeOptions = [
    { code: "JV", description: "Journal Voucher" },
    { code: "PV", description: "Payment Voucher" },
    { code: "RV", description: "Receipt Voucher" },
    { code: "CV", description: "Cash Voucher" },
  ];
  const tranTypeOptions = [
    { code: "10", description: "Cash Payment" },
    { code: "11", description: "Bank Transfer" },
    { code: "12", description: "Expense Payment" },
    { code: "13", description: "Revenue Receipt" },
  ];
  const narrationOptions = [
    { code: "CON1001", description: "Cash Payment" },
    { code: "CON1002", description: "Bank Transfer" },
    { code: "CON1003", description: "Expense Payment" },
    { code: "CON1004", description: "Revenue Receipt" },
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

  const [formData, setFormData] = useState({
    acCode: "",
    acHead: "",
    amount: "",
    refDate: "",
    refNo: "",
  });
  const [crformData, setCrFormData] = useState({
    acCode: "",
    acHead: "",
    amount: "",
    refDate: "",
    refNo: "",
  });

  const [entries, setEntries] = useState([]);
  const [crentries, setCrEntries] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editCrIndex, setEditCrIndex] = useState(null);
  // for debit
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
  const totalAmountDebit = entries.reduce((total, entry) => {
    const amount = parseFloat(entry.amount) || 0;
    return total + amount;
  }, 0);
  // for credit
  const totalAmountCredit = crentries.reduce((total, entry) => {
    const amount = parseFloat(entry.amount) || 0;
    return total + amount;
  }, 0);
  const handleChangecr = (e) => {
    const { name, value } = e.target;
    setCrFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleEditCr = (index) => {
    setCrFormData(crentries[index]);
    setEditCrIndex(index);
  };
  const handleDeleteCr = (index) => {
    const updated = [...crentries];
    updated.splice(index, 1);
    setCrEntries(updated);
    if (editCrIndex === index) {
      setCrFormData({
        acCode: "",
        acHead: "",
        amount: "",
        refDate: "",
        refNo: "",
      });
      setEditCrIndex(null);
    }
  };
  const handleAddOrUpdateCr = () => {
    if (!crformData.acCode || !crformData.acHead || !crformData.amount) return;

    if (editCrIndex !== null) {
      // Update
      const updated = [...crentries];
      updated[editCrIndex] = crformData;
      setCrEntries(updated);
      setEditCrIndex(null);
    } else {
      // Add
      setCrEntries((prev) => [...prev, crformData]);
    }

    setCrFormData({
      acCode: "",
      acHead: "",
      amount: "",
      refDate: "",
      refNo: "",
    });
  };
  return (
    <div className="h-screen overflow-y-auto bg-[#EEEEF1] ">
      <div className="transition-all  duration-300 ease-in-out ">
        <Navbar pageTitle="Cash Voucher Entry" menu="Transaction Entry" />

        {/* Main Content Container */}
        <div className="p-6 sm:px-4 md:px-6 py-1">
          <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 md:p-6">
            {/* Company Header */}
            <Cardheader
              title1="DSM SUGAR RAJPURA"
              title2="BUDAUN"
              head="CASH VOUCHER ENTRY"
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
                      {/* Top Controls Row */}
                      <div className="h-px bg-gray-200 mb-4 sm:mb-6"></div>
                      <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 mb-4 sm:mb-6">
                        {/* TRAN. TYPE */}
                        <div>
                          <label className="block text-gray-700 font-medium mb-2 text-sm">
                            TRANSACTION TYPE
                          </label>
                          <div className="flex gap-2">
                            {" "}
                            <select
                              className="w-[20%] custom-input"
                              value={tranType}
                              onChange={(e) => setTranType(e.target.value)}
                            >
                              {tranTypeOptions.map((option) => (
                                <option
                                  key={option.code}
                                  value={option.description}
                                >
                                  {option.code}
                                </option>
                              ))}
                            </select>
                            <input
                              disabled
                              value={tranType}
                              type="text"
                              className="w-[80%] custom-input "
                            />
                          </div>
                        </div>
                        <div className="flex flex-row gap-2">
                          {/* SR NO */}
                          <div className="flex-1">
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
                          <div className="flex-1">
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
                      </div>
                      {/* Second Row Controls */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 mb-4 sm:mb-6 ">
                        {/* VOUCHER DATE */}
                        <div className="mb-2 flex flex-col sm:mb-0">
                          <label className="block text-gray-700 font-medium mb-2 text-sm">
                            VOUCHER DATE
                          </label>
                          <DatePicker
                            className="w-full custom-input"
                            selected={vtDt}
                            onChange={(date) => setVtDt(date)}
                          />
                        </div>

                        {/* VOUCHER TYPE */}
                        <div className="col-span-2">
                          <label className="block text-gray-700 font-medium mb-2 text-sm">
                            VOUCHER TYPE
                          </label>
                          <div className="flex gap-2">
                            <select
                              className="w-[20%] custom-input"
                              value={voucherType}
                              onChange={(e) => setVoucherType(e.target.value)}
                            >
                              {voucherTypeOptions.map((option) => (
                                <option
                                  key={option.code}
                                  value={option.description}
                                >
                                  {option.code}
                                </option>
                              ))}
                            </select>
                            <input
                              type="text"
                              className="w-[80%] custom-input"
                              value={voucherType}
                              disabled
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
                                onChange={(e) =>
                                  setNarrationCode(e.target.value)
                                }
                              >
                                <option value="">Select...</option>
                                {narrationOptions.map((option) => (
                                  <option key={option.code} value={option.code}>
                                    {option.code}
                                  </option>
                                ))}
                              </select>

                              <PromptModal />
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
                        <div className="flex gap-2 w-full">
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
                          <div className="flex-1 flex-col">
                            <label className="block text-gray-700 font-medium mb-2 text-sm">
                              DATE
                            </label>
                            <DatePicker
                              className="w-full custom-input"
                              selected={dateField}
                              onChange={(date) => setDateField(date)}
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
                      <div className="h-px bg-gray-200 mb-4 sm:mb-6"></div>
                      {/* Universal Code */}
                      <div className="grid grid-cols-1  gap-2 mb-4 sm:mb-6">
                        <div className="flex flex-col gap-2">
                          <label className="block text-gray-700 font-medium mb-2 text-sm">
                            Universal Code
                          </label>
                          <div className="flex flex-row gap-2">
                            <input
                              className="w-[20%] custom-input"
                              placeholder="0"
                              value={debitUniversalCode}
                              onChange={(e) =>
                                setDebitUniversalCode(e.target.value)
                              }
                            />
                            <input
                              className="w-[80%] custom-input"
                              placeholder="NA"
                              readOnly
                            />{" "}
                          </div>
                        </div>
                        <div className="flex flex-col gap-4 border rounded-2xl p-3 shadow-md">
                          <span className="text-sm pb-2 border-b font-medium text-gray-700">
                            FOR DEBIT
                          </span>

                          {/* Ledger, Profit & Loss, Balance Sheet, Cash Flow fields */}
                          <div className="grid grid-cols-2 gap-4 text-xs text-gray-600">
                            {/* Item */}
                            <div className="flex flex-col  items-start  gap-1 sm:gap-2">
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
                            <div className="flex flex-col  items-start  gap-1 sm:gap-2">
                              <span className="whitespace-nowrap">
                                PROFIT & LOSS
                              </span>
                              <input
                                type="text"
                                className="w-full sm:flex-1 px-2 py-1 border border-gray-300 rounded-sm text-black text-xs"
                                placeholder="0"
                                value={debitProfitLoss}
                                readOnly
                              />
                            </div>

                            {/* Item */}
                            <div className="flex flex-col  items-start  gap-1 sm:gap-2">
                              <span className="whitespace-nowrap">
                                BALANCE SHEET
                              </span>
                              <input
                                type="text"
                                className="w-full sm:flex-1 px-2 py-1 border border-gray-300 rounded-sm text-black text-xs"
                                placeholder="0"
                                value={debitBalanceSheet}
                                readOnly
                              />
                            </div>

                            {/* Item */}
                            <div className="flex flex-col  items-start  gap-1 sm:gap-2">
                              <span className="whitespace-nowrap">
                                CASH FLOW
                              </span>
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
                            className="w-40 custom-input"
                            value={totalAmountDebit.toFixed(2)}
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                {/* credit */}
                <AccordionItem value="item-3">
                  <AccordionTrigger>Credit Entries</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    {/* CR (Credit) Section */}
                    <div className="px-1">
                      <div className="h-px bg-gray-200 mb-4 sm:mb-6"></div>
                      {/* Universal Code */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 sm:mb-6">
                        <div className="flex flex-col gap-2">
                          <label className="block text-gray-700 font-medium mb-2 text-sm">
                            Universal Code
                          </label>
                          <div className="flex flex-row gap-2">
                            <input
                              className="w-[20%] custom-input"
                              placeholder="0"
                              value={creditUniversalCode}
                              onChange={(e) =>
                                setCreditUniversalCode(e.target.value)
                              }
                            />
                            <input
                              className="w-[80%] custom-input"
                              placeholder="NA"
                              readOnly
                            />{" "}
                          </div>
                        </div>
                        <div className="flex flex-col gap-4 border rounded-2xl p-3 shadow-md">
                          <span className="text-sm pb-2 border-b font-medium text-gray-700">
                            FOR CREDIT
                          </span>

                          {/* Ledger, Profit & Loss, Balance Sheet, Cash Flow fields */}
                          <div className="grid grid-cols-2 gap-4 text-xs text-gray-600">
                            {/* Item */}
                            <div className="flex flex-col  items-start  gap-1 sm:gap-2">
                              <span className="whitespace-nowrap">LEDGER</span>
                              <input
                                type="text"
                                className="w-full sm:flex-1 px-2 py-1 border border-gray-300 rounded-sm text-black text-xs"
                                placeholder="0"
                                value={creditLedger}
                                readOnly
                              />
                            </div>

                            {/* Item */}
                            <div className="flex flex-col  items-start  gap-1 sm:gap-2">
                              <span className="whitespace-nowrap">
                                PROFIT & LOSS
                              </span>
                              <input
                                type="text"
                                className="w-full sm:flex-1 px-2 py-1 border border-gray-300 rounded-sm text-black text-xs"
                                placeholder="0"
                                value={creditProfitLoss}
                                readOnly
                              />
                            </div>

                            {/* Item */}
                            <div className="flex flex-col  items-start  gap-1 sm:gap-2">
                              <span className="whitespace-nowrap">
                                BALANCE SHEET
                              </span>
                              <input
                                type="text"
                                className="w-full sm:flex-1 px-2 py-1 border border-gray-300 rounded-sm text-black text-xs"
                                placeholder="0"
                                value={creditBalanceSheet}
                                readOnly
                              />
                            </div>

                            {/* Item */}
                            <div className="flex flex-col  items-start  gap-1 sm:gap-2">
                              <span className="whitespace-nowrap">
                                CASH FLOW
                              </span>
                              <input
                                type="text"
                                className="w-full sm:flex-1 px-2 py-1 border border-gray-300 rounded-sm text-black text-xs"
                                placeholder="0"
                                value={creditCashFlow}
                                readOnly
                              />
                            </div>
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
                            value={crformData.acCode}
                            onChange={handleChangecr}
                          />
                          <input
                            className="custom-input"
                            name="acHead"
                            placeholder="A/C HEAD"
                            value={crformData.acHead}
                            onChange={handleChangecr}
                          />
                          <input
                            className="custom-input"
                            name="amount"
                            type="text"
                            placeholder="AMOUNT"
                            value={crformData.amount}
                            onChange={handleChangecr}
                          />
                          <input
                            className="w-full custom-input"
                            name="refDate"
                            type="date"
                            placeholder="REF. DATE"
                            value={crformData.refDate}
                            onChange={handleChangecr}
                          />
                          <input
                            className="custom-input"
                            name="refNo"
                            placeholder="REF. NO."
                            value={crformData.refNo}
                            onChange={handleChangecr}
                          />
                          <Button
                            className="sm:col-span-1 mt-auto max-w-[100px]"
                            onClick={handleAddOrUpdateCr}
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
                            {crentries.map((entry, index) => (
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
                                    onClick={() => handleEditCr(index)}
                                  >
                                    <Pencil />
                                  </Button>

                                  <Button
                                    variant="destructive"
                                    size="icon"
                                    onClick={() => handleDeleteCr(index)}
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
                            CREDIT TOTAL
                          </span>
                          <input
                            type="text"
                            className="w-40 custom-input"
                            value={totalAmountCredit.toFixed(2)}
                            onChange={(e) => setDebitTotal(e.target.value)}
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
                      <div className="h-px bg-gray-200 mb-4 sm:mb-6"></div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                        {/* Left Side - Narration */}
                        <div>
                          <label className="block text-gray-700 font-medium mb-1 text-sm">
                            NARRATION:
                          </label>
                          <div className="bg-gray-100 border border-gray-300 rounded-md p-2 mb-2 text-sm text-gray-800">
                            <span>CASH</span>
                          </div>
                          <textarea
                            className="w-full h-20 custom-input resize-none"
                            value={narration}
                            onChange={(e) => setNarration(e.target.value)}
                          />
                        </div>

                        {/* Middle - Cash in Hand */}
                        <div>
                          <label className="block text-gray-700 font-medium mb-1 text-sm">
                            CASH IN HAND:
                          </label>
                          <input
                            type="text"
                            className="w-full custom-input"
                            value={cashInHand}
                            onChange={(e) => setCashInHand(e.target.value)}
                            placeholder="Enter cash in hand"
                          />
                        </div>

                        {/* Right Side - Enclosures */}
                        <div>
                          <label className="block text-gray-700 font-medium mb-1 text-sm">
                            ENCLOSURES:
                          </label>
                          <div className="flex flex-wrap sm:flex-nowrap gap-2 mb-2">
                            <input
                              value={enclosurescode}
                              onChange={(e) =>
                                setEnclosurescode(e.target.value)
                              }
                              className="custom-input w-full ]"
                              placeholder="Code"
                            />
                          </div>
                          <textarea
                            className="w-full h-16 custom-input resize-none"
                            value={enclosures}
                            onChange={(e) => setEnclosures(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
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

export default page;
