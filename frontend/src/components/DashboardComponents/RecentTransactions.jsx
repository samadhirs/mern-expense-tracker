import React from 'react'
import { IoMdDocument } from 'react-icons/io'
import { LuArrowRight } from 'react-icons/lu'
import moment from 'moment';
import TransactionInfoCard from '../../components/Cards/TransactionInfoCard';

const RecentTransactions = ({ transactions, onSeeMore }) => {
  return (
    <div className='card'>
        <div className='flex items-center justify-between mb-4'>
            <h3 className='text-lg font-semibold'>Recent Transactions</h3>
            <button className='card-btn' onClick={onSeeMore}>
                See More <LuArrowRight className='text-base' />
            </button>
        </div>

        <div>
            {transactions?.slice(0, 5).map((item) => (
                <TransactionInfoCard
                    key={item.id}
                    title={item.type == 'expense' ? item.category : item.source}
                    icon={item.icon}
                    date={moment(item.date).format('DD MMM YYYY')}
                    amount={item.amount}
                    type={item.type}
                    hideDeleteBtn
                />
            ))}
        </div>
    </div>
  )
}

export default RecentTransactions