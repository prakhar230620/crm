import React from 'react';

const StatIcon = ({ icon }) => {
  return (
    <div className="p-3 bg-blue-50 rounded-lg">
      <span className="text-2xl">{icon}</span>
    </div>
  );
};

export default StatIcon;