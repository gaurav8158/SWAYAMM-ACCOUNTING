import React, { useState } from 'react'
import Navbar from './Navbar'



const CashVoucherEntry = ({ isCollapsed = false, activeItem, toggleMobileSidebar = () => { } }) => {
    // Header fields
    const [tranType, setTranType] = useState('JV');
    const [cashPayment, setCashPayment] = useState('CASH PAYMENT');
    const [srNo, setSrNo] = useState('9384');
    const [voucherNo, setVoucherNo] = useState('1585');
    const [narrationCode, setNarrationCode] = useState('');
    const [vtDt, setVtDt] = useState('17-Mar-25');
    const [voucherType, setVoucherType] = useState('C');
    const [cashVoucher, setCashVoucher] = useState('CASH VOUCHER');
    const [noField, setNoField] = useState('');
    const [dateField, setDateField] = useState('');
    const [neField, setNeField] = useState('');

    // Print options
    const [printMemo, setPrintMemo] = useState(true);
    const [vide, setVide] = useState(false);
    const [advice, setAdvice] = useState(false);
    const [challan, setChallan] = useState(false);
    const [invoice, setInvoice] = useState(false);
    const [voucher, setVoucher] = useState(false);

    // Debit entries
    const [debitUniversalCode, setDebitUniversalCode] = useState('');
    const [debitAcCode, setDebitAcCode] = useState('');
    const [debitAcHead, setDebitAcHead] = useState('');
    const [debitAmount, setDebitAmount] = useState('');
    const [debitRefDt, setDebitRefDt] = useState('');
    const [debitRefNo, setDebitRefNo] = useState('');
    const [debitTotal, setDebitTotal] = useState('');

    // Credit entries
    const [creditUniversalCode, setCreditUniversalCode] = useState('');
    const [creditAcCode, setCreditAcCode] = useState('');
    const [creditAcHead, setCreditAcHead] = useState('');
    const [creditAmount, setCreditAmount] = useState('');
    const [creditRefDt, setCreditRefDt] = useState('');
    const [creditRefNo, setCreditRefNo] = useState('');
    const [creditTotal, setCreditTotal] = useState('');

    // Bottom fields
    const [narration, setNarration] = useState('CASH');
    const [cashInHand, setCashInHand] = useState('0');
    const [enclosures, setEnclosures] = useState('');

    const pageTitles = {
        dashboard: 'Dashboard',
        account: 'Account Management',
        ledger: 'Financial Ledger',
        cashvoucher: 'Cash Voucher Entry',
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
        console.log('Prompt clicked');
    };

    const handleSave = () => {
        console.log('Saving cash voucher...');
    };

    const handleCancel = () => {
        console.log('Cancelling...');
    };

    const handleClose = () => {
        console.log('Closing...');
    };

    return (
        <>
            <div className={`${isCollapsed ? 'md:ml-20' : 'md:ml-72'} transition-all duration-300 ease-in-out min-h-screen bg-[#EEEEF1]`}>
                <Navbar pageTitle={pageTitles.cashvoucher} toggleMobileSidebar={toggleMobileSidebar} />

                {/* Header Section */}
                <div className='p-6 sm:px-4 md:px-6 py-1'>
                    <div className='bg-white rounded-lg shadow-sm p-3 sm:p-4 md:p-6'>
                        {/* Company Header */}
                        <div className="text-center mb-6">
                            <div className="flex justify-center items-center gap-8 mb-4">
                                <h2 className="text-lg font-bold text-gray-800 underline">DSM SUGAR RAJPURA</h2>
                                <h3 className="text-lg font-bold text-gray-800 underline">BUDAUN</h3>
                                <div className="bg-red-100 border border-red-300 px-3 py-1 rounded">
                                    <span className="text-red-600 font-medium text-sm">IMAGE 1</span>
                                </div>
                            </div>
                            <h1 className="text-xl font-bold text-gray-800 underline mb-6">CASH VOUCHER ENTRY</h1>
                        </div>
                        <div className='h-0.5 bg-gray-200 mb-6 sm:mb-8'></div>

                        {/* Top Controls Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
                            {/* TRAN. TYPE */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">TRAN. TYPE</label>
                                <select
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm sm:text-base"
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
                                <label className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">CASH PAYMENT</label>
                                <input
                                    type="text"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm sm:text-base"
                                    value={cashPayment}
                                    onChange={(e) => setCashPayment(e.target.value)}
                                />
                            </div>

                            {/* SR NO */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">SR NO.</label>
                                <input
                                    type="text"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm sm:text-base"
                                    value={srNo}
                                    onChange={(e) => setSrNo(e.target.value)}
                                />
                            </div>

                            {/* VOUCHER NO */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">VOUCHER NO.</label>
                                <input
                                    type="text"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm sm:text-base"
                                    value={voucherNo}
                                    onChange={(e) => setVoucherNo(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Narration Code Section */}
                        <div className="mb-4 sm:mb-6">
                            {/* Mobile Layout */}
                            <div className="block sm:hidden">
                                <div className="mb-3">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm">Narration Code</label>
                                    <div className='bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center'>
                                        {narrationCode || "Narration"}
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm">Narration Description</label>
                                    <div className="flex gap-2">
                                        <select
                                            className='flex-1 bg-white text-gray-700 rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300'
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
                                            className="px-4 py-2 bg-gray-200 border border-gray-300 rounded-xl text-black text-sm hover:bg-gray-300"
                                        >
                                            PROMPT
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Desktop Layout */}
                            <div className="hidden sm:block">
                                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2">
                                    <label className="block text-gray-700 font-medium text-sm sm:text-base">Narration Code</label>
                                    <label className="block text-gray-700 font-medium text-sm sm:text-base">Narration Description</label>
                                </div>
                                <div className='flex flex-row gap-3 sm:gap-4 items-center'>
                                    <div className='bg-gray-200 text-gray-700 rounded-xl p-3 sm:min-w-35 font-medium flex items-center'>
                                        {narrationCode || "Narration"}
                                    </div>
                                    <div className="flex flex-1 gap-2">
                                        <select
                                            className='flex-1 bg-white text-gray-700 rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300'
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
                                            className="px-4 py-2 bg-gray-200 border border-gray-300 rounded-xl text-black text-sm hover:bg-gray-300"
                                        >
                                            PROMPT
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Row Controls */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 mb-4 sm:mb-6">
                            {/* VT. DT */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">VT. DT</label>
                                <input
                                    type="text"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm sm:text-base"
                                    value={vtDt}
                                    onChange={(e) => setVtDt(e.target.value)}
                                />
                            </div>

                            {/* VOUCHER TYPE */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">VOUCHER TYPE</label>
                                <input
                                    type="text"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm sm:text-base"
                                    value={voucherType}
                                    onChange={(e) => setVoucherType(e.target.value)}
                                />
                            </div>

                            {/* CASH VOUCHER */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">CASH VOUCHER</label>
                                <input
                                    type="text"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm sm:text-base"
                                    value={cashVoucher}
                                    onChange={(e) => setCashVoucher(e.target.value)}
                                />
                            </div>

                            {/* NO */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">NO</label>
                                <input
                                    type="text"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm sm:text-base"
                                    value={noField}
                                    onChange={(e) => setNoField(e.target.value)}
                                />
                            </div>

                            {/* DATE */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">DATE</label>
                                <input
                                    type="text"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm sm:text-base"
                                    value={dateField}
                                    onChange={(e) => setDateField(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* NE Field */}
                        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 sm:gap-6 mb-4 sm:mb-6">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">NE</label>
                                <input
                                    type="text"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm sm:text-base"
                                    value={neField}
                                    onChange={(e) => setNeField(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Print Options */}
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-3 text-sm sm:text-base">Print Options</label>
                            <div className="flex flex-wrap gap-6">
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id="printMemo"
                                        checked={printMemo}
                                        onChange={(e) => setPrintMemo(e.target.checked)}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <label htmlFor="printMemo" className="text-sm sm:text-base text-gray-700 font-medium">PRINT MEMO</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id="vide"
                                        checked={vide}
                                        onChange={(e) => setVide(e.target.checked)}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <label htmlFor="vide" className="text-sm sm:text-base text-gray-700 font-medium">VIDE</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id="advice"
                                        checked={advice}
                                        onChange={(e) => setAdvice(e.target.checked)}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <label htmlFor="advice" className="text-sm sm:text-base text-gray-700 font-medium">ADVICE</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id="challan"
                                        checked={challan}
                                        onChange={(e) => setChallan(e.target.checked)}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <label htmlFor="challan" className="text-sm sm:text-base text-gray-700 font-medium">CHALLAN</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id="invoice"
                                        checked={invoice}
                                        onChange={(e) => setInvoice(e.target.checked)}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <label htmlFor="invoice" className="text-sm sm:text-base text-gray-700 font-medium">INVOICE</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id="voucher"
                                        checked={voucher}
                                        onChange={(e) => setVoucher(e.target.checked)}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <label htmlFor="voucher" className="text-sm sm:text-base text-gray-700 font-medium">VOUCHER</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* DR (Debit) Section */}
                <div className='p-6 sm:px-4 md:px-6 py-1'>
                    <div className="bg-white rounded-lg shadow-sm p-3 sm:p-6 md:p-8">
                        <div className="flex justify-between items-center mb-4 sm:mb-6">
                            <h2 className="text-lg sm:text-xl font-medium text-gray-800">DR</h2>
                            <div className="flex gap-8">
                                <span className="text-sm font-medium text-gray-700">FOR DEBIT</span>
                                <div className="grid grid-cols-4 gap-4 text-xs text-gray-600">
                                    <span>LEDGER</span>
                                    <span>PROFIT & LOSS</span>
                                    <span>BALANCE SHEET</span>
                                    <span>CASH FLOW</span>
                                </div>
                            </div>
                        </div>
                        <div className="h-px bg-gray-200 mb-6 sm:mb-8"></div>

                        {/* Universal Code */}
                        <div className="mb-4 sm:mb-6">
                            {/* Mobile Layout */}
                            <div className="block sm:hidden">
                                <div className="mb-3">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm">Universal Code</label>
                                    <input
                                        className='w-full bg-white border border-gray-300 rounded-xl text-black p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium'
                                        placeholder='0'
                                        value={debitUniversalCode}
                                        onChange={(e) => setDebitUniversalCode(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Desktop Layout */}
                            <div className="hidden sm:block">
                                <div className="mb-4 sm:mb-6">
                                    <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2">
                                        <label className="block text-gray-700 font-medium text-sm sm:text-base">Universal Code</label>
                                        <label className="block text-gray-700 font-medium text-sm sm:text-base">Description</label>
                                    </div>
                                    <div className='flex flex-row gap-3 sm:gap-4 items-center'>
                                        <input
                                            className='bg-white border border-gray-300 rounded-xl text-black p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium sm:min-w-35'
                                            placeholder='0'
                                            value={debitUniversalCode}
                                            onChange={(e) => setDebitUniversalCode(e.target.value)}
                                        />
                                        <input
                                            className='w-full flex-1 bg-gray-100 text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300'
                                            placeholder='NA'
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Account Entry Headers */}
                        <div className="grid grid-cols-1 sm:grid-cols-9 gap-2 mb-4 text-sm font-medium text-gray-700 border-b pb-2">
                            <div className="sm:col-span-1">S.NO</div>
                            <div className="sm:col-span-2">A/C CODE</div>
                            <div className="sm:col-span-2">A/C HEAD</div>
                            <div className="sm:col-span-1">AMOUNT</div>
                            <div className="sm:col-span-1">REF. DT.</div>
                            <div className="sm:col-span-1">REF. NO.</div>
                            <div className="sm:col-span-1">For FDR CHANGE</div>
                        </div>

                        {/* Account Entries */}
                        <div className="mb-4 sm:mb-6">
                            {/* Mobile Layout */}
                            <div className="block sm:hidden">
                                <div className="mb-3">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm">A/C CODE</label>
                                    <input
                                        className='w-full bg-white border border-gray-300 rounded-xl text-black p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium'
                                        placeholder='Enter Code'
                                        value={debitAcCode}
                                        onChange={(e) => setDebitAcCode(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm">A/C HEAD</label>
                                    <input
                                        className='w-full bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300'
                                        placeholder='Enter Head'
                                        value={debitAcHead}
                                        onChange={(e) => setDebitAcHead(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm">AMOUNT</label>
                                    <input
                                        className='w-full bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300'
                                        placeholder='Enter Amount'
                                        value={debitAmount}
                                        onChange={(e) => setDebitAmount(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm">REF. DT.</label>
                                    <input
                                        className='w-full bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300'
                                        placeholder='Enter Date'
                                        value={debitRefDt}
                                        onChange={(e) => setDebitRefDt(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm">REF. NO.</label>
                                    <input
                                        className='w-full bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300'
                                        placeholder='Enter Ref No'
                                        value={debitRefNo}
                                        onChange={(e) => setDebitRefNo(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Desktop Layout */}
                            <div className="hidden sm:block">
                                <div className='grid grid-cols-9 gap-3 sm:gap-4 items-center'>
                                    <div className="col-span-1">
                                        <span className="text-sm text-gray-600">1</span>
                                    </div>
                                    <input
                                        className='col-span-2 bg-white border border-gray-300 rounded-xl text-black p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium'
                                        placeholder='Enter Code'
                                        value={debitAcCode}
                                        onChange={(e) => setDebitAcCode(e.target.value)}
                                    />
                                    <input
                                        className='col-span-2 bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300'
                                        placeholder='Enter Head'
                                        value={debitAcHead}
                                        onChange={(e) => setDebitAcHead(e.target.value)}
                                    />
                                    <input
                                        className='col-span-1 bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300'
                                        placeholder='Amount'
                                        value={debitAmount}
                                        onChange={(e) => setDebitAmount(e.target.value)}
                                    />
                                    <input
                                        className='col-span-1 bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300'
                                        placeholder='Ref. Dt.'
                                        value={debitRefDt}
                                        onChange={(e) => setDebitRefDt(e.target.value)}
                                    />
                                    <input
                                        className='col-span-1 bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300'
                                        placeholder='Ref. No.'
                                        value={debitRefNo}
                                        onChange={(e) => setDebitRefNo(e.target.value)}
                                    />
                                    <div className="col-span-1 bg-gray-100 border border-gray-300 h-12 rounded-xl"></div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons Row */}
                        <div className="flex justify-center gap-2 mb-4">
                            <button className="px-3 py-1 bg-gray-200 border border-gray-300 rounded text-black text-sm hover:bg-gray-300">+</button>
                            <button className="px-3 py-1 bg-gray-200 border border-gray-300 rounded text-black text-sm hover:bg-gray-300">EDIT</button>
                            <button className="px-3 py-1 bg-gray-200 border border-gray-300 rounded text-black text-sm hover:bg-gray-300">-</button>
                        </div>

                        {/* Balance Sheet / Cash Flow Grid */}
                        <div className="grid grid-cols-4 gap-1 mb-6">
                            <div className="bg-gray-100 border border-gray-300 h-8 rounded"></div>
                            <div className="bg-gray-100 border border-gray-300 h-8 rounded"></div>
                            <div className="bg-gray-100 border border-gray-300 h-8 rounded"></div>
                            <div className="bg-gray-100 border border-gray-300 h-8 rounded"></div>
                        </div>

                        {/* Debit Total */}
                        <div className="flex justify-end mt-4">
                            <div className="flex items-center gap-2">
                                <span className="text-sm sm:text-base font-medium text-gray-700">DEBIT TOTAL</span>
                                <input
                                    type="text"
                                    className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm sm:text-base"
                                    value={debitTotal}
                                    onChange={(e) => setDebitTotal(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* CR (Credit) Section */}
                <div className='p-6 sm:px-4 md:px-6 py-1'>
                    <div className="bg-white rounded-lg shadow-sm p-3 sm:p-6 md:p-8">
                        <div className="flex justify-between items-center mb-4 sm:mb-6">
                            <h2 className="text-lg sm:text-xl font-medium text-gray-800">CR</h2>
                            <div className="flex gap-8">
                                <span className="text-sm font-medium text-gray-700">FOR CREDIT</span>
                                <div className="grid grid-cols-4 gap-4 text-xs text-gray-600">
                                    <span>LEDGER</span>
                                    <span>PROFIT & LOSS</span>
                                    <span>BALANCE SHEET</span>
                                    <span>CASH FLOW</span>
                                </div>
                            </div>
                        </div>
                        <div className="h-px bg-gray-200 mb-6 sm:mb-8"></div>

                        {/* Universal Code */}
                        <div className="mb-4 sm:mb-6">
                            {/* Mobile Layout */}
                            <div className="block sm:hidden">
                                <div className="mb-3">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm">Universal Code</label>
                                    <input
                                        className='w-full bg-white border border-gray-300 rounded-xl text-black p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium'
                                        placeholder='0'
                                        value={creditUniversalCode}
                                        onChange={(e) => setCreditUniversalCode(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Desktop Layout */}
                            <div className="hidden sm:block">
                                <div className="mb-4 sm:mb-6">
                                    <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2">
                                        <label className="block text-gray-700 font-medium text-sm sm:text-base">Universal Code</label>
                                        <label className="block text-gray-700 font-medium text-sm sm:text-base">Description</label>
                                    </div>
                                    <div className='flex flex-row gap-3 sm:gap-4 items-center'>
                                        <input
                                            className='bg-white border border-gray-300 rounded-xl text-black p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium sm:min-w-35'
                                            placeholder='0'
                                            value={creditUniversalCode}
                                            onChange={(e) => setCreditUniversalCode(e.target.value)}
                                        />
                                        <input
                                            className='w-full flex-1 bg-gray-100 text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300'
                                            placeholder='NA'
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Account Entry Headers */}
                        <div className="grid grid-cols-1 sm:grid-cols-9 gap-2 mb-4 text-sm font-medium text-gray-700 border-b pb-2">
                            <div className="sm:col-span-1">S.NO</div>
                            <div className="sm:col-span-2">A/C CODE</div>
                            <div className="sm:col-span-2">A/C HEAD</div>
                            <div className="sm:col-span-1">AMOUNT</div>
                            <div className="sm:col-span-1">REF. DT.</div>
                            <div className="sm:col-span-1">REF. NO.</div>
                            <div className="sm:col-span-1">CHANGE</div>
                        </div>

                        {/* Account Entries */}
                        <div className="mb-4 sm:mb-6">
                            {/* Mobile Layout */}
                            <div className="block sm:hidden">
                                <div className="mb-3">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm">A/C CODE</label>
                                    <input
                                        className='w-full bg-white border border-gray-300 rounded-xl text-black p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium'
                                        placeholder='Enter Code'
                                        value={creditAcCode}
                                        onChange={(e) => setCreditAcCode(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm">A/C HEAD</label>
                                    <input
                                        className='w-full bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300'
                                        placeholder='Enter Head'
                                        value={creditAcHead}
                                        onChange={(e) => setCreditAcHead(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm">AMOUNT</label>
                                    <input
                                        className='w-full bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300'
                                        placeholder='Enter Amount'
                                        value={creditAmount}
                                        onChange={(e) => setCreditAmount(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm">REF. DT.</label>
                                    <input
                                        className='w-full bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300'
                                        placeholder='Enter Date'
                                        value={creditRefDt}
                                        onChange={(e) => setCreditRefDt(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm">REF. NO.</label>
                                    <input
                                        className='w-full bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300'
                                        placeholder='Enter Ref No'
                                        value={creditRefNo}
                                        onChange={(e) => setCreditRefNo(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Desktop Layout */}
                            <div className="hidden sm:block">
                                <div className='grid grid-cols-9 gap-3 sm:gap-4 items-center'>
                                    <div className="col-span-1">
                                        <span className="text-sm text-gray-600">1</span>
                                    </div>
                                    <input
                                        className='col-span-2 bg-white border border-gray-300 rounded-xl text-black p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium'
                                        placeholder='Enter Code'
                                        value={creditAcCode}
                                        onChange={(e) => setCreditAcCode(e.target.value)}
                                    />
                                    <input
                                        className='col-span-2 bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300'
                                        placeholder='Enter Head'
                                        value={creditAcHead}
                                        onChange={(e) => setCreditAcHead(e.target.value)}
                                    />
                                    <input
                                        className='col-span-1 bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300'
                                        placeholder='Amount'
                                        value={creditAmount}
                                        onChange={(e) => setCreditAmount(e.target.value)}
                                    />
                                    <input
                                        className='col-span-1 bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300'
                                        placeholder='Ref. Dt.'
                                        value={creditRefDt}
                                        onChange={(e) => setCreditRefDt(e.target.value)}
                                    />
                                    <input
                                        className='col-span-1 bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300'
                                        placeholder='Ref. No.'
                                        value={creditRefNo}
                                        onChange={(e) => setCreditRefNo(e.target.value)}
                                    />
                                    <div className="col-span-1 bg-gray-100 border border-gray-300 h-12 rounded-xl"></div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons Row */}
                        <div className="flex justify-center gap-2 mb-4">
                            <button className="px-3 py-1 bg-gray-200 border border-gray-300 rounded text-black text-sm hover:bg-gray-300">+</button>
                            <button className="px-3 py-1 bg-gray-200 border border-gray-300 rounded text-black text-sm hover:bg-gray-300">EDIT</button>
                            <button className="px-3 py-1 bg-gray-200 border border-gray-300 rounded text-black text-sm hover:bg-gray-300">-</button>
                        </div>

                        {/* Balance Sheet / Cash Flow Grid */}
                        <div className="grid grid-cols-4 gap-1 mb-6">
                            <div className="bg-gray-100 border border-gray-300 h-8 rounded"></div>
                            <div className="bg-gray-100 border border-gray-300 h-8 rounded"></div>
                            <div className="bg-gray-100 border border-gray-300 h-8 rounded"></div>
                            <div className="bg-gray-100 border border-gray-300 h-8 rounded"></div>
                        </div>

                        {/* Credit Total */}
                        <div className="flex justify-end mt-4">
                            <div className="flex items-center gap-2">
                                <span className="text-sm sm:text-base font-medium text-gray-700">CREDIT TOTAL</span>
                                <input
                                    type="text"
                                    className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm sm:text-base"
                                    value={creditTotal}
                                    onChange={(e) => setCreditTotal(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Narration */}
                <div className='p-6 sm:px-4 md:px-6 py-1 pb-5'>
                    <div className="bg-white rounded-lg shadow-sm p-3 sm:p-6 md:p-8">
                        <h2 className="text-lg sm:text-xl font-medium text-gray-800 mb-4 sm:mb-6">Narration</h2>
                        <div className="h-px bg-gray-200 mb-6 sm:mb-8"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 sm:mb-12">
                            {/* Left Side - Narration */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">NARRATION :</label>
                                <div className="bg-gray-100 border border-gray-300 rounded-lg p-2 mb-2 text-sm">
                                    <span>CASH</span>
                                </div>
                                <textarea
                                    className="w-full h-20 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm sm:text-base resize-none"
                                    value={narration}
                                    onChange={(e) => setNarration(e.target.value)}
                                />
                            </div>

                            {/* Right Side - Cash in Hand and Enclosures */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">CASH IN HAND:</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm sm:text-base"
                                        value={cashInHand}
                                        onChange={(e) => setCashInHand(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">ENCLOSURES :</label>
                                    <textarea
                                        className="w-full h-16 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm sm:text-base resize-none"
                                        value={enclosures}
                                        onChange={(e) => setEnclosures(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4">
                            <button
                                onClick={handleSave}
                                className='flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#292F4E] text-white rounded-lg font-medium transform transition-all duration-300 hover:scale-105 text-sm sm:text-base'
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                SAVE
                            </button>
                            <button
                                onClick={handleCancel}
                                className='flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#292F4E] text-white rounded-lg font-medium transform transition-all duration-300 hover:scale-105 text-sm sm:text-base'
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                CANCEL
                            </button>
                            <button
                                onClick={handleClose}
                                className='flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#292F4E] text-white rounded-lg font-medium transform transition-all duration-300 hover:scale-105 text-sm sm:text-base'
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3v1" />
                                </svg>
                                CLOSE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CashVoucherEntry