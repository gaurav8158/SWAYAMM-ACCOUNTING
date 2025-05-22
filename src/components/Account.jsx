// Account.js
import React, { useState } from 'react'
import Navbar from './Navbar'

const Account = ({ isCollapsed, activeItem, toggleMobileSidebar }) => {
    const [selectedCode, setSelectedCode] = useState('');

    const pageTitles = {
        dashboard: 'Dashboard',
        account: 'Account Management',
        ledger: 'Financial Ledger',
    };

    // Dropdown options with codes
    const dropdownOptions = [
        { code: "B2", description: "Contractors Retention Money" },
        { code: "Jl", description: "Security Deposit - Cane Transporters" },
        { code: "A", description: "Customers Ledger - Free Sugar" },
        { code: "B", description: "Contractors Advance Ledger" },
        { code: "B1", description: "Contractors Advance Ledger (Repair & Maintenance)" },
        { code: "C", description: "Cane Supplier Ledger" },
        { code: "D", description: "Land Purchase Ledger" },
        { code: "E", description: "Cane Transporter Ledger" },
        { code: "F", description: "Capital Work in Progress (Construction)" },
        { code: "G", description: "Imprest Ledger" },
        { code: "H", description: "Outstanding Employees Ledger" },
        { code: "I", description: "Outstanding Sundries Ledger" },
        { code: "J", description: "Security Deposit" },
        { code: "K", description: "Stores Supplier Ledger (Capital)" },
        { code: "K1", description: "Stores Supplier Ledger" },
        { code: "L", description: "Revenue Ledger" },
        { code: "M", description: "Cane Development Ledger" },
        { code: "N", description: "Leasing Business Ledger" },
        { code: "O", description: "Raw Sugar" },
        { code: "P", description: "Tax Collected at Source - Scrap" },
        { code: "Q", description: "D.S.M. Board - Ledger" },
        { code: "R", description: "Trinad Project" },
        { code: "S", description: "Picoline, Pyradine" },
        { code: "T", description: "TDS Ledger - Contractor (Non Company)" },
        { code: "T1", description: "TDS Ledger - Interest (Non Company)" },
        { code: "T2", description: "TDS Ledger - Interest (Company)" },
        { code: "T3", description: "TDS Ledger - Professional (Company)" },
        { code: "T4", description: "TDS Ledger - Professional (Non Company)" },
        { code: "T5", description: "TDS Ledger - Contractor (Company)" },
        { code: "T6", description: "TDS Ledger - Commission (Company)" },
        { code: "T7", description: "TDS Ledger - Commission (Non Company)" },
        { code: "T8", description: "TDS Ledger - Rent (Company)" },
        { code: "T9", description: "TDS Ledger - Rent (Non Company)" },
        { code: "U", description: "Kadarabad Site" },
        { code: "V", description: "Revenue Ledger - Raijzagaon" },
        { code: "W", description: "Liquid Bio-Fertilizer Plant" },
        { code: "X", description: "Customer - Others" },
        { code: "Y", description: "Cane Transport" },
        { code: "Z", description: "General Ledger" }
    ];

    const handleDropdownChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedCode(selectedValue);
    };

    return (
        <>
            <div className={`${isCollapsed ? 'md:ml-20' : 'md:ml-72'} transition-all duration-300 ease-in-out min-h-screen bg-[#EEEEF1]`}>
                <Navbar pageTitle={pageTitles[activeItem]} toggleMobileSidebar={toggleMobileSidebar} />

                {/* Ledger Section */}
                <div className='p-6  sm:px-4 md:px-6 py-1'>
                    <div className='bg-white rounded-lg shadow-sm p-3 sm:p-4 md:p-6'>
                        <p className='text-lg sm:text-xl text-black font-medium mb-4 sm:mb-6'>Ledger</p>
                        <div className='h-0.5 bg-gray-200 mb-6 sm:mb-8'></div>

                        {/* Mobile Layout */}
                        <div className="block sm:hidden">
                            <div className="mb-3">
                                <label className="block text-gray-700 font-medium mb-2 text-sm">Ledger Code</label>
                                <div className='bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center'>
                                    {selectedCode || "Ledger"}
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2 text-sm">Ledger Description</label>
                                <select
                                    className='w-full bg-white text-gray-700 rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300'
                                    value={selectedCode}
                                    onChange={handleDropdownChange}
                                >
                                    {dropdownOptions.map((option) => (
                                        <option key={option.code} value={option.code}>
                                            {option.code} - {option.description}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden sm:block">
                            <div className="mb-4 sm:mb-6">
                                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2">
                                    <label className="block text-gray-700 font-medium text-sm sm:text-base">Ledger Code</label>
                                    <label className="block text-gray-700 font-medium text-sm sm:text-base">Ledger Description</label>
                                </div>
                                <div className='flex flex-row gap-3 sm:gap-4 items-center'>
                                    <div className='bg-gray-200 text-gray-700 rounded-xl p-3 sm:min-w-35 font-medium flex items-center'>
                                        {selectedCode || "Ledger"}
                                    </div>
                                    <select
                                        className='w-full flex-1 bg-white text-gray-700 rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300'
                                        value={selectedCode}
                                        onChange={handleDropdownChange}
                                    >
                                        {dropdownOptions.map((option) => (
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

                {/* Account Section */}
                <div className='p-6  sm:px-4 md:px-6 py-1'>
                    <div className='bg-white rounded-lg shadow-sm p-3 sm:p-4 md:p-6'>
                        <p className='text-lg sm:text-xl text-black font-medium mb-4 sm:mb-6'>Account</p>
                        <div className='h-0.5 bg-gray-200 mb-6 sm:mb-8'></div>

                        {/* Mobile Layout */}
                        <div className="block sm:hidden">
                            <div className="mb-3">
                                <label className="block text-gray-700 font-medium mb-2 text-sm">Account Code</label>
                                <input
                                    className='w-full bg-white border border-gray-400 rounded-xl text-black p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium'
                                    placeholder='Enter Code'
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2 text-sm">Account Description</label>
                                <input
                                    className='w-full bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300'
                                    placeholder='Enter Desc..'
                                />
                            </div>
                        </div>

                        {/* Desktop Layout */}
                        <div className="hidden sm:block">
                            <div className="mb-4 sm:mb-6">
                                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2">
                                    <label className="block text-gray-700 font-medium text-sm sm:text-base">Account Code</label>
                                    <label className="block text-gray-700 font-medium text-sm sm:text-base">Account Description</label>
                                </div>
                                <div className='flex flex-row gap-3 sm:gap-4 items-center'>
                                    <input
                                        className='bg-white border border-gray-400 rounded-xl text-black p-3 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium sm:min-w-35'
                                        placeholder='Enter Code'
                                    />
                                    <input
                                        className='w-full flex-1 bg-white text-black rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300'
                                        placeholder='Enter Desc..'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Account Details Section */}
                <div className='p-6  sm:px-4 md:px-6 py-1'>
                    <div className="bg-white p-3 sm:p-6 md:p-8 rounded-lg shadow-sm">
                        {/* Title */}
                        <h2 className="text-lg sm:text-xl font-medium text-gray-800 mb-4 sm:mb-6">Account Details</h2>
                        <div className="h-px bg-gray-200 mb-6 sm:mb-8"></div>

                        {/* First Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                            {/* Univ. Code */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">Univ. Code</label>
                                <input
                                    type="text"
                                    placeholder="Univ. Code"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-black text-sm sm:text-base"
                                />
                            </div>

                            {/* Print */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">Print</label>
                                <div className="flex items-center">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>

                            {/* Date of Opening */}
                            <div className="sm:col-span-2 md:col-span-1">
                                <label className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">Date of Opening</label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        placeholder="dd-mm-yyyy"
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm sm:text-base"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Second Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                            {/* TAN */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">TAN</label>
                                <input
                                    type="text"
                                    placeholder="TAN"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-black text-sm sm:text-base"
                                />
                            </div>

                            {/* PAN */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">PAN</label>
                                <input
                                    type="text"
                                    placeholder="PAN"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-black text-sm sm:text-base"
                                />
                            </div>

                            {/* Opening Balance */}
                            <div className="sm:col-span-2 md:col-span-1">
                                <label className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">Opening Balance</label>
                                <input
                                    type="text"
                                    placeholder="Opening Balance"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-black text-sm sm:text-base"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Debit Entries Section */}
                <div className='p-6  sm:px-4 md:px-6 py-1'>
                    <div className="bg-white rounded-lg p-3 sm:p-6 md:p-8">
                        {/* Title */}
                        <h2 className="text-lg sm:text-xl font-medium text-gray-800 mb-4 sm:mb-6">Debit Entries</h2>
                        <div className="h-px bg-gray-200 mb-6 sm:mb-8"></div>

                        {/* P&L Code and Description */}
                        <div className="mb-4 sm:mb-6">
                            {/* Mobile Layout */}
                            <div className="block sm:hidden">
                                <div className="mb-3">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm">P&L Code</label>
                                    <div className='bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center'>
                                        P&L Code
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm">P&L Description</label>
                                    <select className="w-full bg-white text-black rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none">
                                        <option value="">Select Account...</option>
                                        <option value="account1">Account 1 - Description</option>
                                        <option value="account2">Account 2 - Description</option>
                                        <option value="account3">Account 3 - Description</option>
                                    </select>
                                </div>
                            </div>

                            {/* Desktop Layout */}
                            <div className="hidden sm:block">
                                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2">
                                    <label className="block text-gray-700 font-medium text-sm sm:text-base">P&L Code</label>
                                    <label className="block text-gray-700 font-medium text-sm sm:text-base">P&L Description</label>
                                </div>
                                <div className="flex flex-row gap-3 sm:gap-4 items-center">
                                    <div className='bg-gray-200 text-gray-700 rounded-xl p-3 sm:min-w-35 font-medium flex items-center'>
                                        P&L Code
                                    </div>
                                    <select className="w-full flex-1 bg-white text-black rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none">
                                        <option value="">Select Account...</option>
                                        <option value="account1">Account 1 - Description</option>
                                        <option value="account2">Account 2 - Description</option>
                                        <option value="account3">Account 3 - Description</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* B.SH. Code and Description */}
                        <div className="mb-4 sm:mb-6">
                            {/* Mobile Layout */}
                            <div className="block sm:hidden">
                                <div className="mb-3">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm">B.SH. Code</label>
                                    <div className='bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center'>
                                        B.SH. Code
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm">B.SH. Description</label>
                                    <select className="w-full bg-white text-black rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none">
                                        <option value="">Select Account...</option>
                                        <option value="account1">Balance Sheet Account 1</option>
                                        <option value="account2">Balance Sheet Account 2</option>
                                        <option value="account3">Balance Sheet Account 3</option>
                                    </select>
                                </div>
                            </div>

                            {/* Desktop Layout */}
                            <div className="hidden sm:block">
                                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2">
                                    <label className="block text-gray-700 font-medium text-sm sm:text-base">B.SH. Code</label>
                                    <label className="block text-gray-700 font-medium text-sm sm:text-base">B.SH. Description</label>
                                </div>
                                <div className="flex flex-row gap-3 sm:gap-4 items-center">
                                    <div className='bg-gray-200 text-gray-700 rounded-xl p-3 sm:min-w-35 font-medium flex items-center'>
                                        B.SH. Code
                                    </div>
                                    <select className="w-full flex-1 bg-white text-black rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none">
                                        <option value="">Select Account...</option>
                                        <option value="account1">Balance Sheet Account 1</option>
                                        <option value="account2">Balance Sheet Account 2</option>
                                        <option value="account3">Balance Sheet Account 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* bShMaster */}
                        <div className="mb-4 sm:mb-6">
                            <label className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">bShMaster</label>
                        </div>
                    </div>
                </div>

                {/* Credit Entries Section */}
                <div className='p-6  sm:px-4 md:px-6 py-1'>
                    <div className="bg-white rounded-lg p-3 sm:p-6 md:p-8">
                        {/* Title */}
                        <h2 className="text-lg sm:text-xl font-medium text-gray-800 mb-4 sm:mb-6">Credit Entries</h2>
                        <div className="h-px bg-gray-200 mb-6 sm:mb-8"></div>

                        {/* P&L Code and Description */}
                        <div className="mb-4 sm:mb-6">
                            {/* Mobile Layout */}
                            <div className="block sm:hidden">
                                <div className="mb-3">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm">P&L Code</label>
                                    <div className='bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center'>
                                        P&L Code
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm">P&L Description</label>
                                    <select className="w-full bg-white text-black rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none">
                                        <option value="">Select Account...</option>
                                        <option value="account1">Account 1 - Description</option>
                                        <option value="account2">Account 2 - Description</option>
                                        <option value="account3">Account 3 - Description</option>
                                    </select>
                                </div>
                            </div>

                            {/* Desktop Layout */}
                            <div className="hidden sm:block">
                                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2">
                                    <label className="block text-gray-700 font-medium text-sm sm:text-base">P&L Code</label>
                                    <label className="block text-gray-700 font-medium text-sm sm:text-base">P&L Description</label>
                                </div>
                                <div className="flex flex-row gap-3 sm:gap-4 items-center">
                                    <div className='bg-gray-200 text-gray-700 rounded-xl p-3 sm:min-w-35 font-medium flex items-center'>
                                        P&L Code
                                    </div>
                                    <select className="w-full flex-1 bg-white text-black rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none">
                                        <option value="">Select Account...</option>
                                        <option value="account1">Account 1 - Description</option>
                                        <option value="account2">Account 2 - Description</option>
                                        <option value="account3">Account 3 - Description</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* B.SH. Code and Description */}
                        <div className="mb-4 sm:mb-6">
                            {/* Mobile Layout */}
                            <div className="block sm:hidden">
                                <div className="mb-3">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm">B.SH. Code</label>
                                    <div className='bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center'>
                                        B.SH. Code
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm">B.SH. Description</label>
                                    <select className="w-full bg-white text-black rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none">
                                        <option value="">Select Account...</option>
                                        <option value="account1">Balance Sheet Account 1</option>
                                        <option value="account2">Balance Sheet Account 2</option>
                                        <option value="account3">Balance Sheet Account 3</option>
                                    </select>
                                </div>
                            </div>

                            {/* Desktop Layout */}
                            <div className="hidden sm:block">
                                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2">
                                    <label className="block text-gray-700 font-medium text-sm sm:text-base">B.SH. Code</label>
                                    <label className="block text-gray-700 font-medium text-sm sm:text-base">B.SH. Description</label>
                                </div>
                                <div className="flex flex-row gap-3 sm:gap-4 items-center">
                                    <div className='bg-gray-200 text-gray-700 rounded-xl p-3 sm:min-w-35 font-medium flex items-center'>
                                        B.SH. Code
                                    </div>
                                    <select className="w-full flex-1 bg-white text-black rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none">
                                        <option value="">Select Account...</option>
                                        <option value="account1">Balance Sheet Account 1</option>
                                        <option value="account2">Balance Sheet Account 2</option>
                                        <option value="account3">Balance Sheet Account 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cash Flow Section */}
                <div className='p-6  sm:px-4 md:px-6 py-1'>
                    <div className="bg-white rounded-lg p-3 sm:p-6 md:p-8">
                        {/* Title */}
                        <h2 className="text-lg sm:text-xl font-medium text-gray-800 mb-4 sm:mb-6">Cash Flow</h2>
                        <div className="h-px bg-gray-200 mb-6 sm:mb-8"></div>

                        {/* Inflow Code and Description */}
                        <div className="mb-4 sm:mb-6">
                            {/* Mobile Layout */}
                            <div className="block sm:hidden">
                                <div className="mb-3">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm">Inflow Code</label>
                                    <div className='bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center'>
                                        Inflow
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm">Inflow Description</label>
                                    <select className="w-full bg-white text-black rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none">
                                        <option value="">Select Inflow...</option>
                                        <option value="inflow1">Operating Cash Inflow</option>
                                        <option value="inflow2">Investment Cash Inflow</option>
                                        <option value="inflow3">Financing Cash Inflow</option>
                                    </select>
                                </div>
                            </div>

                            {/* Desktop Layout */}
                            <div className="hidden sm:block">
                                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2">
                                    <label className="block text-gray-700 font-medium text-sm sm:text-base">Inflow Code</label>
                                    <label className="block text-gray-700 font-medium text-sm sm:text-base">Inflow Description</label>
                                </div>
                                <div className="flex flex-row gap-3 sm:gap-4 items-center">
                                    <div className='bg-gray-200 text-gray-700 rounded-xl p-3 sm:min-w-35 font-medium flex items-center'>
                                        Inflow
                                    </div>
                                    <select className="w-full flex-1 bg-white text-black rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none">
                                        <option value="">Select Inflow...</option>
                                        <option value="inflow1">Operating Cash Inflow</option>
                                        <option value="inflow2">Investment Cash Inflow</option>
                                        <option value="inflow3">Financing Cash Inflow</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Outflow Code and Description */}
                        <div className="mb-4 sm:mb-6">
                            {/* Mobile Layout */}
                            <div className="block sm:hidden">
                                <div className="mb-3">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm">Outflow Code</label>
                                    <div className='bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center'>
                                        Outflow
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm">Outflow Description</label>
                                    <select className="w-full bg-white text-black rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none">
                                        <option value="">Select Outflow...</option>
                                        <option value="outflow1">Operating Cash Outflow</option>
                                        <option value="outflow2">Investment Cash Outflow</option>
                                        <option value="outflow3">Financing Cash Outflow</option>
                                    </select>
                                </div>
                            </div>

                            {/* Desktop Layout */}
                            <div className="hidden sm:block">
                                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2">
                                    <label className="block text-gray-700 font-medium text-sm sm:text-base">Outflow Code</label>
                                    <label className="block text-gray-700 font-medium text-sm sm:text-base">Outflow Description</label>
                                </div>
                                <div className="flex flex-row gap-3 sm:gap-4 items-center">
                                    <div className='bg-gray-200 text-gray-700 rounded-xl p-3 sm:min-w-35 font-medium flex items-center'>
                                        Outflow
                                    </div>
                                    <select className="w-full flex-1 bg-white text-black rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none">
                                        <option value="">Select Outflow...</option>
                                        <option value="outflow1">Operating Cash Outflow</option>
                                        <option value="outflow2">Investment Cash Outflow</option>
                                        <option value="outflow3">Financing Cash Outflow</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* COP Section */}
                <div className='p-6 shadow-xl sm:px-4 md:px-6 py-1 pb-5'>
                    <div className="bg-white rounded-lg p-3 sm:p-6 md:p-8">
                        {/* Title */}
                        <h2 className="text-lg sm:text-xl font-medium text-gray-800 mb-4 sm:mb-6">COP</h2>
                        <div className="h-px bg-gray-200 mb-6 sm:mb-8"></div>

                        {/* COP Code and Dropdown */}
                        <div className="mb-8 sm:mb-12">
                            {/* Mobile Layout */}
                            <div className="block sm:hidden">
                                <div className="mb-3">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm">COP Code</label>
                                    <div className='bg-gray-200 text-gray-700 rounded-xl p-3 font-medium flex items-center'>
                                        COP Code
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="block text-gray-700 font-medium mb-2 text-sm">COP Description</label>
                                    <select className="w-full bg-white text-black rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none">
                                        <option value="">Select COP...</option>
                                        <option value="cop1">COP Option 1</option>
                                        <option value="cop2">COP Option 2</option>
                                        <option value="cop3">COP Option 3</option>
                                    </select>
                                </div>
                            </div>

                            {/* Desktop Layout */}
                            <div className="hidden sm:block">
                                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2">
                                    <label className="block text-gray-700 font-medium text-sm sm:text-base">COP Code</label>
                                    <label className="block text-gray-700 font-medium text-sm sm:text-base">COP Description</label>
                                </div>
                                <div className="flex flex-row gap-3 sm:gap-4 items-center">
                                    <div className='bg-gray-200 text-gray-700 rounded-xl p-3 sm:min-w-35 font-medium flex items-center'>
                                        COP Code
                                    </div>
                                    <select className="w-full flex-1 bg-white text-black rounded-xl border border-gray-300 p-3 outline-none focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none">
                                        <option value="">Select COP...</option>
                                        <option value="cop1">COP Option 1</option>
                                        <option value="cop2">COP Option 2</option>
                                        <option value="cop3">COP Option 3</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4">
                            <button className='flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#292F4E] text-white rounded-lg font-medium transform transition-all duration-300 hover:scale-105 text-sm sm:text-base'>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                SAVE
                            </button>
                            <button className='flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#292F4E] text-white rounded-lg font-medium transform transition-all duration-300 hover:scale-105 text-sm sm:text-base'>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                CANCEL
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account;