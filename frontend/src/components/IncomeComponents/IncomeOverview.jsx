import React, { useEffect, useState } from 'react'
import { LuPlus } from 'react-icons/lu'
import CustomBarChart from '../Charts/CustomBarChart'
import { prepareIncomeBarChartData } from '../../utils/helper';

const IncomeOverview = ({ transactions, onAddIncome }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const result = prepareIncomeBarChartData(transactions);
        setChartData(result);

        return () => {};
    }, [transactions]);
    
    return (
        <div className='card'>
            <div className="flex justify-between items-center mb-4">
                <div className='flex flex-col'>
                    <h5 className='text-gray-900 text-lg font-semibold'>
                        Income Overview
                    </h5>

                    <p className='text-sm text-gray-500'>
                        Track your earnings over time and analyze your income sources.
                    </p>
                </div>

                <button
                    className="add-btn"
                    onClick={onAddIncome}
                >
                    <LuPlus className='' />
                    Add Income
                </button>
            </div>

            <div>
                <CustomBarChart data={chartData} />
            </div>
        </div>
    )
}

export default IncomeOverview