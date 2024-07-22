// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './componentes/NavBar';
import NotFound from './componentes/NotFound';
import fetchData from './componentes/fetchData';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './componentes/ItemListContainer';
import Contacto from './componentes/Contacto';
import Alquileres from './componentes/Alquileres';


function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetchData()
      .then(response => {
        setProductos(response);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer productos={productos} />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/Alquileres" element={<Alquileres />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
