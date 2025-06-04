"use client";
import React, { useState } from "react";
import {
  Ban,
  CircleFadingPlus,
  CircleX,
  Search,
  Edit3,
  ChevronsLeft,
  ChevronsRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Cardheader from "@/components/dashboard/Cardheader";

const page = () => {
  const [formData, setFormData] = useState({
    profitLossCode: "B2",
    profitLossName: "CONTRACTOR RETENTION MONEY",
    dateOfOpening: "7/18/2016",
    acCode: "NE",
    personResponsible: "SA",
  });

  const [currentRecord, setCurrentRecord] = useState(1);
  const totalRecords = 342;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNavigation = (direction) => {
    switch (direction) {
      case "first":
        setCurrentRecord(1);
        break;
      case "prev":
        setCurrentRecord(Math.max(1, currentRecord - 1));
        break;
      case "next":
        setCurrentRecord(Math.min(totalRecords, currentRecord + 1));
        break;
      case "last":
        setCurrentRecord(totalRecords);
        break;
    }
  };

  return (
    <div className="h-screen overflow-y-auto">
      <div className="transition-all duration-300 ease-in-out bg-gray-100">
        <Navbar pageTitle="NARRATION CATEGORY MASTER" />

        <div className="p-6 sm:px-4 md:px-6 py-1">
          <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 md:p-6">
            {/* Company Header */}
            <Cardheader title1="DSM SUGAR RAJPURA" title2="BUDAUN" />

            {/* Form Fields with Modern Design */}
            <div className="space-y-6">
              {/*  NARRATION CATEGORY */}
              <div className="flex flex-col gap-2">
                <label className="block text-gray-700 font-medium text-sm sm:text-base">
                  Naration Category
                </label>
              
                  <input
                    type="text"
                    name="profitLossName"
                    value={formData.profitLossName}
                    onChange={handleInputChange}
                    className="w-full custom-input"
                  />
            
              </div>
            </div>

            {/* Record Navigation */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              {/* Action Buttons */}
              <div className="grid grid-cols-5 gap-2 sm:gap-4 w-full">
                <div></div>
                <button className="flex-1 sm:flex-none h-16 sm:h-10 flex-col sm:flex-row w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  <CircleFadingPlus className="text-xl" />
                  <span className="block text-xs sm:text-base">Add</span>
                </button>

                <button className="flex-1 sm:flex-none h-16 sm:h-10 flex-col sm:flex-row w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  <Ban className="text-xl" />
                  <span className="block text-xs sm:text-base">Cancel</span>
                </button>

                <button className="flex-1 sm:flex-none h-16 sm:h-10 flex-col sm:flex-row w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  <CircleX className="text-xl" />
                  <span className="block text-xs sm:text-base">Close</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
