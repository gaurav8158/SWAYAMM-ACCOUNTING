"use client";
import React, { useState } from "react";
import { Ban, CircleFadingPlus, CircleX, Save, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Cardheader from "@/components/dashboard/Cardheader";

const page = () => {
  const [formData, setFormData] = useState({
    bank: "",
    chequeFrom: "1",
    chequeTo: "99999",
    enteredBy: "SA",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="h-screen overflow-y-auto">
      <div className="transition-all duration-300 ease-in-out bg-[#EEEEF1]">
        <Navbar pageTitle="Bank Series" />

        <div className="p-6 sm:px-4 md:px-6 py-1 pb-6">
          <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 md:p-6">
            {/*  Header Section */}
            <Cardheader
              title1="DSM SUGAR RAJPURA"
              title2="BUDAUN"
              head="Bank Cheque Series"
            />

            <div className="space-y-2">
              <label className="block text-sm sm:text-base font-medium text-gray-700">
                Bank:
              </label>
              <input
                type="text"
                name="bank"
                value={formData.bank}
                onChange={handleChange}
                className="w-full custom-input"
                placeholder="Enter bank name"
              />
            </div>

            {/* Cheque Series */}
            <div className="space-y-3 pt-4">
              <label className="block text-sm sm:text-base font-medium text-gray-700">
                Cheque Series:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* From Field */}
                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm text-gray-600">
                    From:
                  </label>
                  <input
                    type="text"
                    name="chequeFrom"
                    value={formData.chequeFrom}
                    onChange={handleChange}
                    className="w-full custom-input"
                    placeholder="Start number"
                  />
                </div>

                {/* To Field */}
                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm text-gray-600">
                    To:
                  </label>
                  <input
                    type="text"
                    name="chequeTo"
                    value={formData.chequeTo}
                    onChange={handleChange}
                    className="w-full custom-input"
                    placeholder="End number"
                  />
                </div>
              </div>
            </div>

            {/* Entered By */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <label className="block text-sm sm:text-base font-medium text-gray-700">
                Entered By:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <input
                  type="text"
                  value={formData.enteredBy}
                  onChange={handleChange}
                  name="enteredBy"
                  className="custom-input"
                  placeholder="User ID"
                />
                <div className="sm:col-span-2 bg-gray-100 text-gray-700 px-3 py-2 sm:py-3 rounded-lg border text-sm sm:text-base font-medium flex items-center">
                  SYSTEM ADMINISTRATOR
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              {/* Action Buttons */}
              <div className="flex justify-between sm:justify-center gap-2 sm:gap-4 w-full">
                <Button
                  size="lg"
                  className="flex-1 sm:flex-none h-16 sm:h-10 flex-col sm:flex-row w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white"
                >
                  <CircleFadingPlus className="text-xl" />
                  <span className="block">ADD</span>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 sm:flex-none h-16 sm:h-10 flex-col sm:flex-row w-full sm:w-auto text-blue-600 border-blue-600 hover:bg-blue-50"
                >
                  <Search className="text-xl" />
                  <span className="block">FIND</span>
                </Button>

                <Button
                  size="lg"
                  variant="secondary"
                  className="flex-1 sm:flex-none h-16 sm:h-10 flex-col sm:flex-row w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-white"
                >
                  <Ban className="text-xl" />
                  <span className="block">CANCEL</span>
                </Button>

                <Button
                  size="lg"
                  variant="destructive"
                  className="flex-1 sm:flex-none h-16 sm:h-10 flex-col  sm:flex-row w-full sm:w-auto"
                >
                  <CircleX className="text-xl" />
                  <span className="block">CLOSE</span>
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
