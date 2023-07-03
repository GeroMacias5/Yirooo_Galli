import '../Styles/reservas.css';
import React, { useState } from 'react';

const Reservas = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(true);

    
    setName('');
    setPhone('');
    setDate('');
    setTime('');
    setGuests('');

   
    setTimeout(() => {
      setSuccessMessage(false);
    }, 3000);
  };

  return (
    <div className="reservas-container">
      <h1>Reservas</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre y Apellido:</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />

        
        <label htmlFor="phone">Teléfono:</label>
        <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

        <label htmlFor="date">Fecha:</label>
        <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />

        <label htmlFor="time">Hora:</label>
        <input type="time" id="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} />

        <label htmlFor="guests">Cantidad de Personas:</label>
        <input type="number" id="guests" name="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />

        <button type="submit">Enviar</button>
        {successMessage && <p className="success-message">Formulario enviado con éxito</p>}
      </form>
    </div>
  );
};

export default Reservas;
