"use client";
import React, { useState } from "react";
import {
  Ban,
  CircleFadingPlus,
  CircleX,
  Search,
  Edit3,

} from "lucide-react";
import Navbar from "@/components/Navbar";
import Cardheader from "@/components/dashboard/Cardheader";

const page = () => {
  const [formData, setFormData] = useState({
    costCentre: "10",
    costCentreName: "CANE UNLOADERS",
    head: "",
    acCode: "FC002",
    personResponsible: "SA",
  });

  const [currentRecord, setCurrentRecord] = useState(1);
  const totalRecords = 176;

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
        <Navbar pageTitle="COST CENTRE MASTER" />

        <div className="p-6 sm:px-4 md:px-6 py-1">
          <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 md:p-6">
            {/* Company Header */}
            <Cardheader title1="DSM SUGAR RAJPURA" title2="BUDAUN" />

            {/* Form Fields with Modern Design */}
            <div className="space-y-6">
              {/* Cost Centre */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <label className="block text-gray-700 font-medium text-sm sm:text-base">
                  Cost Centre :
                </label>
                <div className="sm:col-span-2 flex gap-3 items-center">
                  <input
                    type="text"
                    name="costCentre"
                    value={formData.costCentre}
                    onChange={handleInputChange}
                    className="w-[20%] custom-input"
                  />
                  <input
                    type="text"
                    name="costCentreName"
                    value={formData.costCentreName}
                    onChange={handleInputChange}
                    className="flex-1 custom-input w-[70%]"
                  />
                </div>
              </div>

              {/* Head and A/C Code */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    Head :
                  </label>
                  <input
                    type="text"
                    name="head"
                    value={formData.head}
                    onChange={handleInputChange}
                    className="w-full custom-input"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    A/C Code
                  </label>
                  <input
                    type="text"
                    name="acCode"
                    value={formData.acCode}
                    onChange={handleInputChange}
                    className="w-full custom-input"
                  />
                </div>
              </div>

              {/* Entered By Section */}
              <div>
                <p className="block text-gray-700 font-medium text-sm lg:text-base">
                  Entered By
                </p>

                {/* Person Responsible */}
                <div className="mt-2 pt-6 border-t grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    Person Responsible
                  </label>
                  <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                    <input
                      type="text"
                      name="personResponsible"
                      value={formData.personResponsible}
                      onChange={handleInputChange}
                      className="w-full sm:w-32 custom-input"
                    />
                    <span className="bg-gray-200 text-gray-700 px-4 py-2 sm:py-3 rounded-lg border text-sm sm:text-base font-medium">
                      SYSTEM ADMINISTRATOR
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Record Navigation */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              {/* Action Buttons */}
              <div className="grid grid-cols-5 gap-2 sm:gap-4 w-full">
                <button className="flex-1 sm:flex-none h-16 sm:h-10 flex-col sm:flex-row w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  <CircleFadingPlus className="text-xl" />
                  <span className="block text-xs sm:text-base">Add</span>
                </button>

                <button className="flex-1 sm:flex-none h-16 sm:h-10 flex-col sm:flex-row w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  <Edit3 className="text-xl" />
                  <span className="block text-xs sm:text-base">Edit</span>
                </button>

                <button className="flex-1 sm:flex-none h-16 sm:h-10 flex-col sm:flex-row w-full sm:w-auto text-green-600 border border-green-600 hover:bg-green-50 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 bg-white">
                  <Search className="text-xl" />
                  <span className="block text-xs sm:text-base">Find</span>
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
