import React from 'react';
import Logo from './Logo';
import MenuItem from './MenuItem';
import { menuItems } from '../../../config/navigation';

const Sidebar = () => {
  return (
    <div className="bg-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <Logo />
      
      <nav>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            title={item.title}
            icon={item.icon}
            path={`/${item.title.toLowerCase().replace(/ & /g, '-')}`}
          />
        ))}
      </nav>

      <div className="px-4 mt-auto">
        <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
          <span>🚪</span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;