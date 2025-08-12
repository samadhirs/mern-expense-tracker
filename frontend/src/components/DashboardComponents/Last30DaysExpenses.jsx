import React, { useEffect, useState } from 'react'
import { prepareExpenseBarChartData } from '../../utils/helper';
import CustomBarChart from '../Charts/CustomBarChart';

const Last30DaysExpenses = ({ data }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const result = prepareExpenseBarChartData(data);
        setChartData(result);

        return () => {};
    }, [data]);

    return (
       <div className='card col-span-1 p-4'>
            <div className='flex items-center justify-between mb-4'>
                <h5 className='text-lg font-semibold mb-4'>
                    Last 30 Days Expenses
                </h5>
            </div>

            <CustomBarChart data={chartData} />
        </div>
    )
}

export default Last30DaysExpenses