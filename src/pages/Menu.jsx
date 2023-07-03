import React, { useState } from 'react';
import '../Styles/menu.css';

import pizza1 from '../Images/pizzamargarita.jpg';
import pizza2 from '../Images/pizzanapolitana.jpg';
import pizza3 from '../Images/pizzacarbonara.jpg';
import pizza4 from '../Images/pizzadiabola.jpg';
import pizza5 from '../Images/pizzafugazza.jpg';
import pizza6 from '../Images/pizzafugazzetarellena.jpg';
import pizza7 from '../Images/pizzabarbacoa.jpg';
import pizza8 from '../Images/calzone.jpg';
import pizza9 from '../Images/jachapuri.jpg';
import pizza10 from '../Images/pizzamarinara.jpg';
import pizza11 from '../Images/pizzaputtanesca.jpg';
import pizza12 from '../Images/pizzafunghi.jpg';



const menuItems = [
  {
    id: 1,
    name: 'Pizza Margarita',
    description: 'La pizza Margarita es una pizza clásica de la cocina italiana. Tiene una base de masa crujiente cubierta con salsa de tomate, queso mozzarella y hojas de albahaca fresca. Es conocida por su sencillez y equilibrio de sabores.',
    image: pizza1,
  },
  {
    id: 2,
    name: 'Pizza Napolitana',
    description: 'La pizza napolitana tiene una masa suave y esponjosa, salsa de tomate San Marzano, mozzarella di bufala, aceite de oliva, orégano y albahaca fresca. Es un plato clásico de Nápoles, Italia, reconocido por su autenticidad y sabores tradicionales.',
    image: pizza2,
  },
  {
    id: 3,
    name: 'Pizza Carbonara',
    description: 'La pizza carbonara tiene una base de masa de pizza cubierta con salsa de carbonara cremosa, panceta o tocino y queso rallado. Combina los sabores de la pasta carbonara con la textura crujiente de la pizza.',
    image: pizza3,
  },
  {
    id: 4,
    name: 'Pizza Diavola',
    description: 'pizza picante con salsa de tomate, salami picante y queso mozzarella. Opcionalmente, se pueden agregar aceitunas o chiles para un toque extra de intensidad. ¡Una explosión de sabor audaz en cada bocado!',
    image: pizza4,
  },
  {
    id: 5,
    name: 'Pizza Fugazza',
    description: 'Masa esponjosa, cebolla caramelizada y queso mozzarella se unen para crear una combinación irresistible. ¡Ven y prueba nuestra auténtica pizza Fugazza y déjate llevar por su encanto!',
    image: pizza5,
  },
  {
    id: 6,
    name: 'Pizza Fugazza Rellena',
    description: 'Nuestra versión única de la clásica Fugazza, esta pizza te sorprenderá con su relleno irresistible. Deliciosa masa esponjosa, cebolla caramelizada, queso mozzarella y un generoso relleno de jamón y queso, todo combinado en un bocado perfecto.',
    image: pizza6,
  },
  {
    id: 7,
    name: 'Pizza Barbacoa',
    description: ' Esta irresistible pizza presenta una base de masa crujiente cubierta con salsa de tomate condimentada, generosas porciones de carne de res o cerdo desmenuzada y marinada en salsa barbacoa, cebolla picada y queso derretido.',
    image: pizza7,
  },
  {
    id: 8,
    name: 'Calzone',
    description: 'Este plato clásico de la cocina italiana presenta una masa de pizza doblada y sellada, rellena de una combinación irresistible de ingredientes. Disfruta de una mezcla de sabores como jamón, queso, tomate, champiñones y especias, todo envuelto en una capa de masa crujiente.',
    image: pizza8,
  },
  {
    id: 9,
    name: 'Pizza Jachapuri',
    description: 'Inspirada en el clásico plato de Georgia, esta pizza está hecha con una masa suave y esponjosa, rellena de una mezcla irresistible de queso feta, huevos y especias aromáticas. ',
    image: pizza9,
  },
  {
    id: 10,
    name: 'Pizza Marinara',
    description: 'Esta pizza clásica no lleva queso, pero se destaca por su base de masa delgada y crujiente, cubierta con una generosa capa de salsa de tomate fresco, ajo, aceite de oliva y sabrosas especias mediterráneas.',
    image: pizza10,
  },
  {
    id: 11,
    name: 'Pizza Puttanesca',
    description: 'Inspirada en la famosa salsa italiana, esta pizza cuenta con una base de masa delgada y crujiente, cubierta con salsa de tomate, aceitunas negras, anchoas, alcaparras y un toque de ajo y especias.',
    image: pizza11,
  },
  {
    id: 12,
    name: 'Pizza Funghi',
    description: 'Esta pizza clásica italiana presenta una base de masa crujiente cubierta con salsa de tomate, queso mozzarella y una generosa cantidad de champiñones frescos.',
    image: pizza12,
  },
];

const Menu = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="menu-container">
      <h1>Menú</h1>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`menu-item ${hoveredItem === item ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={item.image} alt={item.name} />
            <div className="item-description">
              <h3>{item.name}</h3>
              {hoveredItem === item && <p>{item.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;