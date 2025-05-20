'use client';

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
} from 'recharts';

const data = [
    { name: 'Apr', uv: 50, pv: 40, revenue: 60 },
    { name: 'May', uv: 20, pv: 80, revenue: 80 },
    { name: 'Jun', uv: 300, pv: 100, revenue: 110 },
    { name: 'Jul', uv: 200, pv: 200, revenue: 150 },
    { name: 'Aug', uv: 500, pv: 300, revenue: 260 },
    { name: 'Sep', uv: 200, pv: 290, revenue: 270 },
    { name: 'Oct', uv: 400, pv: 350, revenue: 330 },
    { name: 'Nov', uv: 100, pv: 200, revenue: 250 },
    { name: 'Dec', uv: 500, pv: 400, revenue: 340 },
];

export default function SalesOverviewChart() {
    return (
        <div className="w-full p-4"> {/* Removed fixed height, added padding */}
            <h2 className="text-lg font-bold text-gray-700 mb-2">Sales Overview</h2>
            <p className="text-lg  text-gray-600 mb-4"><span className='text-[#82D717]'>↑</span> 4% MORE IN 2021</p>

            <div className="w-full h-64"> {/* Fixed height container */}
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#00c6ff" stopOpacity={0.4} />
                                <stop offset="95%" stopColor="#00c6ff" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#6B7280", fontSize: 12 }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#6B7280" }}
                            domain={[0, 500]}
                            ticks={[0, 100, 200, 300, 400, 500]}
                        />

                        <CartesianGrid
                            strokeDasharray="3 3"
                            horizontal={true}
                            vertical={false}
                            stroke="#e0e0e0"
                            opacity={0.5}
                        />
                        <Tooltip contentStyle={{ borderRadius: 10 }} />

                        <Area
                            type="monotone"
                            dataKey="uv"
                            stroke="#00c6ff"
                            strokeWidth={3}
                            fill="url(#colorUv)"
                        />

                        <Area
                            type="monotone"
                            dataKey="pv"
                            stroke="#000000"
                            strokeWidth={2}
                            fill="none"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}