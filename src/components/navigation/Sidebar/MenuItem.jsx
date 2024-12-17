import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ title, icon, path }) => {
  return (
    <Link
      to={path}
      className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-100 hover:text-gray-900"
    >
      <div className="flex items-center space-x-2">
        <span>{icon}</span>
        <span>{title}</span>
      </div>
    </Link>
  );
};

export default MenuItem;