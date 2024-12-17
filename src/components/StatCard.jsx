import React from 'react';

const StatCard = ({ title, value, change, icon }) => {
  const isPositiveChange = change.startsWith('+');
  
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
          <p className="mt-2 text-3xl font-semibold">{value}</p>
        </div>
        <div className="p-3 bg-blue-50 rounded-lg">
          <span className="text-2xl">{icon}</span>
        </div>
      </div>
      <div className="mt-4">
        <span className={`text-sm ${isPositiveChange ? 'text-green-500' : 'text-red-500'}`}>
          {change}
        </span>
        <span className="text-gray-600 text-sm ml-2">vs last month</span>
      </div>
    </div>
  );
};

export default StatCard;