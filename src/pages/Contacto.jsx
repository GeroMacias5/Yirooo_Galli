import React, { useState } from 'react';
import '../Styles/contacto.css';

const Contacto = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div >
      <h2>Formulario de Contacto</h2>
      <form className='formC' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto