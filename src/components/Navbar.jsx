'use client'
import React, { useState } from 'react';
import { Bell, Settings, Home, ChevronRight, User, Menu } from 'lucide-react';
import Link from 'next/link';

const Navbar = ({ pageTitle = "Dashboard", toggleMobileSidebar = () => { } }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="bg-[#EEEEF1] p-6">
            {/* Main Navbar with rounded border and shadow */}
            <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm p-6 mb-6">
                <div className="flex items-center justify-between">
                    {/* Left side: Hamburger (mobile only) + Breadcrumb and page title */}
                    <div className="flex items-center">
                        {/* Hamburger menu for mobile - opens sidebar */}
                        <button
                            className="md:hidden p-2 mr-3 text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-200"
                            onClick={toggleMobileSidebar}
                        >
                            <Menu size={24} />
                        </button>

                        <div>
                            {/* Breadcrumb navigation */}
                            <div className="flex items-center text-sm text-gray-500 mb-1">
                                <Link href="/" className="hover:text-gray-700 flex items-center">
                                    <Home size={16} className="mr-1" />
                                </Link>
                                <ChevronRight size={14} className="mx-1" />
                                <Link href="/dashboard" className="hover:text-gray-700">
                                    {pageTitle}
                                </Link>
                            </div>

                            {/* Page title */}
                            <h1 className="text-2xl text-black font-bold">{pageTitle}</h1>
                        </div>
                    </div>

                    {/* Right side: Actions */}
                    <div className="flex items-center space-x-3">
                        {/* Desktop navigation items */}
                        <div className="hidden md:flex items-center space-x-3">
                            {/* Sign In Button */}
                            <button className="flex items-center text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200">
                                <User size={18} className="mr-2" />
                                <span className="font-medium">SIGN IN</span>
                            </button>

                            {/* Settings Button */}
                            <button className="p-2 text-gray-700 hover:text-blue-600 transition-all duration-200 rounded-lg hover:bg-gray-100">
                                <Settings size={22} />
                            </button>

                            {/* Notifications Button */}
                            <button className="p-2 text-gray-700 hover:text-blue-600 transition-all duration-200 rounded-lg hover:bg-gray-100 relative">
                                <Bell size={22} />
                                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                            </button>
                        </div>

                        {/* Mobile: User dropdown toggle */}
                        <div className="md:hidden relative">
                            <button
                                onClick={toggleMobileMenu}
                                className="flex items-center p-2 text-gray-700 hover:text-blue-600 rounded-lg hover:bg-gray-100"
                            >
                                <User size={20} />
                            </button>

                            {/* Mobile dropdown menu */}
                            {isMobileMenuOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-md z-10 py-2">
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                        Sign In
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                        Settings
                                    </a>
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                        Notifications
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;