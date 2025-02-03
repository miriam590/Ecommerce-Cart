import React from 'react';

function SearchSort({ onSearch }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchSort;
