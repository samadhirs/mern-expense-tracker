/*import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SideMenu from "./SideMenu";

const Navbar = ({ activeMenu }) => {
    const [openSideMenu, setOpenSideMenu] = useState(false);
  return (
    <div className "flex gap-5 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-7 sticky top-0 z-30">
        <button
            className="block lg:hidden text-black"
            onClick={() => {
                setOpenSideMenu(!openSideMenu)
            }
        
            {openSideMenu ? (
                <HiOutlineX className="text-2xl" />
            ) : (
                <HiOutlineMenu className="text-2xl" />
            )}
            
        </button>
        <h2 className="text-lg font-medium text-black">Expense Tracker</h2>

        {openSideMenu && (
            <div className="fixed top-[61px -ml-4 bg-white]">
                <SideMenu activeMenu={activeMenu} />
            </div>
        )}
    </div>
    <div>Navbar</div>
  )
}

export default Navbar;*/
import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SideMenu from "./SideMenu";

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <div className="flex items-center justify-between bg-white border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-7 sticky top-0 z-30">
      {/* Hamburger Menu (shown on small screens) */}
      <button
        className="block lg:hidden text-black"
        onClick={() => setOpenSideMenu(!openSideMenu)}
      >
        {openSideMenu ? (
          <HiOutlineX className="text-2xl" />
        ) : (
          <HiOutlineMenu className="text-2xl" />
        )}
      </button>

      {/* Logo / Title */}
      <h2 className="text-lg font-medium text-black">Expense Tracker</h2>

      {/* Mobile SideMenu (Slide-out style) */}
      {openSideMenu && (
        <div className="fixed top-[64px] left-0 w-64 h-full bg-white border-r border-gray-200 z-40 shadow-lg p-4">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
