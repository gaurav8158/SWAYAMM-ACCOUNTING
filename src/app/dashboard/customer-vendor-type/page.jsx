"use client";
import React, { useState } from "react";
import { Ban, CircleFadingPlus, CircleX, Search } from "lucide-react";
import Cardheader from "@/components/dashboard/Cardheader";
import Navbar from "@/components/Navbar";
// Using standard button with Tailwind classes

const page = () => {
  const [formData, setFormData] = useState({
    partyType: "",
    companyTds: "",
    individualTds: "",
    companyEdCess: "",
    individualEdCess: "",
    companySurcharge: "",
    individualSurcharge: "",
    taxDedAc: "",
    partlyExempted: false,
    personResponsible: "SA",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="h-screen overflow-y-auto">
      <div className="transition-all duration-300 ease-in-out bg-[#EEEEF1]">
        <Navbar pageTitle="Party Type Master" />

        <div className="p-6 sm:px-4 md:px-6 py-1">
          <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 md:p-6">
            {/* Company Header */}
            <Cardheader title1="DSM SUGAR RAJPURA" title2="BUDAUN" />

            {/* Form Fields with Modern Design */}
            <div className="space-y-6">
              {/* TDS Section */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Party Type */}
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    Party Type
                  </label>

                  <input
                    type="text"
                    name="partyType"
                    value={formData.partyType}
                    onChange={handleInputChange}
                    className="w-full custom-input"
                  />
                </div>
                {/* Company TDS */}
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    Company TDS
                  </label>
                  <input
                    type="text"
                    name="companyTds"
                    value={formData.companyTds}
                    onChange={handleInputChange}
                    className="w-full custom-input"
                  />
                </div>

                {/* Individual TDS */}
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    Individual TDS
                  </label>
                  <input
                    type="text"
                    name="individualTds"
                    value={formData.individualTds}
                    onChange={handleInputChange}
                    className="w-full custom-input"
                  />
                </div>
           
                {/* Company ED Cess */}
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    Company ED Cess
                  </label>
                  <input
                    type="text"
                    name="companyEdCess"
                    value={formData.companyEdCess}
                    onChange={handleInputChange}
                    className="w-full custom-input"
                  />
                </div>

                {/* Individual ED Cess */}
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    Individual ED Cess
                  </label>
                  <input
                    type="text"
                    name="individualEdCess"
                    value={formData.individualEdCess}
                    onChange={handleInputChange}
                    className="w-full custom-input"
                  />
                </div>
         
                {/* Company Surcharge */}
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    Comp. Surcharge
                  </label>
                  <input
                    type="text"
                    name="companySurcharge"
                    value={formData.companySurcharge}
                    onChange={handleInputChange}
                    className="w-full custom-input"
                  />
                </div>

                {/* Individual Surcharge */}
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    Individual Surcharge
                  </label>
                  <input
                    type="text"
                    name="individualSurcharge"
                    value={formData.individualSurcharge}
                    onChange={handleInputChange}
                    className="w-full custom-input"
                  />
                </div>
             
                {/* Tax Ded. A/C */}
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    Tax Ded. A/C
                  </label>
                  <input
                    type="text"
                    name="taxDedAc"
                    value={formData.taxDedAc}
                    onChange={handleInputChange}
                    className="w-full custom-input"
                  />
                </div>

                {/* Partly Exempted */}
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium text-sm sm:text-base">
                    Partly Exempted
                  </label>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="partlyExempted"
                      checked={formData.partlyExempted}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <span className="ml-2 text-sm text-gray-600">Enable</span>
                  </div>
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
