import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../Styles/principal.css';
import nuevaImagen from '../Images/pizzanueva.png';
import Menu from '../pages/Menu';
import Reservas from '../pages/reservas';
import Contacto from '../pages/Contacto';

const Principal = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const cambiarImagen = () => {
    setHoveredImage(nuevaImagen);
    setIsHovered(true);
  };

  const restaurarImagen = () => {
    setHoveredImage(null);
    setIsHovered(false);
  };

  const handleMenuClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <Router>
      <div>
        <h1 className={`txtprincipal ${isHovered ? 'hovered' : ''}`}>La Mia Ragazza</h1>
        <h3 className="descprincipal">La Mia Ragazza es un auténtico restaurante italiano especializado en pizzas. Nuestro acogedor restaurante te ofrece una experiencia única, con deliciosas pizzas preparadas con ingredientes frescos y de calidad. Ven y disfruta de sabores auténticos y una atención cálida, ¡te esperamos!</h3>
        <div className="container">
          <Link
            to="/menu"
            className="redirecciones"
            onMouseEnter={cambiarImagen}
            onMouseLeave={restaurarImagen}
            onClick={handleMenuClick}
            style={{ backgroundImage: `url(${hoveredImage || nuevaImagen})` }}
          >
            <h1>Menú</h1>
          </Link>
          <Link
            to="/reservas"
            className="redirecciones"
            onMouseEnter={cambiarImagen}
            onMouseLeave={restaurarImagen}
            style={{ backgroundImage: `url(${hoveredImage || nuevaImagen})` }}
          >
            <h1>Reservas</h1>
          </Link>
          <Link
            to="/contacto"
            className="redirecciones"
            onMouseEnter={cambiarImagen}
            onMouseLeave={restaurarImagen}
            style={{ backgroundImage: `url(${hoveredImage || nuevaImagen})` }}
          >
            <h1>Contacto</h1>
          </Link>
        </div>

        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Principal;





