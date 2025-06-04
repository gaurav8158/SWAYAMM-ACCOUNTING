"use client"
import React, { useState } from "react";
import { Ban, CircleFadingPlus, CircleX, Search } from "lucide-react";
import Cardheader from "@/components/dashboard/Cardheader";
import Navbar from "@/components/Navbar";

const page = () => {
  const [formData, setFormData] = useState({
    partyClassCode: "",
    partyClassName: "",
    personResponsible: "SA",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="h-screen overflow-y-auto">
      <div className="transition-all duration-300 ease-in-out bg-gray-100">
        <Navbar pageTitle="Party Class" />

        <div className="p-6 sm:px-4 md:px-6 py-1">
          <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 md:p-6">
            {/* Company Header */}
            <Cardheader title1="DSM SUGAR RAJPURA" title2="BUDAUN" />

            {/* Form Fields with Modern Design */}
            <div className="space-y-6">
              {/* Party Class Code */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                <label className="block text-gray-700 font-medium text-sm sm:text-base">
                  Party Class Code
                </label>
                <input
                  type="text"
                  name="partyClassCode"
                  value={formData.partyClassCode}
                  onChange={handleInputChange}
                  className="w-full custom-input"
                />
              </div>

              {/* Party Class Name */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                <label className="block text-gray-700 font-medium text-sm sm:text-base">
                  Party Class Name
                </label>
                <div className="sm:col-span-2">
                  <input
                    type="text"
                    name="partyClassName"
                    value={formData.partyClassName}
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

            {/* Navigation and Action Buttons */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              {/* Action Buttons */}
              <div className="flex justify-between sm:justify-center gap-2 sm:gap-4 w-full">
                <button className="flex-1 sm:flex-none h-16 sm:h-10 flex-col sm:flex-row w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  <CircleFadingPlus className="text-xl" />
                  <span className="block">NEW</span>
                </button>

                <button className="flex-1 sm:flex-none h-16 sm:h-10 flex-col sm:flex-row w-full sm:w-auto text-blue-600 border border-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 bg-white">
                  <Search className="text-xl" />
                  <span className="block">FIND</span>
                </button>

                <button className="flex-1 sm:flex-none h-16 sm:h-10 flex-col sm:flex-row w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  <Ban className="text-xl" />
                  <span className="block">CANCEL</span>
                </button>

                <button className="flex-1 sm:flex-none h-16 sm:h-10 flex-col sm:flex-row w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                  <CircleX className="text-xl" />
                  <span className="block">CLOSE</span>
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
