"use client";
import React, { useState } from "react";
import {
  Plus,
  Search,
  X,
  Square,
  CircleFadingPlus,
  Save,
  Ban,
  CircleX,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Cardheader from "@/components/dashboard/Cardheader";

const page = () => {
  const [formData, setFormData] = useState({
    code: "",
    address: "",
    city: "",
    pinCode: "",
    acCode: "",
    tdsAcType: "",
    class: "",
    nom: "",
    guard: "",
    regdNo: "",
    regdDt: "",
    panNo: "",
    state: "",
    dtOfBirth: "",
    grade: "",
    freightRate: "",
    commRate: "",
    expRate: "",
    incRate: "",
    forSale: false,
    forPur: false,
    ssi: false,
    formH: false,
    partyType: "individual",
    enteredBy: "SA",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="h-screen overflow-y-auto">
      <div className="transition-all duration-300 ease-in-out bg-[#EEEEF1]">
        <Navbar pageTitle="Party" />

        <div className="p-6 sm:px-4 md:px-6 py-1 pb-6">
          <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 md:p-6">
            {/* Header Section */}
            <Cardheader
              title1="DSM SUGAR RAJPURA"
              title2="BUDAUN"
              head="PARTY"
            />

            <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
              {/* First Row - Code, Address, Regd No */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Code:
                  </label>
                  <input
                    type="text"
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                    className="w-full custom-input"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Regd No:
                  </label>
                  <input
                    type="text"
                    name="regdNo"
                    value={formData.regdNo}
                    onChange={handleChange}
                    className="w-full custom-input"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Regd. Dt:
                  </label>
                  <input
                    type="date"
                    name="regdDt"
                    value={formData.regdDt}
                    onChange={handleChange}
                    className="w-full custom-input"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    City:
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full custom-input"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Pin Code:
                  </label>
                  <input
                    type="text"
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleChange}
                    className="w-full custom-input"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    State:
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full custom-input"
                  />
                </div>

                <div className="space-y-2  col-span-2 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Address:
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows="3"
                    className="w-full custom-input resize-none"
                  />
                </div>
              </div>

              {/* Third Row - A/C Code, TDS A/C Type, Class, PAN No */}
              <div className="grid grid-cols-2  lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    A/C Code:
                  </label>
                  <input
                    type="text"
                    name="acCode"
                    value={formData.acCode}
                    onChange={handleChange}
                    className="custom-input w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    TDS A/C Type:
                  </label>
                  <input
                    type="text"
                    name="tdsAcType"
                    value={formData.tdsAcType}
                    onChange={handleChange}
                    className="custom-input w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Class:
                  </label>
                  <input
                    type="text"
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                    className="custom-input w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Nom:
                  </label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    className="custom-input w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Guard:
                  </label>
                  <input
                    type="text"
                    name="guard"
                    value={formData.guard}
                    onChange={handleChange}
                    className="custom-input w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Dt. of Birth:
                  </label>
                  <input
                    type="date"
                    name="dtOfBirth"
                    value={formData.dtOfBirth}
                    onChange={handleChange}
                    className="custom-input w-full"
                  />
                </div>
              </div>

              {/* Rates Section */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    PAN No:
                  </label>
                  <input
                    type="text"
                    name="panNo"
                    value={formData.panNo}
                    onChange={handleChange}
                    className="custom-input w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Grade:
                  </label>
                  <input
                    type="text"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className="custom-input w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Freight Rate:
                  </label>
                  <input
                    type="number"
                    name="freightRate"
                    value={formData.freightRate}
                    onChange={handleChange}
                    step="0.01"
                    className="custom-input w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Comm. Rate:
                  </label>
                  <input
                    type="number"
                    name="commRate"
                    value={formData.commRate}
                    onChange={handleChange}
                    step="0.01"
                    className="custom-input w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Exp. Rate:
                  </label>
                  <input
                    type="number"
                    name="expRate"
                    value={formData.expRate}
                    onChange={handleChange}
                    step="0.01"
                    className="custom-input w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Inc. Rate:
                  </label>
                  <input
                    type="number"
                    name="incRate"
                    value={formData.incRate}
                    onChange={handleChange}
                    step="0.01"
                    className="custom-input w-full"
                  />
                </div>
              </div>

              {/* Checkboxes and Radio Buttons Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-gray-200">
                {/* Checkboxes */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Options:
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="forSale"
                        checked={formData.forSale}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <span className="text-sm text-gray-700">For Sale</span>
                    </label>

                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="forPur"
                        checked={formData.forPur}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <span className="text-sm text-gray-700">For Pur.</span>
                    </label>

                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="ssi"
                        checked={formData.ssi}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <span className="text-sm text-gray-700">SSI</span>
                    </label>

                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="formH"
                        checked={formData.formH}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <span className="text-sm text-gray-700">Form H</span>
                    </label>
                  </div>
                </div>

                {/* Party Type Radio Buttons */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    TYPE:
                  </h4>
                  <div className="gap-2 flex flex-row items-center sm:items-start sm:flex-col">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="partyType"
                        value="individual"
                        checked={formData.partyType === "individual"}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                      <span className="text-sm text-gray-700">Individual</span>
                    </label>

                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="partyType"
                        value="company"
                        checked={formData.partyType === "company"}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                      <span className="text-sm text-gray-700">Company</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Entered By */}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <label className="block text-sm font-medium text-gray-700">
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
