import React from 'react'

const CustomLegend = ({ payload }) => {
  return (
    <div className='flex flex-wrap justify-center mt-4 gap-2 space-x-6'>
        {payload.map((entry, index) => (
            <div key={`legend-${index}`} className='flex items-center space-x-2'>
                <div
                    className='w-3 h-3 mr-2 rounded-full'
                    style={{ backgroundColor: entry.color }}
                >

                </div>
                <span className='text-xs text-gray-700 font-medium' style={{ color: entry.color }}>
                    {entry.value}
                </span>
            </div>
        ))}
    </div>
  )
}

export default CustomLegend