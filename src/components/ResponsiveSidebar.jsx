'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Star, Home, FileText, BarChart3 } from 'lucide-react';
import Image from 'next/image';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Account from './Account';
import Ledger from './Ledger';

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
    const handleMenuClick = (e, itemName) => {
        e.preventDefault(); // Prevent default anchor behavior
        console.log('Menu clicked:', itemName); // Debug log
        setActiveItem(itemName);

        // Close mobile sidebar after selection on mobile
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
            setIsMobileOpen(false);
        }
    };

    // Page titles based on active item
    const pageTitles = {
        'dashboard': 'Dashboard',
        'account': 'Account Management',
        'ledger': 'Financial Ledger'
    };

    const renderContent = () => {
        console.log('Rendering content for:', activeItem); // Debug log

        switch (activeItem) {
            case 'dashboard':
                return <Dashboard
                    isCollapsed={isCollapsed}
                    activeItem={activeItem}
                    toggleMobileSidebar={toggleMobileSidebar}
                />;
            case 'account':
                return <Account
                    isCollapsed={isCollapsed}
                    activeItem={activeItem}
                    toggleMobileSidebar={toggleMobileSidebar} />;
            case 'ledger':
                return <Ledger
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
    }

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
                        </div>
                    </div>

                    {/* Master section */}
                    <div className="pt-2">
                        <h2 className={`text-xs font-semibold text-gray-500 mb-3 ${isCollapsed ? 'text-center' : 'px-4'}`}>MASTER</h2>
                        <div className="space-y-2">
                            <button
                                className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'px-4'} py-3 rounded-xl transition-all duration-200
                                ${activeItem === 'account' ? 'bg-white shadow-sm' : 'hover:bg-white hover:shadow-sm'}`}
                                onClick={(e) => handleMenuClick(e, 'account')}
                            >
                                <span className={`flex items-center justify-center w-10 h-10 rounded-lg
                                    ${activeItem === 'account' ? 'bg-blue-100 text-blue-600' : 'text-blue-700'}`}>
                                    <BarChart3 size={20} />
                                </span>
                                {!isCollapsed && <span className="ml-3 text-gray-700 font-medium">Account</span>}
                            </button>
                            <button
                                className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'px-4'} py-3 rounded-xl transition-all duration-200
                                ${activeItem === 'ledger' ? 'bg-white shadow-sm' : 'hover:bg-white hover:shadow-sm'}`}
                                onClick={(e) => handleMenuClick(e, 'ledger')}
                            >
                                <span className={`flex items-center justify-center w-10 h-10 rounded-lg
                                    ${activeItem === 'ledger' ? 'bg-blue-100 text-blue-600' : 'text-blue-700'}`}>
                                    <BarChart3 size={20} />
                                </span>
                                {!isCollapsed && <span className="ml-3 text-gray-700 font-medium">Ledger</span>}
                            </button>
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