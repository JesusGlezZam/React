import React, { useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader';
import '../NuevosEstilos.css'

export const FormularioNuevosEstilosSpinner = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
      nombre: '',
      apellidos: '',
      correo: ''
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
  
      try {
        const response = await new Promise((resolve) =>
          setTimeout(() => resolve({ data: 'Respuesta recibida' }), 2000)
        );
        console.log('Respuesta:', response.data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div>
        <h1>Formulario con DEshabilita el boton al momento</h1>
       
        <form onSubmit={handleSubmit} className={loading ? 'loading' : ''}>
          <input
            type='text'
            name='nombre'
            placeholder='Nombre'
            value={formData.nombre}
            onChange={handleChange}
            disabled={loading}
          />
          <input
            type='text'
            name='apellidos'
            placeholder='Apellidos'
            value={formData.apellidos}
            onChange={handleChange}
            disabled={loading}
          />
          <input
            type='email'
            name='correo'
            placeholder='Correo electrónico'
            value={formData.correo}
            onChange={handleChange}
            disabled={loading}
          />
          <input type='submit' value='Enviar' disabled={loading} />
        </form>
  
        {loading && (
          <div className='overlay'>
            <ClipLoader color='#fff' loading={loading} size={50} />
          </div>
        )}
      </div>
    );
}
