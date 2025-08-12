import React from 'react'
import TransactionInfoCard from '../Cards/TransactionInfoCard'
import moment from 'moment'
import { LuDownload } from 'react-icons/lu'

const IncomeList = ({ transactions, onDelete, onDownload }) => {
  return (
    <div className='card'>
        <div className='flex justify-between items-center mb-4'>
            <h5 className='text-lg font-semibold mb-4'>
                Income Sources
            </h5>

            <button 
                className='card-btn'
                onClick={onDownload}
            >
                <LuDownload className='text-base' />Download
            </button>
        </div>

        <div>
            {transactions?.map((income) => (
                <TransactionInfoCard 
                    key={income._id}
                    title={income.source}
                    icon={income.icon}
                    date={moment(income.date).format('DD MM YYYY')}
                    amount={income.amount}
                    type="income"
                    onDelete={() => onDelete(income._id)}
                />
            ))}
        </div>
    </div>
  )
}

export default IncomeList