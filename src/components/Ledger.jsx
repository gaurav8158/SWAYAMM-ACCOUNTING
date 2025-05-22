// Ledger.js
import React, { useState } from 'react'
import Navbar from './Navbar'
import { Calendar, Save, X } from 'lucide-react'

const Ledger = ({ isCollapsed, activeItem, toggleMobileSidebar }) => {
    const [formData, setFormData] = useState({
        code: '',
        description: '',
        dateOfOpening: ''
    });

    const pageTitles = {
        dashboard: 'Dashboard',
        account: 'Account Management',
        ledger: 'Financial Ledger',
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {
        console.log('Saving:', formData);
        // Add your save logic here
    };

    const handleCancel = () => {
        setFormData({
            code: '',
            description: '',
            dateOfOpening: ''
        });
    };

    return (
        <>
            <div className={`${isCollapsed ? 'md:ml-20' : 'md:ml-72'} transition-all duration-300 ease-in-out min-h-screen bg-[#EEEEF1]`}>
                <Navbar pageTitle={pageTitles[activeItem]} toggleMobileSidebar={toggleMobileSidebar} />

                <div className='p-6'>
                    <div className='bg-white rounded-lg shadow-lg px-6 py-6'>
                        {/* Title */}
                        <h1 className='text-2xl font-bold text-gray-800 mb-3'>Master Ledger</h1>
                        <div className='h-0.5 bg-gray-200 mb-4'></div>

                        {/* Form Fields */}
                        <div className='space-y-6'>
                            {/* Code and Description Row */}
                            <div className='flex gap-4'>
                                <div className='flex-shrink-0'>
                                    <input
                                        type="text"
                                        name="code"
                                        placeholder="Enter Code..."
                                        value={formData.code}
                                        onChange={handleInputChange}
                                        className='w-48 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent placeholder-gray-400'
                                    />
                                </div>
                                <div className='flex-1'>
                                    <input
                                        type="text"
                                        name="description"
                                        placeholder="Enter Desc..."
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent placeholder-gray-400'
                                    />
                                </div>
                            </div>

                            {/* Date of Opening */}
                            <div>
                                <label className='block text-xl text-gray-700 font-medium mb-3'>Date of Opening</label>
                                <div className='relative'>
                                    <input
                                        type="date"
                                        name="dateOfOpening"
                                        value={formData.dateOfOpening}
                                        onChange={handleInputChange}
                                        className='w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent text-gray-600'
                                        placeholder="dd-mm-yyyy"
                                    />
                                    {/* <Calendar className='absolute right-3 top-1/2 transform translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none' /> */}
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className='flex justify-end gap-4 mt-3'>
                            <button
                                onClick={handleSave}
                                className='flex items-center gap-2 px-6 py-3 bg-[#292F4E] text-white rounded-lg font-medium transform transition-all duration-300 hover:scale-105  duration-200'
                            >
                                <Save size={18} />
                                SAVE
                            </button>
                            <button
                                onClick={handleCancel}
                                className='flex items-center gap-2 px-6 py-3 bg-[#292F4E] text-white rounded-lg font-medium transform transition-all duration-300 hover:scale-105 duration-200'
                            >
                                <X size={18} />
                                CANCEL
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ledger