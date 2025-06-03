"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Ban, CircleFadingPlus, CircleX, Save, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const page = () => {
  const [formData, setFormData] = useState({
    bank: "",
    acCode: "",
    ccAc: false,
    ccLimit: "",
    debit: false,
    openingBalance: "",

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
        <Navbar pageTitle="Bank Master" />

        <div className="p-6 sm:px-4 md:px-6 py-1">
          <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 md:p-6">
            {/* Company Header */}
            <div className="text-center py-3 bg-gray-200 rounded-lg mb-6">
              <h1 className="text-lg font-bold text-gray-800">
                DSM SUGAR RAJPURA
              </h1>
              <h2 className="text-md font-semibold text-gray-700">BUDAUN</h2>
            </div>

            {/* Form Fields with Better Desktop Layout */}
            <div className="space-y-6">
              {/* Bank */}
              <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-center">
                <label className="block text-gray-700 font-medium text-sm lg:text-base lg:col-span-1">
                  Bank
                </label>
                <div className="lg:col-span-5">
                  <input
                    type="text"
                    name="bank"
                    value={formData.bank}
                    onChange={handleInputChange}
                    placeholder="Enter bank name"
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm lg:text-base"
                  />
                </div>
              </div>

              {/* A/C Code, CC A/C, and CC Limit in one row */}
              <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-center">
                <label className="block text-gray-700 font-medium text-sm lg:text-base lg:col-span-1">
                  A/C Code
                </label>
                <div className="lg:col-span-1">
                  <input
                    type="text"
                    name="acCode"
                    value={formData.acCode}
                    onChange={handleInputChange}
                    placeholder="A/C Code"
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm lg:text-base"
                  />
                </div>

                <div className="lg:col-span-1 flex items-center gap-2 lg:justify-center">
                  <input
                    type="checkbox"
                    name="ccAc"
                    checked={formData.ccAc}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label className="text-gray-700 font-medium text-sm lg:text-base">
                    CC A/C
                  </label>
                </div>

                <label className="hidden lg:block text-gray-700 font-medium text-sm lg:text-base lg:col-span-1 text-center">
                  CC Limit
                </label>
                <div className="lg:col-span-2">
                  <input
                    type="text"
                    name="ccLimit"
                    value={formData.ccLimit}
                    onChange={handleInputChange}
                    placeholder="CC Limit"
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm lg:text-base"
                  />
                </div>
              </div>

              {/* Debit and Opening Balance in one row */}
              <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-center">
                <div className="lg:col-span-2 flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="debit"
                    checked={formData.debit}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label className="text-gray-700 font-medium text-sm lg:text-base">
                    Debit
                  </label>
                </div>

                <label className="hidden lg:block text-gray-700 font-medium text-sm lg:text-base lg:col-span-1 text-center">
                  Opening Balance
                </label>
                <div className="lg:col-span-3">
                  <input
                    type="text"
                    name="openingBalance"
                    value={formData.openingBalance}
                    onChange={handleInputChange}
                    placeholder="Opening Balance"
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm lg:text-base"
                  />
                </div>
              </div>

              {/* Entered By */}
              <div>
                <p className="block text-gray-700 font-medium text-sm lg:text-base ">
                  Entered By
                </p>
                {/* Person Responsible */}
                <div className="mt-2 pt-6 border-t grid grid-cols-1 lg:grid-cols-6 gap-4 items-center">
                  <label className="block text-gray-700 font-medium text-sm lg:text-base lg:col-span-1">
                    Person Responsible
                  </label>
                  <div className="lg:col-span-1">
                    <input
                      type="text"
                      name="personResponsible"
                      value={formData.personResponsible}
                      onChange={handleInputChange}
                      className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-sm lg:text-base"
                    />
                  </div>
                  <div className="lg:col-span-4">
                    <span className="bg-gray-200 text-gray-700 px-4 py-2 lg:py-3 rounded-lg border text-sm lg:text-base font-medium inline-block">
                      SYSTEM ADMINISTRATOR
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex justify-between sm:justify-center gap-2 sm:gap-4 w-full">
                <Button
                  size="lg"
                  className="flex-1 sm:flex-none w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white"
                >
                  <CircleFadingPlus className="text-xl" />
                  <span className="hidden sm:block">NEW</span>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 sm:flex-none w-full sm:w-auto text-blue-600 border-blue-600 hover:bg-blue-50"
                >
                  <Search className="text-xl" />
                  <span className="hidden sm:block">FIND</span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
