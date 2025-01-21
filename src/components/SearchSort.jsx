import React from 'react';

function SearchSort({ onSearch, onSort, sortType }) {
  return (
    <div className="search-sort">
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <select 
        value={sortType}
        onChange={(e) => onSort(e.target.value)}
      >
        <option value="none">Sort by...</option>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
        <option value="price-desc">Price (High to Low)</option>
        <option value="price-asc">Price (Low to High)</option>
       
      </select>
    </div>
  );
}

export default SearchSort;