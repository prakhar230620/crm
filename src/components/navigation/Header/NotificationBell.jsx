import React from 'react';

const NotificationBell = ({ count = 1 }) => {
  return (
    <div className="relative">
      <button className="p-1 rounded-full text-gray-400 hover:text-gray-500">
        <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
          {count}
        </span>
        🔔
      </button>
    </div>
  );
};

export default NotificationBell;