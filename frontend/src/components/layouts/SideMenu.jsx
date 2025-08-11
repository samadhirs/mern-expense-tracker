import React, { useContext } from 'react'
import { SIDE_MENU_DATA } from "../../utils/data";
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const SideMenu = ({ activeMenu }) => {
  const { user, clearUser } = useContext(UserContext);  

  const navigate = useNavigate();

  const handleClick = (route) => {
    if (route === 'logout') {
      handleLogout();
      return;
    }
    navigate(route);
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate('/login');
  };
  
  return (
    <div className='flex flex-col h-full p-4 bg-gray-100'>
      <div className='flex items-center justify-between mb-4'>
        {user ?.profileImageUrl ? (
          <img
            src={user ?.profileImageUrl || ""}
            alt="Profile Image"
            className="w-12 h-12 rounded-full"
          />
        ) : (
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-white text-lg">{user ?.name ? user.name.charAt(0).toUpperCase() : 'U'}</span>
          </div>
        )}

        <h5 className='text-lg font-semibold text-gray-800'>
          {user ?.fullName || ""}
        </h5>
      </div>

      {SIDE_MENU_DATA.map((item, index) => (
          <button
            key={`menu_${index}`}
            className={`flex items-center p-2 mb-2 rounded-lg hover:bg-gray-200 ${activeMenu === item.route ? 'bg-gray-300' : ''}`}
            onClick={() => handleClick(item.path)}
          >
            <item.icon className="text-gray-700 mr-2" />
            <span className="text-gray-800">{item.label}</span>
          </button>
      ))}
      
    </div>
  )
}

export default SideMenu