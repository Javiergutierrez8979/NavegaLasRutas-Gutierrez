import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../img/Blue_and_Yellow_Illustrative_Travel_Agency_Logo-removebg-preview.png'
import Carrito from '../img/cesta-de-la-compra.png';
import CartWidget from '../componentes/CartWidget';


function NavBar () {
    
    return( 

        

        <div>

            <nav className
    ="navbar navbar-expand-xl  bg-secondary ">    
  <div className="container-fluid">
    <Link to='/'>
    <img src={Logo} width= "60px" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
      <span className
="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse show" id="navbarDark">
      <ul className
="navbar-nav me-auto mb-2 mb-xl-0">
        <li className
="nav-item">
          <Link className
    ="nav-link active" aria-current="page"  to='/'>Ventas</Link>
        </li>
        <li className
="nav-item">
          <Link className
    ="nav-link"  to='/Alquileres'>Alquiler</Link>
        </li>
        <li className
="nav-item">
          <Link className
    ="nav-link " to='/Contacto'>Contacto</Link>
        </li>

      </ul>
    </div>
    <div>

        
        <Link to='/Carrito'>

                <img src={Carrito} width="30em"  alt="" />

        </Link>
</div>


  </div>


</nav>

  
        </div>
        

    );
} 


export default NavBar;