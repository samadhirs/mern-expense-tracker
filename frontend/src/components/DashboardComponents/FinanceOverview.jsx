import React from 'react'

const COLORS = ["#875CF5", "#FA2C37", "#FF6900"];

const FinanceOverview = ({
    totalBalance,
    totalIncome,
    totalExpense
}) => {

    const balanceData = [
        { name: "Total Balance", amount: totalBalance, color: COLORS[0] },
        { name: "Total Income", amount: totalIncome, color: COLORS[1] },
        { name: "Total Expense", amount: totalExpense, color: COLORS[2] }
    ];

    return (
        <div className='card'>
            <div className='flex items-center justify-between mb-4'>
                <h3 className='text-lg font-semibold'>Finance Overview</h3>
            </div>

            <CustomPieChart 
                data={balanceData}
                label="Total Balance"
                totalAmount={`$${totalBalance}`}
                colors={COLORS}
                showTextAnchor
            />
        </div>
    )
}

export default FinanceOverview