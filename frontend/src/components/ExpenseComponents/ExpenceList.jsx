import React from 'react'
import TransactionInfoCard from '../Cards/TransactionInfoCard'
import moment from 'moment'
import { LuDownload } from 'react-icons/lu'

const ExpenceList = ({ transactions, onDelete, onDownload }) => {
    return (
        <div className='card'>
            <div className='flex justify-between items-center mb-4'>
                <h5 className='text-lg font-semibold mb-4'>
                    All Expenses
                </h5>

                <button 
                    className='card-btn'
                    onClick={onDownload}
                >
                    <LuDownload className='text-base' />Download
                </button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2'>
                {transactions?.map((expense) => (
                    <TransactionInfoCard
                        key={expense._id}
                        title={expense.category}
                        icon={expense.icon}
                        date={moment(expense.date).format('DD MM YYYY')}
                        amount={expense.amount}
                        type="expense"
                        onDelete={() => onDelete(expense._id)}
                    />
                ))}
            </div>
        </div>
    )
}

export default ExpenceList