import React, { useState, useRef, useEffect } from 'react';
import { Bell, Settings, Home, ChevronRight, User, Menu, Clock, MessageCircle, Music, CreditCard, Search, Plus } from 'lucide-react';

const Navbar = ({ pageTitle = "Dashboard", toggleMobileSidebar = () => { } }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const notificationRef = useRef(null);

    // Sample notifications data
    const notifications = [
        {
            id: 1,
            type: 'message',
            icon: MessageCircle,
            iconBg: 'bg-orange-500',
            title: 'New Message',
            subtitle: 'From Laur',
            time: '13 minutes ago',
            avatar: '👨🏾',
            unread: true
        },
        {
            id: 2,
            type: 'music',
            icon: Music,
            iconBg: 'bg-green-500',
            title: 'New Album',
            subtitle: 'By Travis Scott',
            time: '1 day',
            unread: true
        },
        {
            id: 3,
            type: 'payment',
            icon: CreditCard,
            iconBg: 'bg-blue-500',
            title: 'Payment Successfully Completed',
            subtitle: '',
            time: '2 days',
            unread: false
        }
    ];

    const unreadCount = notifications.filter(n => n.unread).length;

    // Close notifications when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setIsNotificationsOpen(false);
            }
        };

        if (isNotificationsOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isNotificationsOpen]);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleNotifications = () => {
        setIsNotificationsOpen(!isNotificationsOpen);
    };

    const handleNotificationClick = (notificationId) => {
        // Handle notification click logic here
        console.log(`Clicked notification ${notificationId}`);
    };

    const markAllAsRead = () => {
        // Handle mark all as read logic here
        console.log('Mark all as read');
        setIsNotificationsOpen(false);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Handle search logic here
        console.log('Search query:', searchQuery);
    };

    const handleAddClick = () => {
        // Handle add button click logic here
        console.log('Add button clicked for', pageTitle);
    };

    const isNotDashboard = pageTitle !== "Dashboard";

    return (
        <div className="bg-[#EEEEF1] p-6 sm:p-4 md:p-6 min-w-0">
            {/* Main Navbar with rounded border and shadow */}
            <div className="w-full max-w-7xl mx-auto bg-white rounded-lg sm:rounded-xl shadow-sm p-2 sm:p-4 md:p-6 mb-4 md:mb-6 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 min-w-0">
                    {/* Top row on mobile: Page title and essential actions */}
                    <div className="flex items-center justify-between min-w-0 w-full sm:w-auto">
                        {/* Left side: Hamburger Menu (mobile) + Breadcrumb and page title */}
                        <div className="flex items-center flex-1 min-w-0 overflow-hidden">
                            {/* Mobile Hamburger Menu Button */}
                            <button
                                onClick={toggleMobileSidebar}
                                className="sm:hidden group relative flex items-center justify-center p-2 text-gray-600 hover:text-white bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-500 hover:to-gray-600 rounded-md shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-gray-200 hover:border-transparent mr-3"
                            >
                                <Menu size={16} className="transition-transform duration-200" />
                            </button>

                            <div className="min-w-0 flex-1 overflow-hidden">
                                {/* Breadcrumb navigation - hidden on mobile */}
                                <div className="hidden sm:flex items-center text-xs text-gray-500 mb-1 overflow-hidden">
                                    <div className="hover:text-gray-700 flex items-center flex-shrink-0">
                                        <Home size={12} className="mr-1" />
                                    </div>
                                    <ChevronRight size={10} className="mx-1 flex-shrink-0" />
                                    <div className="hover:text-gray-700 truncate min-w-0">
                                        {pageTitle}
                                    </div>
                                </div>

                                {/* Page title */}
                                <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl text-black font-bold truncate min-w-0">{pageTitle}</h1>
                            </div>
                        </div>

                        {/* Mobile essential actions - only most important buttons */}
                        <div className="flex sm:hidden items-center space-x-1 flex-shrink-0">
                            {/* Mobile Search and Add buttons (when not Dashboard) */}
                            {isNotDashboard && (
                                <>
                                    {/* Mobile Search Button */}
                                    <button className="group relative flex items-center justify-center p-2 text-gray-600 hover:text-white bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-500 hover:to-blue-600 rounded-md shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-gray-200 hover:border-transparent">
                                        <Search size={14} className="transition-transform duration-200" />
                                    </button>

                                    {/* Mobile Add Button */}
                                    <button
                                        onClick={handleAddClick}
                                        className="group relative flex items-center justify-center p-2 text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-md shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
                                    >
                                        <Plus size={14} className="transition-transform duration-200 group-hover:rotate-90" />
                                    </button>
                                </>
                            )}

                            {/* Notifications Button */}
                            <div className="relative" ref={notificationRef}>
                                <button
                                    onClick={toggleNotifications}
                                    className="group relative flex items-center justify-center p-2 text-gray-600 hover:text-white bg-gradient-to-r from-orange-50 to-red-50 hover:from-orange-500 hover:to-red-500 rounded-md shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-orange-100 hover:border-transparent"
                                >
                                    <Bell size={14} className="transition-transform duration-200 group-hover:animate-pulse" />
                                    {unreadCount > 0 && (
                                        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium shadow-lg animate-pulse">
                                            {unreadCount > 9 ? '9+' : unreadCount}
                                        </span>
                                    )}
                                </button>

                                {/* Mobile Notifications Dropdown */}
                                {isNotificationsOpen && (
                                    <div className="sm:hidden absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                                        <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                                            <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
                                            {unreadCount > 0 && (
                                                <button
                                                    onClick={markAllAsRead}
                                                    className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                                                >
                                                    Mark all read
                                                </button>
                                            )}
                                        </div>
                                        <div className="max-h-64 overflow-y-auto">
                                            {notifications.map((notification) => {
                                                const IconComponent = notification.icon;
                                                return (
                                                    <div
                                                        key={notification.id}
                                                        onClick={() => handleNotificationClick(notification.id)}
                                                        className={`px-4 py-3 hover:bg-gray-100 transition-colors duration-150 cursor-pointer border-b border-gray-50 last:border-b-0 group ${notification.unread ? 'bg-blue-50/50' : ''}`}
                                                    >
                                                        <div className="flex items-start space-x-3">
                                                            <div className="flex-shrink-0 relative">
                                                                {notification.avatar ? (
                                                                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm">
                                                                        {notification.avatar}
                                                                    </div>
                                                                ) : (
                                                                    <div className={`w-8 h-8 rounded-full ${notification.iconBg} flex items-center justify-center`}>
                                                                        <IconComponent size={16} className="text-white" />
                                                                    </div>
                                                                )}
                                                                {notification.unread && (
                                                                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-blue-500 rounded-full border border-white"></div>
                                                                )}
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <p className={`text-xs truncate transition-all duration-200 ${notification.unread ? 'font-semibold text-gray-800' : 'font-medium text-gray-600'}`}>
                                                                    {notification.title}
                                                                    {notification.subtitle && (
                                                                        <span className="text-gray-500 font-normal ml-1">
                                                                            {notification.subtitle}
                                                                        </span>
                                                                    )}
                                                                </p>
                                                                <div className="flex items-center mt-1 text-xs text-gray-500">
                                                                    <Clock size={10} className="mr-1" />
                                                                    <span>{notification.time}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Center: Search and Add button (only when not Dashboard) - Desktop only */}
                    {isNotDashboard && (
                        <div className="hidden sm:flex items-center space-x-3 flex-shrink-0 mx-4">
                            {/* Search Input */}
                            <div className="relative">
                                <div className="relative">
                                    <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder={`Search ${pageTitle.toLowerCase()}...`}
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit(e)}
                                        className="pl-10 text-black pr-4 py-2.5 w-64 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                                    />
                                </div>
                            </div>

                            {/* Add Button */}
                            <button
                                onClick={handleAddClick}
                                className="group relative flex items-center justify-center p-2.5 text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
                            >
                                <Plus size={18} className="transition-transform duration-200 group-hover:rotate-90" />
                                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                                    Add {pageTitle === "Accounts" ? "Account" : pageTitle === "Ledger" ? "Entry" : "New"}
                                </div>
                            </button>
                        </div>
                    )}

                    {/* Bottom row on mobile: Additional actions / Desktop: All actions */}
                    <div className="flex sm:hidden items-center justify-end space-x-1 mt-2 pt-2 border-t border-gray-100">
                        {/* Sign In Button */}
                        <button className="group relative flex items-center text-gray-700 hover:text-white px-2 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-500 hover:to-indigo-600 rounded-md shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-blue-100 hover:border-transparent">
                            <User size={12} className="mr-1 transition-all duration-200" />
                            <span className="font-semibold text-xs">SIGN IN</span>
                        </button>

                        {/* Settings Button */}
                        <button className="group relative flex items-center justify-center p-1.5 text-gray-600 hover:text-white bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-500 hover:to-emerald-600 rounded-md shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-green-100 hover:border-transparent">
                            <Settings size={14} className="transition-transform duration-200 group-hover:rotate-90" />
                        </button>
                    </div>

                    {/* Right side: Actions - Desktop only */}
                    <div className="hidden sm:flex items-center flex-shrink-0">
                        <div className="flex items-center space-x-1 md:space-x-2">
                            {/* Sign In Button */}
                            <button className="group relative flex items-center text-gray-700 hover:text-white px-3 md:px-4 py-2 md:py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-500 hover:to-indigo-600 rounded-lg md:rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-blue-100 hover:border-transparent">
                                <User size={16} className="md:w-4 md:h-4 mr-1.5 md:mr-2 transition-all duration-200" />
                                <span className="font-semibold text-sm md:text-base">SIGN IN</span>
                                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                                    Sign In
                                </div>
                            </button>

                            {/* Settings Button */}
                            <button className="group relative flex items-center justify-center p-2 md:p-3 text-gray-600 hover:text-white bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-500 hover:to-emerald-600 rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-green-100 hover:border-transparent">
                                <Settings size={18} className="md:w-5 md:h-5 transition-transform duration-200 group-hover:rotate-90" />
                                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                                    Settings
                                </div>
                            </button>

                            {/* Notifications Button with Dropdown */}
                            <div className="relative" ref={notificationRef}>
                                <button
                                    onClick={toggleNotifications}
                                    className="group relative flex items-center justify-center p-2 md:p-3 text-gray-600 hover:text-white bg-gradient-to-r from-orange-50 to-red-50 hover:from-orange-500 hover:to-red-500 rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-orange-100 hover:border-transparent"
                                >
                                    <Bell size={18} className="md:w-5 md:h-5 transition-transform duration-200 group-hover:animate-pulse" />
                                    {unreadCount > 0 && (
                                        <span className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium shadow-lg animate-pulse">
                                            {unreadCount > 9 ? '9+' : unreadCount}
                                        </span>
                                    )}
                                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                                        Notifications
                                    </div>
                                </button>

                                {/* Desktop Notifications Dropdown */}
                                {isNotificationsOpen && (
                                    <div className="hidden sm:block absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                                        <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                                            <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                                            {unreadCount > 0 && (
                                                <button
                                                    onClick={markAllAsRead}
                                                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                                                >
                                                    Mark all read
                                                </button>
                                            )}
                                        </div>
                                        <div className="max-h-96 overflow-y-auto">
                                            {notifications.map((notification) => {
                                                const IconComponent = notification.icon;
                                                return (
                                                    <div
                                                        key={notification.id}
                                                        onClick={() => handleNotificationClick(notification.id)}
                                                        className={`px-4 py-3 hover:bg-gray-100 transition-colors duration-150 cursor-pointer border-b border-gray-50 last:border-b-0 group ${notification.unread ? 'bg-blue-50/50' : ''}`}
                                                    >
                                                        <div className="flex items-start space-x-3">
                                                            <div className="flex-shrink-0 relative">
                                                                {notification.avatar ? (
                                                                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white text-lg">
                                                                        {notification.avatar}
                                                                    </div>
                                                                ) : (
                                                                    <div className={`w-10 h-10 rounded-full ${notification.iconBg} flex items-center justify-center`}>
                                                                        <IconComponent size={20} className="text-white" />
                                                                    </div>
                                                                )}
                                                                {notification.unread && (
                                                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
                                                                )}
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <div className="flex items-start justify-between">
                                                                    <div className="flex-1">
                                                                        <p className={`text-sm truncate transition-all duration-200 ${notification.unread ? 'font-semibold text-gray-800 group-hover:font-bold' : 'font-medium text-gray-600 group-hover:font-semibold group-hover:text-gray-800'}`}>
                                                                            {notification.title}
                                                                            {notification.subtitle && (
                                                                                <span className="text-gray-500 font-normal ml-1 group-hover:text-gray-600 transition-colors duration-200">
                                                                                    {notification.subtitle}
                                                                                </span>
                                                                            )}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex items-center mt-1 text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-200">
                                                                    <Clock size={12} className="mr-1" />
                                                                    <span>{notification.time}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Search Bar (shown when not Dashboard and on mobile) */}
                {isNotDashboard && (
                    <div className="sm:hidden mt-4 pt-4 border-t border-gray-100">
                        <div className="relative">
                            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder={`Search ${pageTitle.toLowerCase()}...`}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit(e)}
                                className="pl-10 text-black pr-4 py-2.5 w-full bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;