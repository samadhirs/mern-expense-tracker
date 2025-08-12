import React from 'react'

const Modal = ({ children, isOpen, onClose, title }) => {
    if (!isOpen) return null;
  return (
    <div className='fixed top-0 right-0 left-0 z-50 flex items-center justify-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden bg-black/20 bg-opacity-50'>
        <div className='relative p-4 w-full max-w-2xl max-h-full'>
            {/* Modal content */}
            <div className='relative bg-white rounded-lg shadow-sm dark:bg-gray-700'>
                {/* Modal header */}
                <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200'>
                    <h3 className='text-lg font-medium text-gray-900 dark:text-white'>
                        {title}
                    </h3>

                    <button
                        type='button'
                        className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'
                        onClick={onClose}
                    >
                        <svg
                            className='w-5 h-5'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 20 20'
                            strokeWidth='1.5'
                            stroke='currentColor'
                        >
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M6.293 5.293a1 1 0 011.414 0L12 9.586l4.293-4.293a1 1 0 111.414 1.414L13.414 11l4.293 4.293a1 1 0 01-1.414 1.414L12 12.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 11l-4.293-4.293a1 1 0 010-1.414z'
                                fill='currentColor'
                            />
                        </svg>
                    </button>
                </div>

                {/* Modal body */}
                <div className='p-4 md:p-5 space-y-4'>
                    {children}
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default Modal