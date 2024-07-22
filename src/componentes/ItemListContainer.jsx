// ItemListContainer.jsx
import React, { useState, useEffect } from 'react';
import Item from './Item';
import RoomsFilter from './RoomsFilter';

const ItemListContainer = ({ productos }) => {
  const [allProductos, setAllProductos] = useState([]);
  const [filteredProductos, setFilteredProductos] = useState([]);
  const [rooms, setRooms] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setAllProductos(productos);
    setFilteredProductos(productos);
  }, [productos]);

  useEffect(() => {
    const filterProducts = () => {
      const filtered = allProductos.filter((producto) =>
        rooms === 0 ? true : producto.habitaciones === rooms || (rooms === 5 && producto.habitaciones >= 5)
      );
      setFilteredProductos(filtered);
    };

    filterProducts();
  }, [rooms, allProductos]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <RoomsFilter onFilterChange={setRooms} />
      <div className="item-list">
        {filteredProductos.map((item) => (
          <Item key={item.id} item={item} onClick={() => handleProductClick(item)} />
        ))}
      </div>
      {selectedProduct && (
        <div className="product-detail">
          <button className="close-btn" onClick={handleCloseDetail}>Close</button>
          <img src={selectedProduct.image} alt={selectedProduct.nombre} />
          <h2>{selectedProduct.nombre}</h2>
          <p>{selectedProduct.descripcion}</p>
          <p>Precio: ${selectedProduct.precio.toFixed(2)}</p>
          <p>Habitaciones: {selectedProduct.habitaciones}</p>
          <p>Ubicacion: {selectedProduct.ubicacion}</p>
          <p>Baños: {selectedProduct.banos}</p>
          <p>Superficie: {selectedProduct.superficie} m²</p>
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
