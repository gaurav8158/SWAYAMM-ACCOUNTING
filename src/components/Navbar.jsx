"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Settings,
  Home,
  ChevronRight,
  User,
  Search,
  Plus,
  X,
} from "lucide-react";
import Link from "next/link";

const Navbar = ({ pageTitle = "Dashboard", menu }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const notificationRef = useRef(null);

  // Close notifications when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setIsNotificationsOpen(false);
      }
    };

    if (isNotificationsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isNotificationsOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };

  const handleAddClick = () => {
    console.log("Add button clicked for", pageTitle);
  };

  const isNotDashboard = pageTitle !== "Dashboard";

  return (
    <div className=" bg-[#EEEEF1] font-poppins p-6 sm:p-4 md:p-6 min-w-0">
      {/* Main Navbar Container */}
      <div className="w-full max-w-7xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 p-4 lg:p-6 min-w-0">
        {/* Main Navigation Row */}
        <div className="flex items-center justify-between gap-4 min-w-0">
          {/* Left Section: Menu Button + Title */}
          <div className="flex items-center min-w-0 flex-1">
            {/* Mobile Menu Button - Only visible on mobile */}

            {/* Title Section */}
            <div className="min-w-0 flex-1">
              {/* Breadcrumb - Hidden on mobile, visible on desktop */}
              <div className="hidden md:flex items-center text-xs text-gray-500 mb-1.5">
                <Link href="/dashboard">
                  <div className="hover:text-blue-600 flex items-center cursor-pointer transition-colors duration-200">
                    <Home size={12} className="mr-1.5" />
                    <span>Home</span>
                  </div>{" "}
                </Link>
                <ChevronRight size={10} className="mx-2 text-gray-400" />
                <div className="font-poppins hover:text-blue-600 truncate cursor-pointer transition-colors duration-200">
                  {menu || pageTitle}
                </div>
              </div>

              {/* Page Title */}
              <h1 className="font-poppins text-lg md:text-lg lg:text-xl text-gray-900 font-bold truncate ml-10 sm:ml-0">
                {pageTitle}
              </h1>
            </div>
          </div>

          {/* Center Section: Search - Hidden on mobile, visible on desktop when not Dashboard */}
          <div
            className={`${
              isNotDashboard ? "hidden lg:flex" : "hidden"
            } items-center flex-shrink-0 mx-6`}
          >
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder={`Search ${pageTitle.toLowerCase()}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearchSubmit(e)}
                className="pl-10 pr-4 py-2.5 w-80 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm text-gray-900 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Right Section: Action Buttons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Add Button - Responsive sizing and visibility */}
            <button
              onClick={handleAddClick}
              className={`${
                isNotDashboard ? "flex" : "hidden"
              } items-center justify-center p-2 lg:p-2.5 text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 group`}
            >
              <Plus
                size={16}
                className="lg:w-5 lg:h-5 transition-transform duration-200 group-hover:rotate-90"
              />
            </button>

            {/* Sign In Button - Responsive text */}
            <button className="flex items-center text-gray-700  bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-500 hover:to-indigo-600 rounded-lg md:rounded-xl shadow-sm hover:shadow-lg hover:text-white transition-all duration-300 transform hover:scale-105  border-blue-100 hover:border-transparent px-3 lg:px-4 py-2 lg:py-2.5  border   ">
              <User size={16} className="lg:w-4 lg:h-4 mr-0 sm:mr-2" />
              <span className="font-semibold text-sm hidden sm:inline">
                SIGN IN
              </span>
            </button>

            <button className="flex items-center justify-center p-2 lg:p-2.5 text-gray-600 hover:text-green-600 bg-green-100 hover:bg-green-200 rounded-lg transition-all duration-200 group">
              <Settings
                size={16}
                className="lg:w-5 lg:h-5 transition-transform duration-200 group-hover:rotate-90"
              />
            </button>
          </div>
        </div>

        {/* Mobile Search Section - Only visible on mobile when not Dashboard */}
        <div
          className={`${
            isNotDashboard ? "block lg:hidden" : "hidden"
          } mt-4 pt-4 border-t border-gray-100`}
        >
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder={`Search ${pageTitle.toLowerCase()}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearchSubmit(e)}
              className="pl-10 pr-4 py-2.5 w-full bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm text-gray-900 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 z-50 bg-black/50"
            onClick={toggleMobileMenu}
          >
            <div
              className="absolute top-4 left-4 right-4 bg-white rounded-xl shadow-2xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900">Menu</h2>
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="space-y-3">
                <button className="w-full flex items-center p-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  <Home size={18} className="mr-3" />
                  Dashboard
                </button>
                <button className="w-full flex items-center p-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  <User size={18} className="mr-3" />
                  Profile
                </button>
                <button className="w-full flex items-center p-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  <Settings size={18} className="mr-3" />
                  Settings
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import {
//   Bell,
//   Settings,
//   Home,
//   ChevronRight,
//   User,
//   Menu,
//   Clock,
//   MessageCircle,
//   Music,
//   CreditCard,
//   Search,
//   Plus,
// } from "lucide-react";

// const Navbar = ({ pageTitle = "Dashboard" }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const notificationRef = useRef(null);

//   // Sample notifications data
//   const notifications = [
//     {
//       id: 1,
//       type: "message",
//       icon: MessageCircle,
//       iconBg: "bg-orange-500",
//       title: "New Message",
//       subtitle: "From Laur",
//       time: "13 minutes ago",
//       avatar: "👨🏾",
//       unread: true,
//     },
//     {
//       id: 2,
//       type: "music",
//       icon: Music,
//       iconBg: "bg-green-500",
//       title: "New Album",
//       subtitle: "By Travis Scott",
//       time: "1 day",
//       unread: true,
//     },
//     {
//       id: 3,
//       type: "payment",
//       icon: CreditCard,
//       iconBg: "bg-blue-500",
//       title: "Payment Successfully Completed",
//       subtitle: "",
//       time: "2 days",
//       unread: false,
//     },
//   ];

//   const unreadCount = notifications.filter((n) => n.unread).length;

//   // Close notifications when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         notificationRef.current &&
//         !notificationRef.current.contains(event.target)
//       ) {
//         setIsNotificationsOpen(false);
//       }
//     };

//     if (isNotificationsOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//       return () =>
//         document.removeEventListener("mousedown", handleClickOutside);
//     }
//   }, [isNotificationsOpen]);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const toggleNotifications = () => {
//     setIsNotificationsOpen(!isNotificationsOpen);
//   };

//   const handleNotificationClick = (notificationId) => {
//     // Handle notification click logic here
//     console.log(`Clicked notification ${notificationId}`);
//   };

//   const markAllAsRead = () => {
//     // Handle mark all as read logic here
//     console.log("Mark all as read");
//     setIsNotificationsOpen(false);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     // Handle search logic here
//     console.log("Search query:", searchQuery);
//   };

//   const handleAddClick = () => {
//     // Handle add button click logic here
//     console.log("Add button clicked for", pageTitle);
//   };

//   const isNotDashboard = pageTitle !== "Dashboard";

//   return (
//     <div className="bg-[#EEEEF1] p-6 sm:p-4 md:p-6 min-w-0">
//       {/* Main Navbar with rounded border and shadow */}
//       <div className="w-full max-w-7xl mx-auto bg-white rounded-lg sm:rounded-xl shadow-sm p-2 sm:p-4 md:p-6 mb-4 md:mb-6 min-w-0">
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 min-w-0">
//           {/* Top row on mobile: Page title and essential actions */}
//           <div className="flex items-center justify-between min-w-0 w-full sm:w-auto">
//             {/* Left side: Hamburger Menu (mobile) + Breadcrumb and page title */}
//             <div className="flex items-center flex-1 min-w-0 overflow-hidden">
//               <div className="w-10 h-10"></div>
//               <div className="min-w-0 flex-1 overflow-hidden">
//                 {/* Breadcrumb navigation - hidden on mobile */}
//                 <div className="hidden sm:flex items-center text-xs text-gray-500 mb-1 overflow-hidden">
//                   <div className="hover:text-gray-700 flex items-center flex-shrink-0">
//                     <Home size={12} className="mr-1" />
//                   </div>
//                   <ChevronRight size={10} className="mx-1 flex-shrink-0" />
//                   <div className="hover:text-gray-700 truncate min-w-0">
//                     {pageTitle}
//                   </div>
//                 </div>

//                 {/* Page title */}
//                 <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl text-black font-bold truncate min-w-0">
//                   {pageTitle}
//                 </h1>
//               </div>
//             </div>

//             {/* Mobile essential actions - only most important buttons */}
//             <div className="flex sm:hidden items-center space-x-1 flex-shrink-0">
//               {isNotDashboard && (
//                 <>
//                   <button className="group relative flex items-center justify-center p-2 text-gray-600 hover:text-white bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-500 hover:to-blue-600 rounded-md shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-gray-200 hover:border-transparent">
//                     <Search
//                       size={14}
//                       className="transition-transform duration-200"
//                     />
//                   </button>

//                   <button
//                     onClick={handleAddClick}
//                     className="group relative flex items-center justify-center p-2 text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-md shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
//                   >
//                     <Plus
//                       size={14}
//                       className="transition-transform duration-200 group-hover:rotate-90"
//                     />
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>

//           {/* Center: Search and Add button (only when not Dashboard) - Desktop only */}
//           {isNotDashboard && (
//             <div className="hidden sm:flex items-center space-x-3 flex-shrink-0 mx-4">
//               {/* Search Input */}
//               <div className="relative">
//                 <div className="relative">
//                   <Search
//                     size={18}
//                     className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
//                   />
//                   <input
//                     type="text"
//                     placeholder={`Search ${pageTitle.toLowerCase()}...`}
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     onKeyPress={(e) =>
//                       e.key === "Enter" && handleSearchSubmit(e)
//                     }
//                     className="pl-10 text-black pr-4 py-2.5 w-64 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
//                   />
//                 </div>
//               </div>

//               {/* Add Button */}
//               <button
//                 onClick={handleAddClick}
//                 className="group relative flex items-center justify-center p-2.5 text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
//               >
//                 <Plus
//                   size={18}
//                   className="transition-transform duration-200 group-hover:rotate-90"
//                 />
//                 <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
//                   Add{" "}
//                   {pageTitle === "Accounts"
//                     ? "Account"
//                     : pageTitle === "Ledger"
//                     ? "Entry"
//                     : "New"}
//                 </div>
//               </button>
//             </div>
//           )}

//           {/* Right side: Actions - Desktop only */}
//           <div className="flex items-center flex-shrink-0">
//             <div className="flex items-center space-x-1 md:space-x-2">
//               {/* Sign In Button */}
//               <button className="group relative flex items-center text-gray-700 hover:text-white px-3 md:px-4 py-2 md:py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-500 hover:to-indigo-600 rounded-lg md:rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-blue-100 hover:border-transparent">
//                 <User
//                   size={16}
//                   className="md:w-4 md:h-4 mr-1.5 md:mr-2 transition-all duration-200"
//                 />
//                 <span className="font-semibold text-sm md:text-base">
//                   SIGN IN
//                 </span>
//                 <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
//                   Sign In
//                 </div>
//               </button>

//               {/* Settings Button */}
//               <button className="group relative flex items-center justify-center p-2 md:p-3 text-gray-600 hover:text-white bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-500 hover:to-emerald-600 rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-green-100 hover:border-transparent">
//                 <Settings
//                   size={18}
//                   className="md:w-5 md:h-5 transition-transform duration-200 group-hover:rotate-90"
//                 />
//                 <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
//                   Settings
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Search Bar (shown when not Dashboard and on mobile) */}
//         {isNotDashboard && (
//           <div className="sm:hidden mt-4 pt-4 border-t border-gray-100">
//             <div className="relative">
//               <Search
//                 size={16}
//                 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
//               />
//               <input
//                 type="text"
//                 placeholder={`Search ${pageTitle.toLowerCase()}...`}
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 onKeyPress={(e) => e.key === "Enter" && handleSearchSubmit(e)}
//                 className="pl-10 text-black pr-4 py-2.5 w-full bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
