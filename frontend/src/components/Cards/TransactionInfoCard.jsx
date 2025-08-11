import React from 'react'
import {
    LuUtensils,
    LuTrendingUp,
    LuTrendingDown,
    LuTrash2
} from 'react-icons/lu';

const TransactionInfoCard = ({ 
        title,
        icon,
        date,
        amount,
        type,
        hideDeleteBtn
    }) => {
    const getAmountStyles = () => type === 'income' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600';

    return (
        <div className='flex items-center justify-between gap-4 p-4 border-b border-gray-200 last:border-0'>
            <div className='flex items-center justify-between mb-3'>
                {icon ? (
                    <img src={icon} alt={title} className='w-6 h-6' />
                ) : (
                    <LuUtensils />
                )}
            </div>

            <div className='flex-1 flex items-center justify-between'>
                <div>
                    <p className='text-sm text-gray-700 font-medium'>{title}</p>
                    <p className='text-xs text-gray-400 mt-1'>{date}</p>
                </div>

                <div className='flex items-center justify-between mt-2'>
                    {!hideDeleteBtn && (
                        <button className='text-red-500 hover:text-red-700' onClick={onDelete}>
                            <LuTrash2 size={18} />
                        </button>
                    )}

                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-md ${getAmountStyles()}`}>
                        <h6 className='text-sm font-semibold'>
                            {type === 'income' ? '+' : '-'} ${amount}
                        </h6>
                        
                        {type === 'income' ? <LuTrendingUp/> : <LuTrendingDown/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionInfoCard