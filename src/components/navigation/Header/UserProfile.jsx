import React from 'react';

const UserProfile = ({ username = 'Admin' }) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-700">{username}</span>
      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
        {username[0]}
      </div>
    </div>
  );
};

export default UserProfile;