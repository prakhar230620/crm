import React from 'react';

const StatValue = ({ title, value }) => {
  return (
    <div>
      <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
      <p className="mt-2 text-3xl font-semibold">{value}</p>
    </div>
  );
};

export default StatValue;