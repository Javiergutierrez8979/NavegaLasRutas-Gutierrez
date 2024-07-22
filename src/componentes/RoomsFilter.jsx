// RoomsFilter.jsx
import React from 'react';

const RoomsFilter = ({ onFilterChange }) => {
  const handleFilterChange = (e) => {
    onFilterChange(parseInt(e.target.value, 10) || 0);
  };

  return (
    <div className="rooms-filter">
      <label>
        Cantidad de Habitaciones:
        <select onChange={handleFilterChange}>
          <option value="0">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5+</option>
        </select>
      </label>
    </div>
  );
};

export default RoomsFilter;
    