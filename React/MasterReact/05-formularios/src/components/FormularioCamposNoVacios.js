import React,{useState} from 'react'

export const FormularioCamposNoVacios = () => {
    const [usuario, setUsuario] = useState({
        nombre: '',
        apellido: '',
        genero: '',
        biografia: ''
      });
    
      const conseguirDatosFormulario = e => {
        e.preventDefault();
        
        let datos = e.target;
        console.log(datos);
    
        let usuarioActualizado = {
          nombre: datos.nombre.value,
          apellido: datos.apellido.value,
          genero: datos.genero.value,
          biografia: datos.biografia.value
        };
    
        console.log(usuarioActualizado);
        setUsuario(usuarioActualizado);
      };
    
      // Manejador de cambios para actualizar el estado
      const handleChange = e => {
        setUsuario({
          ...usuario,
          [e.target.name]: e.target.value
        });
      };
    
      const mostrarBiografia = () => {
        if (usuario.biografia && usuario.biografia.length >= 1) {
          return (
            <div className='info_usuario label-gray'>
              {usuario.nombre} {usuario.apellido} es un {usuario.genero} y su biografia es: <p>{usuario.biografia}</p>
            </div>
          );
        }
        return null;
      };
    
      // Determinar si el botón debe estar deshabilitado
      const isFormValid = usuario.nombre.trim() !== '' && usuario.apellido.trim() !== '';
    
      return (
        <div>
          <h1>Formulario</h1>
          <form onSubmit={conseguirDatosFormulario} >
            <div>
              <label>Nombre:</label>
              <input 
                type="text" 
                name="nombre" 
                value={usuario.nombre} 
                onChange={handleChange} 
              />
            </div>
            <div>
              <label>Apellido:</label>
              <input 
                type="text" 
                name="apellido" 
                value={usuario.apellido} 
                onChange={handleChange} 
              />
            </div>
            <div>
              <label>Género:</label>
              <select 
                name="genero" 
                value={usuario.genero} 
                onChange={handleChange}
              >
                <option value="">Seleccione</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
              </select>
            </div>
            <div>
              <label>Biografía:</label>
              <textarea 
                name="biografia" 
                value={usuario.biografia} 
                onChange={handleChange}
              />
            </div>
            <button type="submit" disabled={!isFormValid}>Enviar</button>
          </form><hr></hr>
          
          <h2>Datos del usuario:</h2>
          <div className="usuario-datos">
                    <p>Nombre: {usuario.nombre}</p>
                    <p>Apellido: {usuario.apellido}</p>
                    <p>Género: {usuario.genero}</p>
                    <p>Biografía: {usuario.biografia}</p>
          </div>
    
         
        </div>
      );
    };