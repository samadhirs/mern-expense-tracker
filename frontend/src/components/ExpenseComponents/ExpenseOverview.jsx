import React, { useEffect, useState } from 'react'
import { prepareExpenseLineChartData } from '../../utils/helper';
import { LuPlus } from 'react-icons/lu';
import CustomLineChart from '../Charts/CustomLineChart';

const ExpenseOverview = ({ transactions, onExpenseIncome }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const result = prepareExpenseLineChartData(transactions);
        setChartData(result);

        return () => {};
    }, [transactions]);
    
    return (
        <div className='card'>
            <div className='flex items-center justify-between'>
                <div>
                    <h5 className='text-gray-900 text-lg font-semibold'>
                        Expense Overview
                    </h5>

                    <p className='text-sm text-gray-500'>
                        Track and manage your spending with a clear breakdown of all your expenses, helping you identify patterns, cut unnecessary costs, and stay within your budget.
                    </p>
                </div>

                <button 
                    className='add-btn'
                    onClick={onExpenseIncome}
                >
                    <LuPlus className='text-lg' />
                    Add Expense
                </button>
            </div>

            <div className='mt-10'>
                <CustomLineChart data={chartData} />
            </div>
        </div>
    )
}

export default ExpenseOverview