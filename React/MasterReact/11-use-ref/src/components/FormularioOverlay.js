import React, { useRef } from 'react'
import ClipLoader from 'react-spinners/ClipLoader';
import '../FormularioOVerlay.css'

export const FormularioOverlay = () => {
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
      document.getElementById('overlay').style.display = 'flex';
  
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
        document.getElementById('overlay').style.display = 'none';
      }
    };
  
    return (
      <div>
        <h1>UseRef sobrepone el spinner dentro de la pantalla</h1>
        <p>Hace una referencia con un elemento del DOM con una propiedad current con un valor dentro. El valor persiste dentro del ciclo de vida del componente.</p>
  
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
  
        <div id="overlay" className='overlay'>
          <ClipLoader color='#fff' size={50} />
        </div>
      </div>
    );
}
