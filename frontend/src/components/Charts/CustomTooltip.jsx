import React from 'react'

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className='bg-white p-2 rounded-lg border border-gray-300 shadow-md'>
                <p className='text-xs font-semibold mb-1 text-purple-800'>
                    {payload[0].name}
                </p>

                <p>
                    Amount:{" "}
                    <span>${payload[0].value}</span>
                </p>
            </div>
        )
    }
    return null;
}

export default CustomTooltip