import React, { useState } from 'react'
import Navbar from './Navbar'

const AddNewAccount = ({ isCollapsed, activeItem, toggleMobileSidebar }) => {
    const [selectedAccount, setSelectedAccount] = useState('');
    const [univCode, setUnivCode] = useState('');
    const [printAdvice, setPrintAdvice] = useState(false);
    const [dateOfOpening, setDateOfOpening] = useState('18-Mar-25');

    // Debit Entries
    const [selectedDebitPL, setSelectedDebitPL] = useState('');
    const [selectedDebitBSH, setSelectedDebitBSH] = useState('');

    // Credit Entries
    const [selectedCreditPL, setSelectedCreditPL] = useState('');
    const [selectedCreditBSH, setSelectedCreditBSH] = useState('');

    // Cash Flow
    const [selectedInFlow, setSelectedInFlow] = useState('');
    const [selectedOutFlow, setSelectedOutFlow] = useState('');

    // Other fields
    const [selectedLedger, setSelectedLedger] = useState('');
    const [selectedCOP, setSelectedCOP] = useState('');
    const [enteredBy, setEnteredBy] = useState('SA');

    const pageTitles = {
        dashboard: 'Dashboard',
        account: 'Account Management',
        ledger: 'Financial Ledger',
        narration: 'Narration',
        reports: 'Reports',
        accountMaster: 'Account Master',
    };

    // Dropdown options
    const accountOptions = [
        { code: "ACC001", description: "Cash Account" },
        { code: "ACC002", description: "Bank Account - SBI" },
        { code: "ACC003", description: "Customer Account" },
        { code: "ACC004", description: "Supplier Account" },
        { code: "ACC005", description: "Expense Account" },
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

    const flowOptions = [
        { code: "CF001", description: "Operating Cash Flow" },
        { code: "CF002", description: "Investment Cash Flow" },
        { code: "CF003", description: "Financing Cash Flow" },
        { code: "CF004", description: "Free Cash Flow" },
        { code: "CF005", description: "Net Cash Flow" },
    ];

    const ledgerOptions = [
        { code: "LG001", description: "General Ledger" },
        { code: "LG002", description: "Customer Ledger" },
        { code: "LG003", description: "Supplier Ledger" },
        { code: "LG004", description: "Employee Ledger" },
        { code: "LG005", description: "Bank Ledger" },
    ];

    const copOptions = [
        { code: "COP001", description: "COP Option 1" },
        { code: "COP002", description: "COP Option 2" },
        { code: "COP003", description: "COP Option 3" },
        { code: "COP004", description: "COP Option 4" },
        { code: "COP005", description: "COP Option 5" },
    ];

    const handleSave = () => {
        console.log('Saving account master data...');
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
                <Navbar pageTitle={pageTitles.accountMaster} toggleMobileSidebar={toggleMobileSidebar} />

                {/* Main Form Container */}
                <div className='p-6 sm:px-4 md:px-6 py-1'>
                    <div className='bg-white rounded-lg shadow-sm p-3 sm:p-4 md:p-6'>

                        {/* Company Header */}
                        <div className="text-center mb-6">
                            <h2 className="text-lg font-medium text-gray-800 underline">DSM SUGAR RAJPURA</h2>
                            <h3 className="text-base font-medium text-gray-800 underline mt-1">BUDAUN</h3>
                        </div>
                        <div className='h-0.5 bg-gray-200 mb-6 sm:mb-8'></div>

                        {/* Account Section */}
                        <div className="mb-4 sm:mb-6">
                            {/* Mobile Layout */}
                            <div className="block sm:hidden">
                                <div className="mb-3">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm">Account Code</label>
                                    <div className='bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center'>
                                        {selectedAccount || "Account"}
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm">Account Description</label>
                                    <select
                                        className='w-full bg-white text-gray-700 rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300'
                                        value={selectedAccount}
                                        onChange={(e) => setSelectedAccount(e.target.value)}
                                    >
                                        <option value="">Select Account...</option>
                                        {accountOptions.map((option) => (
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
                                    <label className="block text-gray-700 font-medium text-sm sm:text-base">Account :</label>
                                    <label className="block text-gray-700 font-medium text-sm sm:text-base">Account Selection</label>
                                </div>
                                <div className='flex flex-row gap-3 sm:gap-4 items-center'>
                                    <div className='bg-gray-200 text-gray-700 rounded-xl p-3 sm:min-w-35 font-medium flex items-center'>
                                        {selectedAccount || "Account"}
                                    </div>
                                    <select
                                        className='w-full flex-1 bg-white text-gray-700 rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300'
                                        value={selectedAccount}
                                        onChange={(e) => setSelectedAccount(e.target.value)}
                                    >
                                        <option value="">Select Account...</option>
                                        {accountOptions.map((option) => (
                                            <option key={option.code} value={option.code}>
                                                {option.code} - {option.description}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Univ. Code, Print Advice, Date Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">Univ. Code</label>
                                <input
                                    type="text"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm sm:text-base"
                                    value={univCode}
                                    onChange={(e) => setUnivCode(e.target.value)}
                                />
                            </div>

                            <div>
                                <div className="flex gap-2 justify-center items-center  mt-2 m-auto">
                                    <input
                                        type="checkbox"
                                        id="printAdvice"
                                        checked={printAdvice}
                                        onChange={(e) => setPrintAdvice(e.target.checked)}
                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <label className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">Print Advice</label>

                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">Date of Opening :</label>
                                <input
                                    type="text"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm sm:text-base"
                                    value={dateOfOpening}
                                    onChange={(e) => setDateOfOpening(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* DEBIT Entries Section */}
                        <div className="mb-6">
                            <h3 className="text-lg font-medium text-gray-800 mb-4 border-b border-gray-200 pb-2">DEBIT Entries :</h3>

                            {/* P&L Row */}
                            <div className="mb-4">
                                {/* Mobile Layout */}
                                <div className="block sm:hidden">
                                    <div className="mb-3">
                                        <label className="block text-gray-700 font-medium mb-2 text-sm">P&L Code</label>
                                        <div className='bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center'>
                                            {selectedDebitPL || "P&L"}
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-medium mb-2 text-sm">P&L Selection</label>
                                        <select
                                            className='w-full bg-white text-gray-700 rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300'
                                            value={selectedDebitPL}
                                            onChange={(e) => setSelectedDebitPL(e.target.value)}
                                        >
                                            <option value="">Select P&L...</option>
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
                                        <label className="block text-gray-700 font-medium text-sm sm:text-base">P&L :</label>
                                        <label className="block text-gray-700 font-medium text-sm sm:text-base">P&L Selection</label>
                                    </div>
                                    <div className='flex flex-row gap-3 sm:gap-4 items-center'>
                                        <div className='bg-gray-200 text-gray-700 rounded-xl p-3 sm:min-w-35 font-medium flex items-center'>
                                            {selectedDebitPL || "P&L"}
                                        </div>
                                        <select
                                            className='w-full flex-1 bg-white text-gray-700 rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300'
                                            value={selectedDebitPL}
                                            onChange={(e) => setSelectedDebitPL(e.target.value)}
                                        >
                                            <option value="">Select P&L...</option>
                                            {plOptions.map((option) => (
                                                <option key={option.code} value={option.code}>
                                                    {option.code} - {option.description}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* B.SH. Row */}
                            <div className="mb-4">
                                {/* Mobile Layout */}
                                <div className="block sm:hidden">
                                    <div className="mb-3">
                                        <label className="block text-gray-700 font-medium mb-2 text-sm">B.SH. Code</label>
                                        <div className='bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center'>
                                            {selectedDebitBSH || "B.SH."}
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-medium mb-2 text-sm">B.SH. Selection</label>
                                        <select
                                            className='w-full bg-white text-gray-700 rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300'
                                            value={selectedDebitBSH}
                                            onChange={(e) => setSelectedDebitBSH(e.target.value)}
                                        >
                                            <option value="">Select B.SH....</option>
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
                                        <label className="block text-gray-700 font-medium text-sm sm:text-base">B.SH. :</label>
                                        <label className="block text-gray-700 font-medium text-sm sm:text-base">B.SH. Selection</label>
                                    </div>
                                    <div className='flex flex-row gap-3 sm:gap-4 items-center'>
                                        <div className='bg-gray-200 text-gray-700 rounded-xl p-3 sm:min-w-35 font-medium flex items-center'>
                                            {selectedDebitBSH || "B.SH."}
                                        </div>
                                        <select
                                            className='w-full flex-1 bg-white text-gray-700 rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300'
                                            value={selectedDebitBSH}
                                            onChange={(e) => setSelectedDebitBSH(e.target.value)}
                                        >
                                            <option value="">Select B.SH....</option>
                                            {bshOptions.map((option) => (
                                                <option key={option.code} value={option.code}>
                                                    {option.code} - {option.description}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CREDIT Entries Section */}
                        <div className="mb-6">
                            <h3 className="text-lg font-medium text-gray-800 mb-4 border-b border-gray-200 pb-2">CREDIT Entries :</h3>

                            {/* P&L Row */}
                            <div className="mb-4">
                                {/* Mobile Layout */}
                                <div className="block sm:hidden">
                                    <div className="mb-3">
                                        <label className="block text-gray-700 font-medium mb-2 text-sm">P&L Code</label>
                                        <div className='bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center'>
                                            {selectedCreditPL || "P&L"}
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-medium mb-2 text-sm">P&L Selection</label>
                                        <select
                                            className='w-full bg-white text-gray-700 rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300'
                                            value={selectedCreditPL}
                                            onChange={(e) => setSelectedCreditPL(e.target.value)}
                                        >
                                            <option value="">Select P&L...</option>
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
                                        <label className="block text-gray-700 font-medium text-sm sm:text-base">P&L :</label>
                                        <label className="block text-gray-700 font-medium text-sm sm:text-base">P&L Selection</label>
                                    </div>
                                    <div className='flex flex-row gap-3 sm:gap-4 items-center'>
                                        <div className='bg-gray-200 text-gray-700 rounded-xl p-3 sm:min-w-35 font-medium flex items-center'>
                                            {selectedCreditPL || "P&L"}
                                        </div>
                                        <select
                                            className='w-full flex-1 bg-white text-gray-700 rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300'
                                            value={selectedCreditPL}
                                            onChange={(e) => setSelectedCreditPL(e.target.value)}
                                        >
                                            <option value="">Select P&L...</option>
                                            {plOptions.map((option) => (
                                                <option key={option.code} value={option.code}>
                                                    {option.code} - {option.description}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* B.SH. Row */}
                            <div className="mb-4">
                                {/* Mobile Layout */}
                                <div className="block sm:hidden">
                                    <div className="mb-3">
                                        <label className="block text-gray-700 font-medium mb-2 text-sm">B.SH. Code</label>
                                        <div className='bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center'>
                                            {selectedCreditBSH || "B.SH."}
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-medium mb-2 text-sm">B.SH. Selection</label>
                                        <select
                                            className='w-full bg-white text-gray-700 rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300'
                                            value={selectedCreditBSH}
                                            onChange={(e) => setSelectedCreditBSH(e.target.value)}
                                        >
                                            <option value="">Select B.SH....</option>
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
                                        <label className="block text-gray-700 font-medium text-sm sm:text-base">B.SH. :</label>
                                        <label className="block text-gray-700 font-medium text-sm sm:text-base">B.SH. Selection</label>
                                    </div>
                                    <div className='flex flex-row gap-3 sm:gap-4 items-center'>
                                        <div className='bg-gray-200 text-gray-700 rounded-xl p-3 sm:min-w-35 font-medium flex items-center'>
                                            {selectedCreditBSH || "B.SH."}
                                        </div>
                                        <select
                                            className='w-full flex-1 bg-white text-gray-700 rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300'
                                            value={selectedCreditBSH}
                                            onChange={(e) => setSelectedCreditBSH(e.target.value)}
                                        >
                                            <option value="">Select B.SH....</option>
                                            {bshOptions.map((option) => (
                                                <option key={option.code} value={option.code}>
                                                    {option.code} - {option.description}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cash Flow Section */}
                        <div className="mb-6">
                            <h3 className="text-lg font-medium text-gray-800 mb-4 border-b border-gray-200 pb-2">Cash Flow:</h3>

                            {/* InFlow Row */}
                            <div className="mb-4">
                                {/* Mobile Layout */}
                                <div className="block sm:hidden">
                                    <div className="mb-3">
                                        <label className="block text-gray-700 font-medium mb-2 text-sm">InFlow Code</label>
                                        <div className='bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center'>
                                            {selectedInFlow || "InFlow"}
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-medium mb-2 text-sm">InFlow Selection</label>
                                        <select
                                            className='w-full bg-white text-gray-700 rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300'
                                            value={selectedInFlow}
                                            onChange={(e) => setSelectedInFlow(e.target.value)}
                                        >
                                            <option value="">Select InFlow...</option>
                                            {flowOptions.map((option) => (
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
                                        <label className="block text-gray-700 font-medium text-sm sm:text-base">InFlow</label>
                                        <label className="block text-gray-700 font-medium text-sm sm:text-base">InFlow Selection</label>
                                    </div>
                                    <div className='flex flex-row gap-3 sm:gap-4 items-center'>
                                        <div className='bg-gray-200 text-gray-700 rounded-xl p-3 sm:min-w-35 font-medium flex items-center'>
                                            {selectedInFlow || "InFlow"}
                                        </div>
                                        <select
                                            className='w-full flex-1 bg-white text-gray-700 rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300'
                                            value={selectedInFlow}
                                            onChange={(e) => setSelectedInFlow(e.target.value)}
                                        >
                                            <option value="">Select InFlow...</option>
                                            {flowOptions.map((option) => (
                                                <option key={option.code} value={option.code}>
                                                    {option.code} - {option.description}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* OutFlow Row */}
                            <div className="mb-4">
                                {/* Mobile Layout */}
                                <div className="block sm:hidden">
                                    <div className="mb-3">
                                        <label className="block text-gray-700 font-medium mb-2 text-sm">OutFlow Code</label>
                                        <div className='bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center'>
                                            {selectedOutFlow || "OutFlow"}
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-medium mb-2 text-sm">OutFlow Selection</label>
                                        <select
                                            className='w-full bg-white text-gray-700 rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300'
                                            value={selectedOutFlow}
                                            onChange={(e) => setSelectedOutFlow(e.target.value)}
                                        >
                                            <option value="">Select OutFlow...</option>
                                            {flowOptions.map((option) => (
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
                                        <label className="block text-gray-700 font-medium text-sm sm:text-base">OutFlow</label>
                                        <label className="block text-gray-700 font-medium text-sm sm:text-base">OutFlow Selection</label>
                                    </div>
                                    <div className='flex flex-row gap-3 sm:gap-4 items-center'>
                                        <div className='bg-gray-200 text-gray-700 rounded-xl p-3 sm:min-w-35 font-medium flex items-center'>
                                            {selectedOutFlow || "OutFlow"}
                                        </div>
                                        <select
                                            className='w-full flex-1 bg-white text-gray-700 rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300'
                                            value={selectedOutFlow}
                                            onChange={(e) => setSelectedOutFlow(e.target.value)}
                                        >
                                            <option value="">Select OutFlow...</option>
                                            {flowOptions.map((option) => (
                                                <option key={option.code} value={option.code}>
                                                    {option.code} - {option.description}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* LEDGER Section */}
                        <div className="mb-6">
                            <div className="mb-4">
                                {/* Mobile Layout */}
                                <div className="block sm:hidden">
                                    <div className="mb-3">
                                        <label className="block text-gray-700 font-medium mb-2 text-sm">LEDGER Code</label>
                                        <div className='bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center'>
                                            {selectedLedger || "LEDGER"}
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-medium mb-2 text-sm">LEDGER Selection</label>
                                        <select
                                            className='w-full bg-white text-gray-700 rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300'
                                            value={selectedLedger}
                                            onChange={(e) => setSelectedLedger(e.target.value)}
                                        >
                                            <option value="">Select LEDGER...</option>
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
                                        <label className="block text-gray-700 font-medium text-sm sm:text-base">LEDGER:</label>
                                        <label className="block text-gray-700 font-medium text-sm sm:text-base">LEDGER Selection</label>
                                    </div>
                                    <div className='flex flex-row gap-3 sm:gap-4 items-center'>
                                        <div className='bg-gray-200 text-gray-700 rounded-xl p-3 sm:min-w-35 font-medium flex items-center'>
                                            {selectedLedger || "LEDGER"}
                                        </div>
                                        <select
                                            className='w-full flex-1 bg-white text-gray-700 rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300'
                                            value={selectedLedger}
                                            onChange={(e) => setSelectedLedger(e.target.value)}
                                        >
                                            <option value="">Select LEDGER...</option>
                                            {ledgerOptions.map((option) => (
                                                <option key={option.code} value={option.code}>
                                                    {option.code} - {option.description}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* COP Section */}
                        <div className="mb-6">
                            <div className="mb-4">
                                {/* Mobile Layout */}
                                <div className="block sm:hidden">
                                    <div className="mb-3">
                                        <label className="block text-gray-700 font-medium mb-2 text-sm">COP Code</label>
                                        <div className='bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center'>
                                            {selectedCOP || "COP"}
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-medium mb-2 text-sm">COP Selection</label>
                                        <select
                                            className='w-full bg-white text-gray-700 rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300'
                                            value={selectedCOP}
                                            onChange={(e) => setSelectedCOP(e.target.value)}
                                        >
                                            <option value="">Select COP...</option>
                                            {copOptions.map((option) => (
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
                                        <label className="block text-gray-700 font-medium text-sm sm:text-base">COP :</label>
                                        <label className="block text-gray-700 font-medium text-sm sm:text-base">COP Selection</label>
                                    </div>
                                    <div className='flex flex-row gap-3 sm:gap-4 items-center'>
                                        <div className='bg-gray-200 text-gray-700 rounded-xl p-3 sm:min-w-35 font-medium flex items-center'>
                                            {selectedCOP || "COP"}
                                        </div>
                                        <select
                                            className='w-full flex-1 bg-white text-gray-700 rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300'
                                            value={selectedCOP}
                                            onChange={(e) => setSelectedCOP(e.target.value)}
                                        >
                                            <option value="">Select COP...</option>
                                            {copOptions.map((option) => (
                                                <option key={option.code} value={option.code}>
                                                    {option.code} - {option.description}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Entered By Section */}
                        <div className="mb-8">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-gray-50 rounded-xl">
                                <label className="text-gray-700 font-medium text-sm sm:text-base">Entered By</label>
                                <input
                                    type="text"
                                    className="w-20 px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm font-medium"
                                    value={enteredBy}
                                    onChange={(e) => setEnteredBy(e.target.value)}
                                />
                                <span className="text-gray-700 font-medium text-sm sm:text-base">SYSTEM ADMINISTRATOR</span>
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
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
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

export default AddNewAccount