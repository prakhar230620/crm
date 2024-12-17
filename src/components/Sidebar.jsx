import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { title: 'Dashboard', icon: '🏠' },
    { title: 'Leads & Clients', icon: '👥' },
    { title: 'Properties', icon: '🏢' },
    { title: 'Agents', icon: '👤' },
    { title: 'Transactions', icon: '📄' },
    { title: 'Reports', icon: '📊' },
    { title: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="bg-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <div className="flex items-center space-x-2 px-4 mb-6">
        <span className="text-2xl">📱</span>
        <span className="text-2xl font-semibold">Next Innovation</span>
      </div>
      
      <nav>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={`/${item.title.toLowerCase().replace(/ & /g, '-')}`}
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-100 hover:text-gray-900"
          >
            <div className="flex items-center space-x-2">
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </div>
          </Link>
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