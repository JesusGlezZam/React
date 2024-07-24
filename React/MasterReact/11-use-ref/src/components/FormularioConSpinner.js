import React, { useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'; // Importa el spinner que prefieras


export const FormularioConSpinner = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
      nombre: '',
      apellidos: '',
      correo: ''
    });
    
    /**Actualiza los datos del formulario cuando el usuario escribe en los campos. */
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
    
    /**Se llama cuando el formulario se envía. Aquí se simula una petición con un setTimeout. Mientras se espera la respuesta, loading se establece en true para mostrar el spinner. */
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
  
      // Simula un envío de formulario
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
        <h1>Para mostrar un Spinner con useState</h1>
  
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='nombre'
            placeholder='Nombre'
            value={formData.nombre}
            onChange={handleChange}
          />
          <input
            type='text'
            name='apellidos'
            placeholder='Apellidos'
            value={formData.apellidos}
            onChange={handleChange}
          />
          <input
            type='email'
            name='correo'
            placeholder='Correo electrónico'
            value={formData.correo}
            onChange={handleChange}
          />
          <input type='submit' value='Enviar' disabled={loading} />
        </form>
  
        {loading && (
          <div className='spinner'>
            <ClipLoader color='#000' loading={loading} size={50} />
          </div>
        )}
      </div>
    );
}
