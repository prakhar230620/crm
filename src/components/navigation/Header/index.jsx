import React from 'react';
import SearchBar from './SearchBar';
import NotificationBell from './NotificationBell';
import UserProfile from './UserProfile';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <SearchBar />
        </div>
        <div className="flex items-center space-x-4">
          <NotificationBell />
          <UserProfile />
        </div>
      </div>
    </header>
  );
};

export default Header;