import React, { useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import SideMenu from './SideMenu';

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  
  return (
    <div className='flex items-center justify-between p-4 bg-white shadow-md'>
      <button
        className="p-2 text-gray-700 hover:text-gray-900"
        onClick={() => {
          setOpenSideMenu(!openSideMenu);
        }}
      >
        {openSideMenu ? (
          <HiOutlineX
            className="text-2xl"
            //onClick={() => setOpenSideMenu(false)}
          />
        ) : (
          <HiOutlineMenu
            className="text-2xl"
            //onClick={() => setOpenSideMenu(true)}
          />
        )}
      </button>

      <h2 className='text-2xl font-bold text-gray-800'>
        Expense Tracker
      </h2>

      {openSideMenu && (
        <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  )
}

export default Navbar