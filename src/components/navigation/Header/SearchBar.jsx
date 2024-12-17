import React from 'react';

const SearchBar = () => {
  return (
    <input
      type="text"
      placeholder="Search..."
      className="rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 w-64"
    />
  );
};

export default SearchBar;