'use client';

import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Cell,
    Tooltip
} from 'recharts';

const data = [
    { name: 'Jan', Sales: 420 },
    { name: 'Feb', Sales: 180 },
    { name: 'Mar', Sales: 100 },
    { name: 'Apr', Sales: 200 },
    { name: 'May', Sales: 450 },
    { name: 'Jun', Sales: 110 },
    { name: 'Jul', Sales: 380 },
    { name: 'Aug', Sales: 210 },
    { name: 'Sep', Sales: 430 },
];

// Custom tooltip component that matches the image
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="p-2 bg-black text-white rounded-md shadow-lg">
                <p className="font-bold mb-1">{label}</p>
                <div className="flex items-center">
                    <div className="w-3 h-3 bg-white mr-2"></div>
                    <p>Sales: {payload[0].value}</p>
                </div>
            </div>
        );
    }
    return null;
};

export default function VerticalBarChart() {
    return (
        <div className="w-full rounded-xl overflow-hidden bg-[#2c3e67]">
            <div className="w-full h-62 py-4 px-6">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        barGap={0}
                        barCategoryGap="25%"
                    >
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: 'transparent' }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#FFFFFF', fontSize: 14 }}
                            domain={[0, 500]}
                            ticks={[0, 200, 400]}
                            width={30}
                        />
                        <Tooltip
                            content={<CustomTooltip />}
                            cursor={false}
                        />
                        <Bar
                            dataKey="Sales"
                            radius={5}
                            maxBarSize={20}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill="#FFFFFF" />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}