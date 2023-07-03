import React from 'react';
import '../Styles/header.css';
import logoImagen from '../Images/logo.png';


const Header = () => {
  
  return (
    <div className="header">
      <div className='contenedorLogo'>
        <img src={logoImagen} alt="logo a la derecha" />
      </div>
    </div>
  );
};

export default Header;