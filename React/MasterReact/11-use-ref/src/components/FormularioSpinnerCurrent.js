import React, { useRef } from 'react'
import ClipLoader from 'react-spinners/ClipLoader';

export const FormularioSpinnerCurrent = () => {
    const loadingRef = useRef(false);
    const formDataRef = useRef({
      nombre: '',
      apellidos: '',
      correo: ''
    });
  
    const handleChange = (e) => {
      formDataRef.current = {
        ...formDataRef.current,
        [e.target.name]: e.target.value
      };
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      loadingRef.current = true;
      // Forzar re-renderizado
      document.getElementById('loading-indicator').style.display = 'block';
  
      // Simula un envío de formulario
      try {
        const response = await new Promise((resolve) =>
          setTimeout(() => resolve({ data: 'Respuesta recibida' }), 2000)
        );
        console.log('Respuesta:', response.data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        loadingRef.current = false;
        // Ocultar el spinner
        document.getElementById('loading-indicator').style.display = 'none';
      }
    };
  
    return (
      <div>
        <h1>Sppiner con useRef</h1>
        <p>muestra una spinner cuando se hace click sobre el boton</p>
  
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='nombre'
            placeholder='Nombre'
            onChange={handleChange}
          />
          <input
            type='text'
            name='apellidos'
            placeholder='Apellidos'
            onChange={handleChange}
          />
          <input
            type='email'
            name='correo'
            placeholder='Correo electrónico'
            onChange={handleChange}
          />
          <input type='submit' value='Enviar' />
        </form>
  
        <div id="loading-indicator" className='spinner' style={{ display: 'none' }}>
          <ClipLoader color='#000' size={50} />
        </div>
      </div>
    );
}
