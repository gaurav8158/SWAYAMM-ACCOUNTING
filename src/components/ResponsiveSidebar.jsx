'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Home, FileText, BarChart3 } from 'lucide-react';
import Image from 'next/image';
import Navbar from './Navbar';

const ResponsiveSidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('dashboard'); // Track the active menu item

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const toggleMobileSidebar = () => {
        setIsMobileOpen(!isMobileOpen);
    };

    // Handle menu item clicks
    const handleMenuClick = (itemName) => {
        setActiveItem(itemName);
        // Close mobile sidebar after selection on mobile
        if (window.innerWidth < 768) {
            setIsMobileOpen(false);
        }
    };

    // Page titles based on active item
    const pageTitles = {
        'dashboard': 'Dashboard',
        'account': 'Account Management',
        'ledger': 'Financial Ledger'
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
                            <a
                                href="#"
                                className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-4'} py-3 rounded-xl transition-all duration-200 
                                ${activeItem === 'dashboard' ? 'bg-white shadow-sm' : 'hover:bg-white hover:shadow-sm'}`}
                                onClick={() => handleMenuClick('dashboard')}
                            >
                                <span className={`flex items-center justify-center w-10 h-10 rounded-lg
                                    ${activeItem === 'dashboard' ? 'bg-cyan-400 text-white' : 'text-blue-700'}`}>
                                    <Home size={20} />
                                </span>
                                {!isCollapsed && <span className="ml-3 text-gray-700 font-medium">Dashboard</span>}
                            </a>
                        </div>
                    </div>

                    {/* Master section */}
                    <div className="pt-2">
                        <h2 className={`text-xs font-semibold text-gray-500 mb-3 ${isCollapsed ? 'text-center' : 'px-4'}`}>MASTER</h2>
                        <div className="space-y-2">
                            <a
                                href="#"
                                className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-4'} py-3 rounded-xl transition-all duration-200
                                ${activeItem === 'account' ? 'bg-white shadow-sm' : 'hover:bg-white hover:shadow-sm'}`}
                                onClick={() => handleMenuClick('account')}
                            >
                                <span className={`flex items-center justify-center w-10 h-10 rounded-lg
                                    ${activeItem === 'account' ? 'bg-cyan-400 text-white' : 'text-blue-700'}`}>
                                    <BarChart3 size={20} />
                                </span>
                                {!isCollapsed && <span className="ml-3 text-gray-700 font-medium">Account</span>}
                            </a>
                            <a
                                href="#"
                                className={`flex items-center ${isCollapsed ? 'justify-center' : 'px-4'} py-3 rounded-xl transition-all duration-200
                                ${activeItem === 'ledger' ? 'bg-white shadow-sm' : 'hover:bg-white hover:shadow-sm'}`}
                                onClick={() => handleMenuClick('ledger')}
                            >
                                <span className={`flex items-center justify-center w-10 h-10 rounded-lg
                                    ${activeItem === 'ledger' ? 'bg-cyan-400 text-white' : 'text-blue-700'}`}>
                                    <BarChart3 size={20} />
                                </span>
                                {!isCollapsed && <span className="ml-3 text-gray-700 font-medium">Ledger</span>}
                            </a>
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
                                <button className="w-full py-2 bg-white bg-opacity-20 rounded-lg text-white text-sm font-medium hover:bg-opacity-30 transition-all duration-200">
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
                <div className="absolute top-24 -right-3 bg-white border border-gray-200 rounded-full p-1 shadow-md hidden md:block" onClick={toggleCollapse}>
                    {isCollapsed ? (
                        <ChevronRight size={16} className="text-gray-500" />
                    ) : (
                        <ChevronLeft size={16} className="text-gray-500" />
                    )}
                </div>
            </div>

            {/* Main content area */}
            <div className={`${isCollapsed ? 'md:ml-20' : 'md:ml-72'} transition-all duration-300 ease-in-out min-h-screen bg-[#EEEEF1]`}>
                {/* Nav bar with sidebar toggle for mobile */}
                <Navbar pageTitle={pageTitles[activeItem]} toggleMobileSidebar={toggleMobileSidebar} />

                {/* Your page content here */}
                <div className="p-6">
                    <div className="bg-white p-6 text-gray-700 rounded-xl shadow-sm mb-6">
                        <h2 className="text-lg font-medium mb-4">Welcome to {pageTitles[activeItem]}</h2>
                        <p className="text-gray-600">
                            This is the {activeItem} section of your application. You can customize this content
                            based on the active section. The sidebar and navbar will update accordingly.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-medium mb-3">Quick Stats</h3>
                            <p className="text-gray-600">View your key metrics at a glance</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-medium mb-3">Recent Activity</h3>
                            <p className="text-gray-600">See your latest actions and updates</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-medium mb-3">Upcoming Tasks</h3>
                            <p className="text-gray-600">Manage your priorities for the week</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResponsiveSidebar;