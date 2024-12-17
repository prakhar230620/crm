import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 w-64"
          />
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="p-1 rounded-full text-gray-400 hover:text-gray-500">
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                1
              </span>
              🔔
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-700">Admin</span>
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
              A
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;