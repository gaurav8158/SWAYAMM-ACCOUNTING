"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Ban, CircleFadingPlus, CircleX, Save, SaveAll } from "lucide-react";
import { Button } from "@/components/ui/button";

const page = () => {
  const [formData, setFormData] = useState({
    acCode: "BL009",
    acName: "LEAK SEAL EXPERTS(INDIA)PVT.LTD.",
    ledger: "B",
    uniAcCode: "BL009",
    dateOfOpening: "3/31/2014",
    enteredBy: "",
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
      <div className="transition-all duration-300 ease-in-out bg-[#EEEEF1]">
        <Navbar pageTitle="Account Master" />

        <div className="p-6 sm:px-4 md:px-6 py-1">
          <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 md:p-6">
            {/* Company Header */}
            <div className="text-center py-3 bg-gray-200 rounded-lg mb-6">
              <h1 className="text-lg font-bold text-gray-800">
                DSM SUGAR RAJPURA
              </h1>
              <h2 className="text-md font-semibold text-gray-700">BUDAUN</h2>
            </div>

            {/* Form Fields with Modern Design */}
            <div className="space-y-6">
              {/* A/C Code */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                <label className="block text-gray-700 font-medium text-sm sm:text-base">
                  A/C Code
                </label>
                <input
                  type="text"
                  name="acCode"
                  value={formData.acCode}
                  onChange={handleInputChange}
                  className="custom-input w-full"
                />
              </div>

              {/* A/C Name */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                <label className="block text-gray-700 font-medium text-sm sm:text-base">
                  A/C Name
                </label>
                <div className="sm:col-span-2">
                  <input
                    type="text"
                    name="acName"
                    value={formData.acName}
                    onChange={handleInputChange}
                    className="custom-input w-full"
                  />
                </div>
              </div>

              {/* LEDGER */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                <label className="block text-gray-700 font-medium text-sm sm:text-base">
                  LEDGER
                </label>
                <input
                  type="text"
                  name="ledger"
                  value={formData.ledger}
                  onChange={handleInputChange}
                  className="custom-input w-full"
                />
              </div>

              {/* Uni. A/C Code */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                <label className="block text-gray-700 font-medium text-sm sm:text-base">
                  Uni. A/C Code
                </label>
                <input
                  type="text"
                  name="uniAcCode"
                  value={formData.uniAcCode}
                  onChange={handleInputChange}
                  className="custom-input w-full"
                />
              </div>

              {/* Date of Opening */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                <label className="block text-gray-700 font-medium text-sm sm:text-base">
                  Date of Opening
                </label>
                <input
                  type="date"
                  name="dateOfOpening"
                  value="2014-03-31"
                  onChange={handleInputChange}
                  className="custom-input w-full"
                />
              </div>

              {/* Entered By */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                <label className="block text-gray-700 font-medium text-sm sm:text-base">
                  Entered By
                </label>
                <input
                  type="text"
                  name="enteredBy"
                  value={formData.enteredBy}
                  onChange={handleInputChange}
                  placeholder="Enter username"
                  className="custom-input w-full"
                />
              </div>

              {/* Person Responsible */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
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

            {/* Navigation and Action Buttons */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              {/* Action Buttons */}
              <div className="flex justify-between sm:justify-center gap-2 sm:gap-4 w-full">
                <Button
                  size="lg"
                  className="flex-1 sm:flex-none w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white"
                >
                  <CircleFadingPlus className="text-xl" />
                  <span className="hidden sm:block">ADD</span>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 sm:flex-none w-full sm:w-auto text-blue-600 border-blue-600 hover:bg-blue-50"
                >
                  <Save className="text-xl" />
                  <span className="hidden sm:block">SAVE</span>
                </Button>

                <Button
                  size="lg"
                  variant="secondary"
                  className="flex-1 sm:flex-none w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-white"
                >
                  <Ban className="text-xl" />
                  <span className="hidden sm:block">CANCEL</span>
                </Button>

                <Button
                  size="lg"
                  variant="destructive"
                  className="flex-1 sm:flex-none w-full sm:w-auto"
                >
                  <CircleX className="text-xl" />
                  <span className="hidden sm:block">CLOSE</span>
                </Button>
              </div>

              {/* <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <button className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#292F4E] text-white rounded-lg font-medium transform transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                  <CircleFadingPlus />
                  ADD
                </button>
                <button className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#292F4E] text-white rounded-lg font-medium transform transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                  <SaveAll />
                  SAVE
                </button>
                <button className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#292F4E] text-white rounded-lg font-medium transform transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                  <Ban />
                  CANCEL
                </button>
                <button className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#292F4E] text-white rounded-lg font-medium transform transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                  <CircleX />
                  CLOSE
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
