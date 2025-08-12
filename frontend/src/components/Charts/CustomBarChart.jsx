import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Cell,
} from 'recharts';

const CustomBarChart = ({ data }) => {
    // color function to alternate bar colors
    const getBarColor = (index) => {
        return index % 2 === 0 ? '#8884d8' : '#82ca9d';
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className='bg-white p-2 rounded shadow-md rounded-lg border border-gray-300'>
                    <p className="text-sm font-semibold mb-1 text-purple-800">
                        {payload[0].payload.category}
                    </p>

                    <p className='text-sm text-gray-600'>
                        Amount: 
                        <span className='text-sm font-medium text-gray-800 ml-1'>
                            ${payload[0].payload.amount}
                        </span>
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className='bg-white p-4 rounded-lg shadow-md'>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid stroke='none' />

                    <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#555" }} stroke="none" />
                    <YAxis tick={{ fontSize: 12, fill: "#555" }} stroke="none" />

                    <Tooltip content={CustomTooltip} />
                    
                    <Bar 
                        dataKey="amount" 
                        fill="#8884d8" 
                        radius={[10, 10, 0, 0]}
                        activeDot={{ r: 8, fill: 'yellow' }}
                        activeStyle={{ fill: '#82ca9d' }}
                    >
                        {data.map((entry, index) => (
                            <Cell key={index} fill={getBarColor(index)} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default CustomBarChart