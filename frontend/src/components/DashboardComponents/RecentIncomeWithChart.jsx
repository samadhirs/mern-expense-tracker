import React, { useEffect, useState } from 'react'
import CustomPieChart from '../Charts/CustomPieChart'

const COLORS = [
    '#875CF5',
    '#FA2C37',
    '#FF6900',
    '#4f3916'
];

const RecentIncomeWithChart = ({ data, totalIncome }) => {
    const [chartData, setChartData] = useState([]);

    const prepareChartData = () => {
        const dataArr = data?.map(item => ({
            name: item.source,
            amount: item?.amount,
        }));

        setChartData(dataArr);
    }

    useEffect(() => {
        prepareChartData();

        return () => {};
    }, [data]);

    return (
        <div className='card'>
            <div>
                <h5 className='text-lg font-semibold mb-4'>
                    Last 60 Days Income
                </h5>
            </div>

            <CustomPieChart 
                data={chartData}
                label="Income"
                totalAmount={`$${totalIncome}`}
                showTextAnchor
                colors={COLORS}
            />
        </div>
    )
}

export default RecentIncomeWithChart