// Item.jsx
import React from 'react';
import Casa from '../img/102125-OME6US-967.jpg'

const Item = ({ item, onClick }) => {
  return (
    <div className="item-card" onClick={onClick}>
      <img src={Casa} alt={item.nombre} />
      <div className="card-content">
        <h2 className="card-title">{item.nombre}</h2>
        <p className="card-description">{item.nombre}</p>
        <p className="card-price">${item.precio.toFixed(2)}</p>
        <p className="card-rooms">Habitaciones: {item.habitaciones}</p>
      </div>
    </div>
  );
};

export default Item;
