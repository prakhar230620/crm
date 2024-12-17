import React from 'react';

const StatChange = ({ change }) => {
  const isPositiveChange = change.startsWith('+');
  
  return (
    <div className="mt-4">
      <span className={`text-sm ${isPositiveChange ? 'text-green-500' : 'text-red-500'}`}>
        {change}
      </span>
      <span className="text-gray-600 text-sm ml-2">vs last month</span>
    </div>
  );
};

export default StatChange;