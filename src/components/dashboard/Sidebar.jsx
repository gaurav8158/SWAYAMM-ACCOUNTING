"use client";
import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  FileText,
  BarChart3,
  Menu,
  X,
  Text,
  Crown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// Define the transaction history items
const transactionSubMenuItems = [
  { id: "teNarration", label: "Narration", path: "/dashboard/narration" },
  {
    id: "teCashVoucher",
    label: "Cash Voucher",
    path: "/dashboard/cash-voucher",
  },
  {
    id: "teCashVoucherBackDate",
    label: "Cash Voucher BackDate",
    path: "/dashboard/cash-voucher-backdate",
  },
  {
    id: "teBankVoucher",
    label: "Bank Voucher",
    path: "/dashboard/bank-voucher",
  },

  {
    id: "teBankVoucherBackDate",
    label: "Bank Voucher BackDate",
    path: "/dashboard/bank-voucher-backdate",
  },
  {
    id: "teJournalSalesPurchaseVoucher",
    label: "Journal/Sales/Purchase Voucher",
    path: "/dashboard/sales-voucher",
  },
  {
    id: "teJournalSalesPurchaseVoucherBackDate",
    label: "Journal/Sales/Purchase Voucher BackDate",
    path: "/dashboard/sales-voucher-backdate",
  },

  {
    id: "teBankStatement",
    label: "Bank Statement",
    path: "/dashboard/bank-statement",
  },
  {
    id: "teTdsRegister",
    label: "TDS Register",
    path: "/dashboard/tds-register",
  },
  {
    id: "teTdsChallanEntry",
    label: "TDS Challan Entry",
    path: "/dashboard/tds-challan-entry",
  },
];
const reportsItems = [
  { id: "teBook", label: "Book", path: "/dashboard/book" },
  { id: "teLedger", label: "Ledger", path: "/dashboard/ledger-report" },
  {
    id: "teTrialBalance",
    label: "Trial Balance",
    path: "/dashboard/trial-balance",
  },
  {
    id: "teStatementOfAccount",
    label: "Statement Of Account",
    path: "/dashboard/statement-of-account",
  },
  {
    id: "teVoucherPrint",
    label: "Voucher Print",
    path: "/dashboard/voucher-print",
  },
  {
    id: "teDebtorsCreditorsReports",
    label: "Debtors/Creditors Reports",
    path: "/dashboard/debtors-creditors-reports",
  },
  {
    id: "teBalanceSheetPrint",
    label: "Balance Sheet Print",
    path: "/dashboard/balance-sheet-print",
  },
  {
    id: "teProfitLossReport",
    label: "Profit & Loss Report",
    path: "/dashboard/profit-loss-report",
  },
  { id: "teCashFlow", label: "Cash Flow", path: "/dashboard/cash-flow-report" },
  { id: "teMISReport", label: "MIS Report", path: "/dashboard/mis-report" },
];
const dashboardItems = [
  { id: "teAccounts", label: "Accounts", path: "/dashboard/accounts" },
  { id: "teBank", label: "Bank", path: "/dashboard/bank" },
  { id: "teBankSeries", label: "Bank Series", path: "/dashboard/bank-series" },
  {
    id: "teCustomerVendor",
    label: "Customer/Vendor",
    path: "/dashboard/customer-vendor",
  },
  {
    id: "teCustomerVendorType",
    label: "Customer/Vendor Type",
    path: "/dashboard/customer-vendor-type",
  },
  {
    id: "teCustomerVendorClass",
    label: "Customer/Vendor Class",
    path: "/dashboard/customer-vendor-class",
  },
  {
    id: "teBalanceSheet",
    label: "Balance Sheet",
    path: "/dashboard/balance-sheet",
  },
  { id: "teCashFlow", label: "Cash Flow", path: "/dashboard/cash-flow" },
  { id: "teCostCentre", label: "Cost Centre", path: "/dashboard/cost-centre" },
  {
    id: "teProfitLoss",
    label: "Profit & Loss",
    path: "/dashboard/profit-loss",
  },
  {
    id: "teCostOfProduction",
    label: "Cost of Production",
    path: "/dashboard/cost-of-production",
  },
  { id: "teLedger", label: "Ledger", path: "/dashboard/ledger" },
  {
    id: "teResponsiblePerson",
    label: "Responsible Person",
    path: "/dashboard/responsible-person",
  },
  {
    id: "teNarrationCategory",
    label: "Narration Category",
    path: "/dashboard/narration-category",
  },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");
  const [expandedSections, setExpandedSections] = useState({
    dashboard: true,
    master: false,
    transactionEntry: false,
    reports: false,
  });
  const [activeSubItem, setActiveSubItem] = useState({
    dashboard: "overview",
    master: "masterAccounts",
    transactionEntry: "teNarration",
    reports: "reportsBook",
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
    console.log("Menu clicked:", itemName);

    // Toggle the expanded state for the clicked section
    setExpandedSections((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));

    // If the clicked item is a main section, set its default submenu as active
    if (itemName === "master") setActiveItem(activeSubItem.master);
    else if (itemName === "transactionEntry")
      setActiveItem(activeSubItem.transactionEntry);
    else if (itemName === "reports") setActiveItem(activeSubItem.reports);
    else setActiveItem(itemName); // For Dashboard main item

    // if (typeof window !== "undefined" && window.innerWidth < 768) {
    //   setIsMobileOpen(false);
    // }
  };

  return (
    <>
      <button
        onClick={toggleMobileSidebar}
        className="sm:hidden z-50 group absolute top-10 left-8 flex items-center justify-center p-2 text-gray-600 hover:text-white bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-500 hover:to-gray-600 rounded-md shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-gray-200 hover:border-transparent mr-3"
      >
        <Text size={16} className="transition-transform duration-200" />
      </button>
      {/* Sidebar */}
      <div
        className={`
                ${isCollapsed ? "w-32" : "w-72"}
                ${
                  isMobileOpen
                    ? "translate-x-0 "
                    : "-translate-x-full   md:translate-x-0"
                }
                 h-full fixed md:relative bg-[#EEEEF1] border-r border-gray-200 transition-all duration-300 ease-in-out z-50
                flex flex-col p-3
            `}
      >
        {/* Logo section */}
        <div className="p-4 flex items-center border-b border-gray-200 mb-2">
          {!isCollapsed && (
            <div className="flex items-center">
              <div className="text-blue-600   items-center font-bold flex">
                <Image
                  src="/img/logo.png"
                  alt="Logo"
                  width={24}
                  height={24}
                  className="h-10 w-10"
                />
                <span className="ml-2 text-sm text-blue-600">
                  SWAYAMM <br /> ACCOUNTING
                </span>
              </div>
            </div>
          )}
          {isCollapsed && (
            <div className="mx-auto text-orange-500">
              <Image
                src="/img/logo.png"
                alt="Logo"
                width={24}
                height={24}
                className="h-10 w-10"
              />
            </div>
          )}
        </div>

        {/* Menu sections */}
        <div className="flex-1 overflow-y-auto custom-scrollbar px-1">
          {/* Dashboard section */}
          <div className="pt-4">
            <h2
              className={`text-xs font-semibold text-gray-500 mb-3 ${
                isCollapsed ? "text-center" : "px-4"
              }`}
            >
              DASHBOARD
            </h2>
            <div className={`${isCollapsed ? "mb-0" : "mb-6"}`}>
              {/* Dashboard main item */}
              <Link href="/dashboard">
                <button
                  className={`w-full flex items-center ${
                    isCollapsed ? "justify-center" : "px-4"
                  } py-3 rounded-xl transition-all duration-200
                                ${
                                  activeItem === "dashboard"
                                    ? "bg-white shadow-sm"
                                    : "hover:bg-white hover:shadow-sm"
                                }`}
                  // onClick={(e) => handleMenuClick(e, "dashboard")}
                  onClick={() => setIsMobileOpen(false)}
                >
                  <span
                    className={`flex items-center justify-center w-10 h-10 rounded-lg
                                    ${
                                      activeItem === "dashboard"
                                        ? "bg-blue-100 text-blue-600"
                                        : "text-blue-700"
                                    }`}
                  >
                    <Home size={20} />
                  </span>
                  {!isCollapsed && (
                    <span className="ml-3 text-gray-700 font-medium">
                      Dashboard
                    </span>
                  )}
                </button>{" "}
              </Link>
              {/* Dashboard submenus */}
              {/* {expandedSections.dashboard && !isCollapsed && (
                <div className="ml-1 mt-2 space-y-2">
                  <button
                    className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200
                                        ${
                                          activeSubItem.dashboard === "overview"
                                            ? "bg-blue-50 text-blue-600"
                                            : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                                        }`}
                    onClick={(e) =>
                      handleSubMenuClick(e, "dashboard", "overview")
                    }
                  >
                    <span className="ml-3 text-sm font-medium">Overview</span>
                  </button>
                  <button
                    className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200
                                        ${
                                          activeSubItem.dashboard ===
                                          "analytics"
                                            ? "bg-blue-50 text-blue-600"
                                            : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                                        }`}
                    onClick={(e) =>
                      handleSubMenuClick(e, "dashboard", "analytics")
                    }
                  >
                    <span className="ml-3 text-sm font-medium">Analytics</span>
                  </button>
                  <button
                    className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200
                                        ${
                                          activeSubItem.dashboard === "settings"
                                            ? "bg-blue-50 text-blue-600"
                                            : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                                        }`}
                    onClick={(e) =>
                      handleSubMenuClick(e, "dashboard", "settings")
                    }
                  >
                    <span className="ml-3 text-sm font-medium">Settings</span>
                  </button>
                </div>
              )} */}
            </div>
          </div>

          {/* Master Entry section */}
          <div className="pt-2">
            <h2
              className={`text-xs font-semibold text-gray-500 mb-3 ${
                isCollapsed ? "text-center " : "px-4"
              }`}
            >
              MASTER
            </h2>
            <div className="space-y-2">
              {/* Transaction Entry main item (clickable to expand/collapse) */}
              <button
                className={`w-full flex items-center ${
                  isCollapsed ? "justify-center" : "px-4"
                } py-3 rounded-xl transition-all duration-200
                      ${
                        expandedSections.master
                          ? "bg-white shadow-sm"
                          : "hover:bg-white hover:shadow-sm"
                      }`}
                onClick={(e) => handleMenuClick(e, "master")}
              >
                <span
                  className={`flex items-center justify-center w-10 h-10 rounded-lg
                          ${
                            expandedSections.master
                              ? "bg-blue-100 text-blue-600"
                              : "text-blue-700"
                          }`}
                >
                  {" "}
                  <Crown size={20} />
                </span>
                {!isCollapsed && (
                  <span className="ml-3 text-gray-700 font-medium">MASTER</span>
                )}
                {!isCollapsed && (
                  <span className="ml-auto">
                    <ChevronRight
                      className={`transform transition-transform duration-300 ease-in-out ${
                        expandedSections.master ? "rotate-90" : "rotate-0"
                      }`}
                      size={16}
                    />
                  </span>
                )}
              </button>

              {/* Transaction Entry submenus - Rendered from array */}
              {expandedSections.master && !isCollapsed && (
                <div className="ml-1 mt-2 space-y-2">
                  {dashboardItems.map((item) => (
                    <Link
                      key={item.id}
                      href={item.path}
                      onClick={() => setIsMobileOpen(false)}
                      className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200 
              ${
                activeSubItem.master === item.id
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
                    >
                      <span className="ml-3 text-sm font-medium">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* Transaction Entry section */}
          <div className="pt-2">
            <h2
              className={`text-xs font-semibold text-gray-500 mb-3 ${
                isCollapsed ? "text-center" : "px-4"
              }`}
            >
              TRANSACTION ENTRY
            </h2>
            <div className="space-y-2">
              {/* Transaction Entry main item (clickable to expand/collapse) */}
              <button
                className={`w-full flex items-center ${
                  isCollapsed ? "justify-center" : "px-4"
                } py-3 rounded-xl transition-all duration-200
                      ${
                        expandedSections.transactionEntry
                          ? "bg-white shadow-sm"
                          : "hover:bg-white hover:shadow-sm"
                      }`}
                onClick={(e) => handleMenuClick(e, "transactionEntry")}
              >
                <span
                  className={`flex items-center justify-center w-10 h-10 rounded-lg
                          ${
                            expandedSections.transactionEntry
                              ? "bg-blue-100 text-blue-600"
                              : "text-blue-700"
                          }`}
                >
                  <BarChart3 size={20} />
                </span>
                {!isCollapsed && (
                  <span className="ml-3 text-gray-700 font-medium">
                    Transaction Entry
                  </span>
                )}
                {!isCollapsed && (
                  <span className="ml-auto">
                    <ChevronRight
                      className={`transform transition-transform duration-300 ease-in-out ${
                        expandedSections.transactionEntry
                          ? "rotate-90"
                          : "rotate-0"
                      }`}
                      size={16}
                    />
                  </span>
                )}
              </button>

              {/* Transaction Entry submenus - Rendered from array */}
              {expandedSections.transactionEntry && !isCollapsed && (
                <div className="ml-1 mt-2 space-y-2">
                  {transactionSubMenuItems.map((item) => (
                    <Link
                      key={item.id}
                      href={item.path}
                      onClick={() => setIsMobileOpen(false)}
                      className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200 
              ${
                activeSubItem.transactionEntry === item.id
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
                    >
                      <span className="ml-3 text-sm font-medium">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Reports section */}
          <div className="pt-2">
            <h2
              className={`text-xs font-semibold text-gray-500 mb-3 ${
                isCollapsed ? "text-center" : "px-4"
              }`}
            >
              REPORTS
            </h2>
            <div className="space-y-2">
              {/* Reports main item (clickable to expand/collapse) */}
              <button
                className={`w-full flex items-center ${
                  isCollapsed ? "justify-center" : "px-4"
                } py-3 rounded-xl transition-all duration-200
                      ${
                        expandedSections.reports
                          ? "bg-white shadow-sm"
                          : "hover:bg-white hover:shadow-sm"
                      }`}
                onClick={(e) => handleMenuClick(e, "reports")}
              >
                <span
                  className={`flex items-center justify-center w-10 h-10 rounded-lg
                          ${
                            expandedSections.reports
                              ? "bg-blue-100 text-blue-600"
                              : "text-blue-700"
                          }`}
                >
                  <FileText size={20} />
                </span>
                {!isCollapsed && (
                  <span className="ml-3 text-gray-700 font-medium">
                    Reports
                  </span>
                )}
                {!isCollapsed && (
                  <span className="ml-auto">
                    <ChevronRight
                      className={`transform transition-transform duration-300 ease-in-out ${
                        expandedSections.reports ? "rotate-90" : "rotate-0"
                      }`}
                      size={16}
                    />
                  </span>
                )}
              </button>

              {/* Reports submenus - Rendered from array */}
              {expandedSections.reports && !isCollapsed && (
                <div className="ml-1 mt-2 space-y-2">
                  {reportsItems?.map((item) => (
                    <Link
                      key={item.id}
                      href={item.path}
                      onClick={() => setIsMobileOpen(false)}
                      className={`w-full flex items-center px-4 py-2 rounded-lg transition-all duration-200 
              ${
                activeSubItem.reports === item.id
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
                    >
                      <span className="ml-3 text-sm font-medium">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Collapse toggle button - desktop only */}
        {isMobileOpen && (
          <button
            className="absolute top-7 -right-4 bg-white border border-gray-200 rounded-full p-3 shadow-md "
            onClick={toggleMobileSidebar}
          >
            <X size={24} className="text-gray-500" />
          </button>
        )}
        <button
          className="absolute top-24 -right-3 bg-white border border-gray-200 rounded-full p-2 shadow-md hidden md:block"
          onClick={toggleCollapse}
        >
          {isCollapsed ? (
            <ChevronRight size={16} className="text-gray-500" />
          ) : (
            <ChevronLeft size={16} className="text-gray-500" />
          )}
        </button>
      </div>
    </>
  );
};

export default Sidebar;
