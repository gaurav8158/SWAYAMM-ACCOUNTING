'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Star, Home, FileText, BarChart3 } from 'lucide-react';
import Image from 'next/image';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Account from './Account';
import Ledger from './Ledger';
import Narration from './Narration';
import Reports from './Reports';
import AddNewAccount from './AddNewAccount';
import CashVoucherEntry from './CashVoucherEntry';
import CashVoucherBackDate from './CashVoucherBackDate';
import BankVoucherEntry from './BankVoucherEntry';
import MultiEntryBankVoucher from './MultiEntryBankVoucher';
import BankVoucherForBackDateEntry from './BankVoucherForBackDateEntry';
import Journal_Sales_PurchaseVoucher from './Journal_Sales_PurchaseVoucher';
import Journal_Sales_PurchaseVoucherBackDate from './Journal_Sales_PurchaseVoucherBackDate';
import IncompleteVoucherduetoPowerFailure from './IncompleteVoucherduetoPowerFailure';
import IncompleteVoucherEntryBackDate from './IncompleteVoucherEntryBackDate';
import BankStatementEntry from './BankStatementEntry';
import TdsRegister from './TdsRegister';
import TdsChallanEntry from './TdsChallanEntry';

const ResponsiveSidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('dashboard');
    const [expandedSections, setExpandedSections] = useState({
        dashboard: true,
        master: false,
        transactionEntry: false,
        reports: false,
    });
    const [activeSubItem, setActiveSubItem] = useState({
        dashboard: 'overview',
        master: 'masterAccounts',
        transactionEntry: 'teNarration',
        reports: 'reportsBook',
    });

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const toggleMobileSidebar = () => {
        setIsMobileOpen(!isMobileOpen);
    };

    // Handle menu item clicks (for main sections like Dashboard, Master, Transaction Entry, Reports)
    const handleMenuClick = (e, itemName) => {
        e.preventDefault();
        console.log('Menu clicked:', itemName);

        // Toggle the expanded state for the clicked section
        setExpandedSections(prev => ({
            ...prev,
            [itemName]: !prev[itemName]
        }));

        // If the clicked item is a main section, set its default submenu as active
        if (itemName === 'master') setActiveItem(activeSubItem.master);
        else if (itemName === 'transactionEntry') setActiveItem(activeSubItem.transactionEntry);
        else if (itemName === 'reports') setActiveItem(activeSubItem.reports);
        else setActiveItem(itemName); // For Dashboard main item

        if (typeof window !== 'undefined' && window.innerWidth < 768) {
            setIsMobileOpen(false);
        }
    };

    // Handle submenu item clicks
    const handleSubMenuClick = (e, section, subItemName) => {
        e.preventDefault();
        console.log('Submenu clicked:', section, subItemName);
        setActiveSubItem({ ...activeSubItem, [section]: subItemName });
        setActiveItem(subItemName);

        if (typeof window !== 'undefined' && window.innerWidth < 768) {
            setIsMobileOpen(false);
        }
    };

    // Toggle section expansion
    const toggleSection = (section) => {
        setExpandedSections({ ...expandedSections, [section]: !expandedSections[section] });
    };

    // Page titles based on active item
    const pageTitles = {
        'dashboard': 'Dashboard',
        'overview': 'Overview',
        'analytics': 'Analytics',
        'settings': 'Settings',
        'masterAccounts': 'Accounts',
        'masterBank': 'Bank',
        'masterBankSeries': 'Bank Series',
        'masterCustomerVendor': 'Customer/Vendor',
        'masterCustomerVendorType': 'Customer/Vendor Type',
        'masterCustomerVendorClass': 'Customer/Vendor Class',
        'masterBalanceSheet': 'Balance Sheet',
        'masterCashFlow': 'Cash Flow',
        'masterCostCentre': 'Cost Centre',
        'masterProfitAndLoss': 'Profit & Loss',
        'masterCostOfProduction': 'Cost of Production',
        'masterLedger': 'Ledger',
        'masterResponsiblePerson': 'Responsible Person',
        'masterNarrationCategory': 'Narration Category',
        'teNarration': 'Narration',
        'teCashVoucher': 'Cash Voucher',
        'teCashVoucherBackDate': 'Cash Voucher BackDate',
        'teBankVoucher': 'Bank Voucher',
        'teBankVoucherMultiEntry': 'Bank Voucher (Multi Entry)',
        'teBankVoucherBackDate': 'Bank Voucher BackDate',
        'teJournalSalesPurchaseVoucher': 'Journal/Sales/Purchase Voucher',
        'teJournalSalesPurchaseVoucherBackDate': 'Journal/Sales/Purchase Voucher BackDate',
        'teIncompleteVoucherPowerFailure': 'Incomplete Voucher due to Power Failure',
        'teIncompleteVoucherBackDate': 'Incomplete Voucher (Back Date)',
        'teBankStatement': 'Bank Statement',
        'teTdsRegister': 'TDS Register',
        'teTdsChallanEntry': 'TDS Challan Entry',
        'reportsBook': 'Book',
        'reportsLedger': 'Ledger',
        'reportsTrialBalance': 'Trial Balance',
        'reportsStatementOfAccount': 'Statement Of Account',
        'reportsVoucherPrint': 'Voucher Print',
        'reportsDebtorsCreditors': 'Debtors/Creditors Reports',
        'reportsBalanceSheetPrint': 'Balance Sheet Print',
        'reportsProfitLoss': 'Profit & Loss Report',
        'reportsCashFlow': 'Cash Flow',
        'reportsMIS': 'MIS Report',
    };

    const renderContent = () => {
        console.log('Rendering content for:', activeItem);

        // Handle all submenu cases
        switch (activeItem) {
            // Dashboard cases
            case 'dashboard':
            case 'overview':
            case 'analytics':
            case 'settings':
                return <Dashboard
                    isCollapsed={isCollapsed}
                    activeItem={activeItem}
                    toggleMobileSidebar={toggleMobileSidebar}
                />;
            // Master submenus - Temporarily load Dashboard for all
            case 'masterAccounts':
            case 'masterBank':
            case 'masterBankSeries':
            case 'masterCustomerVendor':
            case 'masterCustomerVendorType':
            case 'masterCustomerVendorClass':
            case 'masterBalanceSheet':
            case 'masterCashFlow':
            case 'masterCostCentre':
            case 'masterProfitAndLoss':
            case 'masterCostOfProduction':
            case 'masterLedger':
            case 'masterResponsiblePerson':
            case 'masterNarrationCategory':
                return <Dashboard
                    isCollapsed={isCollapsed}
                    activeItem={activeItem}
                    toggleMobileSidebar={toggleMobileSidebar}
                />;
            // Transaction Entry cases - Temporarily load Dashboard for all
            case 'transactionEntry': // Main Transaction Entry item
            case 'teNarration':
                return <Narration
                    isCollapsed={isCollapsed}
                    activeItem={activeItem}
                    toggleMobileSidebar={toggleMobileSidebar}
                />
            case 'teCashVoucher':
                return <CashVoucherEntry
                    isCollapsed={isCollapsed}
                    activeItem={activeItem}
                    toggleMobileSidebar={toggleMobileSidebar}
                />
            case 'teCashVoucherBackDate':
                return <CashVoucherBackDate
                    isCollapsed={isCollapsed}
                    activeItem={activeItem}
                    toggleMobileSidebar={toggleMobileSidebar}
                />
            case 'teBankVoucher':
                return <BankVoucherEntry
                    isCollapsed={isCollapsed}
                    activeItem={activeItem}
                    toggleMobileSidebar={toggleMobileSidebar}

                />
            case 'teBankVoucherMultiEntry':
                return <MultiEntryBankVoucher
                    isCollapsed={isCollapsed}
                    activeItem={activeItem}
                    toggleMobileSidebar={toggleMobileSidebar}
                />
            case 'teBankVoucherBackDate':
                return <BankVoucherForBackDateEntry
                    isCollapsed={isCollapsed}
                    activeItem={activeItem}
                    toggleMobileSidebar={toggleMobileSidebar}
                />
            case 'teJournalSalesPurchaseVoucher':
                return <Journal_Sales_PurchaseVoucher
                    isCollapsed={isCollapsed}
                    activeItem={activeItem}
                    toggleMobileSidebar={toggleMobileSidebar}

                />
            case 'teJournalSalesPurchaseVoucherBackDate':
                return <Journal_Sales_PurchaseVoucherBackDate
                    isCollapsed={isCollapsed}
                    activeItem={activeItem}
                    toggleMobileSidebar={toggleMobileSidebar}
                />
            case 'teIncompleteVoucherPowerFailure':
                return <IncompleteVoucherduetoPowerFailure
                    isCollapsed={isCollapsed}
                    activeItem={activeItem}
                    toggleMobileSidebar={toggleMobileSidebar}
                />
            case 'teIncompleteVoucherBackDate':
                return <IncompleteVoucherEntryBackDate
                    isCollapsed={isCollapsed}
                    activeItem={activeItem}
                    toggleMobileSidebar={toggleMobileSidebar}
                />
            case 'teBankStatement':
                return <BankStatementEntry
                    isCollapsed={isCollapsed}
                    activeItem={activeItem}
                    toggleMobileSidebar={toggleMobileSidebar}
                />
            case 'teTdsRegister':
                return <TdsRegister
                    isCollapsed={isCollapsed}
                    activeItem={activeItem}
                    toggleMobileSidebar={toggleMobileSidebar}
                />
            case 'teTdsChallanEntry':
                return <TdsChallanEntry
                    isCollapsed={isCollapsed}
                    activeItem={activeItem}
                    toggleMobileSidebar={toggleMobileSidebar}
                />;
            // Reports submenus - Temporarily load Dashboard for all
            case 'reportsBook':
                return <Reports
                    isCollapsed={isCollapsed}
                    activeItem={activeItem}
                    toggleMobileSidebar={toggleMobileSidebar} />
            case 'reportsLedger':
            case 'reportsTrialBalance':
            case 'reportsStatementOfAccount':
            case 'reportsVoucherPrint':
            case 'reportsDebtorsCreditors':
            case 'reportsBalanceSheetPrint':
            case 'reportsProfitLoss':
            case 'reportsCashFlow':
            case 'reportsMIS':
                return <Dashboard
                    isCollapsed={isCollapsed}
                    activeItem={activeItem}
                    toggleMobileSidebar={toggleMobileSidebar}
                />;
            default:
                return <Dashboard
                    isCollapsed={isCollapsed}
                    activeItem={activeItem}
                    toggleMobileSidebar={toggleMobileSidebar}
                />;
        }
    };

    return (
        <>
            {/* Mobile menu overlay */}
            {isMobileOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-[#EEEEF1] bg-opacity-75 z-40"
                    onClick={toggleMobileSidebar}
                ></div>
            )}

            {/* Sidebar */}
            <div className={`
                ${isCollapsed ? 'w-20' : 'w-72'}
                ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                fixed h-full bg-[#EEEEF1] border-r border-gray-200 transition-all duration-300 ease-in-out z-50
                flex flex-col p-3
            `}>
                {/* Logo section */}
                <div className="p-4 flex items-center border-b border-gray-200 mb-2">
                    {!isCollapsed && (
                        <div className="flex items-center">
                            <div className="text-blue-600 font-bold flex">
                                <Image src='/img/logo.png' alt='Logo' width={24} height={24} className='h-10 w-10' />
                                <span className="ml-2 text-sm text-blue-600">FOCUS TRACKER SAMPLE</span>
                            </div>
                        </div>
                    )}
                    {isCollapsed && (
                        <div className="mx-auto text-orange-500">
                            <svg viewBox="0 0 24 24" width="28" height="28">
                                <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20" />
                                <path fill="#4f46e5" d="M10,17L15,12L10,7V17Z" />
                            </svg>
                        </div>
                    )}
                </div>

                {/* Menu sections */}
                <div className="flex-1 overflow-y-auto px-1">
                    {/* Dashboard section */}
                    <div className="pt-4">
                        <h2 className={`text-xs font-semibold text-gray-500 mb-3 ${isCollapsed ? 'text-center' : 'px-4'}`}>DASHBOARD</h2>
                        <div className="mb-6">
                            {/* Dashboard main item */}
                            <button
                                className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'px-4'} py-3 rounded-xl transition-all duration-200
                                ${activeItem === 'dashboard' ? 'bg-white shadow-sm' : 'hover:bg-white hover:shadow-sm'}`}
                                onClick={(e) => handleMenuClick(e, 'dashboard')}
                            >
                                <span className={`flex items-center justify-center w-10 h-10 rounded-lg
                                    ${activeItem === 'dashboard' ? 'bg-blue-100 text-blue-600' : 'text-blue-700'}`}>
                                    <Home size={20} />
                                </span>
                                {!isCollapsed && <span className="ml-3 text-gray-700 font-medium">Dashboard</span>}
                            </button>
                            {/* Dashboard submenus */}
                            {expandedSections.dashboard && !isCollapsed && (
                                <div className="ml-1 mt-2 space-y-2">
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200
                                        ${activeSubItem.dashboard === 'overview' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'dashboard', 'overview')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Overview</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200
                                        ${activeSubItem.dashboard === 'analytics' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'dashboard', 'analytics')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Analytics</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200
                                        ${activeSubItem.dashboard === 'settings' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'dashboard', 'settings')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Settings</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Master section */}
                    <div className="pt-2">
                        <h2 className={`text-xs font-semibold text-gray-500 mb-3 ${isCollapsed ? 'text-center' : 'px-4'}`}>MASTER</h2>
                        <div className="space-y-2">
                            {/* Master main item (clickable to expand/collapse) */}
                            <button
                                className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'px-4'} py-3 rounded-xl transition-all duration-200
                                ${expandedSections.master ? 'bg-white shadow-sm' : 'hover:bg-white hover:shadow-sm'}`}
                                onClick={(e) => handleMenuClick(e, 'master')}
                            >
                                <span className={`flex items-center justify-center w-10 h-10 rounded-lg
                                    ${expandedSections.master ? 'bg-blue-100 text-blue-600' : 'text-blue-700'}`}>
                                    <BarChart3 size={20} />
                                </span>
                                {!isCollapsed && <span className="ml-3 text-gray-700 font-medium">Master</span>}
                                {!isCollapsed && (
                                    <span className="ml-auto">
                                        {expandedSections.master ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                                    </span>
                                )}
                            </button>
                            {/* Master submenus */}
                            {expandedSections.master && !isCollapsed && (
                                <div className="ml-1 mt-2 space-y-2">
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200
                                        ${activeSubItem.master === 'masterAccounts' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'master', 'masterAccounts')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Accounts</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200
                                        ${activeSubItem.master === 'masterBank' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'master', 'masterBank')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Bank</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200
                                        ${activeSubItem.master === 'masterBankSeries' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'master', 'masterBankSeries')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Bank Series</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200
                                        ${activeSubItem.master === 'masterCustomerVendor' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'master', 'masterCustomerVendor')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Customer/Vendor</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200
                                        ${activeSubItem.master === 'masterCustomerVendorType' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'master', 'masterCustomerVendorType')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Customer/Vendor Type</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200
                                        ${activeSubItem.master === 'masterCustomerVendorClass' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'master', 'masterCustomerVendorClass')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Customer/Vendor Class</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200
                                        ${activeSubItem.master === 'masterBalanceSheet' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'master', 'masterBalanceSheet')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Balance Sheet</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200
                                        ${activeSubItem.master === 'masterCashFlow' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'master', 'masterCashFlow')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Cash Flow</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200
                                        ${activeSubItem.master === 'masterCostCentre' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'master', 'masterCostCentre')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Cost Centre</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200
                                        ${activeSubItem.master === 'masterProfitAndLoss' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'master', 'masterProfitAndLoss')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Profit & Loss</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200
                                        ${activeSubItem.master === 'masterCostOfProduction' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'master', 'masterCostOfProduction')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Cost of Production</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200
                                        ${activeSubItem.master === 'masterLedger' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'master', 'masterLedger')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Ledger</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200
                                        ${activeSubItem.master === 'masterResponsiblePerson' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'master', 'masterResponsiblePerson')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Responsible Person</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200
                                        ${activeSubItem.master === 'masterNarrationCategory' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'master', 'masterNarrationCategory')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Narration Category</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Transaction Entry section */}
                    <div className="pt-2">
                        <h2 className={`text-xs font-semibold text-gray-500 mb-3 ${isCollapsed ? 'text-center' : 'px-4'}`}>TRANSACTION ENTRY</h2>
                        <div className="space-y-2">
                            {/* Transaction Entry main item (clickable to expand/collapse) */}
                            <button
                                className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'px-4'} py-3 rounded-xl transition-all duration-200
                                ${expandedSections.transactionEntry ? 'bg-white shadow-sm' : 'hover:bg-white hover:shadow-sm'}`}
                                onClick={(e) => handleMenuClick(e, 'transactionEntry')}
                            >
                                <span className={`flex items-center justify-center w-10 h-10 rounded-lg
                                    ${expandedSections.transactionEntry ? 'bg-blue-100 text-blue-600' : 'text-blue-700'}`}>
                                    <BarChart3 size={20} />
                                </span>
                                {!isCollapsed && <span className="ml-3 text-gray-700 font-medium">Transaction Entry</span>}
                                {!isCollapsed && (
                                    <span className="ml-auto">
                                        {expandedSections.transactionEntry ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                                    </span>
                                )}
                            </button>
                            {/* Transaction Entry submenus */}
                            {expandedSections.transactionEntry && !isCollapsed && (
                                <div className="ml-1 mt-2 space-y-2">
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200 
                ${activeSubItem.transactionEntry === 'teNarration' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'transactionEntry', 'teNarration')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Narration</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200 
                ${activeSubItem.transactionEntry === 'teCashVoucher' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'transactionEntry', 'teCashVoucher')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Cash Voucher</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200 
                ${activeSubItem.transactionEntry === 'teCashVoucherBackDate' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'transactionEntry', 'teCashVoucherBackDate')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Cash Voucher BackDate</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200 
                ${activeSubItem.transactionEntry === 'teBankVoucher' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'transactionEntry', 'teBankVoucher')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Bank Voucher</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200 
                ${activeSubItem.transactionEntry === 'teBankVoucherMultiEntry' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'transactionEntry', 'teBankVoucherMultiEntry')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Bank Voucher (Multi Entry)</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200 
                ${activeSubItem.transactionEntry === 'teBankVoucherBackDate' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'transactionEntry', 'teBankVoucherBackDate')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Bank Voucher BackDate</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200 
                ${activeSubItem.transactionEntry === 'teJournalSalesPurchaseVoucher' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'transactionEntry', 'teJournalSalesPurchaseVoucher')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Journal/Sales/Purchase Voucher</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200 
                ${activeSubItem.transactionEntry === 'teJournalSalesPurchaseVoucherBackDate' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'transactionEntry', 'teJournalSalesPurchaseVoucherBackDate')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Journal/Sales/Purchase Voucher BackDate</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200 
                ${activeSubItem.transactionEntry === 'teIncompleteVoucherPowerFailure' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'transactionEntry', 'teIncompleteVoucherPowerFailure')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Incomplete Voucher (Power Failure)</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200 
                ${activeSubItem.transactionEntry === 'teIncompleteVoucherBackDate' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'transactionEntry', 'teIncompleteVoucherBackDate')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Incomplete Voucher (Back Date)</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200 
                ${activeSubItem.transactionEntry === 'teBankStatement' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'transactionEntry', 'teBankStatement')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Bank Statement</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200 
                ${activeSubItem.transactionEntry === 'teTdsRegister' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'transactionEntry', 'teTdsRegister')}
                                    >
                                        <span className="ml-3 text-sm font-medium">TDS Register</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200 
                ${activeSubItem.transactionEntry === 'teTdsChallanEntry' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'transactionEntry', 'teTdsChallanEntry')}
                                    >
                                        <span className="ml-3 text-sm font-medium">TDS Challan Entry</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Reports section */}
                    <div className="pt-2">
                        <h2 className={`text-xs font-semibold text-gray-500 mb-3 ${isCollapsed ? 'text-center' : 'px-4'}`}>REPORTS</h2>
                        <div className="space-y-2">
                            {/* Reports main item (clickable to expand/collapse) */}
                            <button
                                className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'px-4'} py-3 rounded-xl transition-all duration-200
                                ${expandedSections.reports ? 'bg-white shadow-sm' : 'hover:bg-white hover:shadow-sm'}`}
                                onClick={(e) => handleMenuClick(e, 'reports')}
                            >
                                <span className={`flex items-center justify-center w-10 h-10 rounded-lg
                                    ${expandedSections.reports ? 'bg-blue-100 text-blue-600' : 'text-blue-700'}`}>
                                    <BarChart3 size={20} />
                                </span>
                                {!isCollapsed && <span className="ml-3 text-gray-700 font-medium">Reports</span>}
                                {!isCollapsed && (
                                    <span className="ml-auto">
                                        {expandedSections.reports ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                                    </span>
                                )}
                            </button>
                            {/* Reports submenus */}
                            {expandedSections.reports && !isCollapsed && (
                                <div className="ml-1 mt-2 space-y-2">
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200 
                ${activeSubItem.reports === 'reportsBook' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'reports', 'reportsBook')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Book</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200 
                ${activeSubItem.reports === 'reportsLedger' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'reports', 'reportsLedger')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Ledger</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200 
                ${activeSubItem.reports === 'reportsTrialBalance' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'reports', 'reportsTrialBalance')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Trial Balance</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200 
                ${activeSubItem.reports === 'reportsStatementOfAccount' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'reports', 'reportsStatementOfAccount')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Statement Of Account</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200 
                ${activeSubItem.reports === 'reportsVoucherPrint' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'reports', 'reportsVoucherPrint')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Voucher Print</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200 
                ${activeSubItem.reports === 'reportsDebtorsCreditors' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'reports', 'reportsDebtorsCreditors')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Debtors/Creditors Reports</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200 
                ${activeSubItem.reports === 'reportsBalanceSheetPrint' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'reports', 'reportsBalanceSheetPrint')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Balance Sheet Print</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200 
                ${activeSubItem.reports === 'reportsProfitLoss' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'reports', 'reportsProfitLoss')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Profit & Loss Report</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200 
                ${activeSubItem.reports === 'reportsCashFlow' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'reports', 'reportsCashFlow')}
                                    >
                                        <span className="ml-3 text-sm font-medium">Cash Flow</span>
                                    </button>
                                    <button
                                        className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200 
                ${activeSubItem.reports === 'reportsMIS' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                                        onClick={(e) => handleSubMenuClick(e, 'reports', 'reportsMIS')}
                                    >
                                        <span className="ml-3 text-sm font-medium">MIS Report</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Help section with gradient */}
                <div className="p-3 mt-auto">
                    <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-blue-400 to-blue-600 text-white p-4">
                        <div className="flex items-center mb-2">
                            <div className="bg-white p-2 rounded-lg">
                                <Star size={20} className="text-blue-500" />
                            </div>
                        </div>
                        {!isCollapsed && (
                            <>
                                <h4 className="text-lg font-medium mb-1">Need help?</h4>
                                <p className="text-sm text-blue-100 mb-4">Please check our docs</p>
                                <button className="w-full py-2 bg-transparent text-gray-800 font-bold hover:text-cyan-400 bg-opacity-20 rounded-lg text-sm font-medium hover:bg-opacity-30 transition-all duration-200">
                                    DOCUMENTATION
                                </button>
                            </>
                        )}
                    </div>
                </div>

                {/* Upgrade to Pro button */}
                {!isCollapsed && (
                    <div className="p-3 border-t border-gray-200">
                        <button className="w-full py-3 bg-blue-500 text-white rounded-xl font-medium transform transition-all duration-300 hover:scale-105 hover:bg-blue-600 shadow-sm">
                            UPGRADE TO PRO
                        </button>
                    </div>
                )}

                {/* Collapse toggle button - desktop only */}
                <button
                    className="absolute top-24 -right-3 bg-white border border-gray-200 rounded-full p-1 shadow-md hidden md:block"
                    onClick={toggleCollapse}
                >
                    {isCollapsed ? (
                        <ChevronRight size={16} className="text-gray-500" />
                    ) : (
                        <ChevronLeft size={16} className="text-gray-500" />
                    )}
                </button>
            </div>

            {/* Main content area */}
            {renderContent()}

        </>
    );
};

export default ResponsiveSidebar;