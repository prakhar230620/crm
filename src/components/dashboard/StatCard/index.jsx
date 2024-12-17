import React from 'react';
import StatIcon from './StatIcon';
import StatValue from './StatValue';
import StatChange from './StatChange';

const StatCard = ({ title, value, change, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-start">
        <StatValue title={title} value={value} />
        <StatIcon icon={icon} />
      </div>
      <StatChange change={change} />
    </div>
  );
};

export default StatCard;