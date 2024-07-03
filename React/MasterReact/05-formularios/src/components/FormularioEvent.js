import React, {useState} from 'react'

export const FormularioEvent = () => {
    const [usuario, setUsuario] = useState({})

    const conseguirDatosFormulario= e=>{
      e.preventDefault();
      
      let datos = e.target;
      console.log(datos)
  
      let usuario ={
        nombre: datos.nombre.value,
        apellido: datos.apellido.value,
        genero: datos.genero.value,
        biografia: datos.biografia.value
      };
      console.log(usuario)
      setUsuario(usuario)
    }

    const cambiarDatos = e =>{
        setUsuario({  /*llamada de call back*/
            ...usuario,
            [e.target.name]: e.target.value
          });
        console.log(e.target)
        console.log(e.target.value)
    }

    /*Misma logica diferente codigo*/

    const cambiarDatosDifLog = e =>{
        let name_del_input = e.target.name

        setUsuario({  /*llamada de call back*/
        ...usuario,
        [name_del_input]: e.target.value
      })
    }
  
    return (
      <div>
          <h1>Formularios en con evento se actualiza el evento con el cambio del campo validacion de campo biografia</h1>
  
       { usuario.biografia && usuario.biografia.length >= 1 &&   
              (<div className='info_usuario label-gray' >
                  {usuario.nombre} {usuario.apellido} es un {usuario.genero} y su biografia es: <p>{usuario.biografia}</p>
              </div>)
       }      
      <form onSubmit={conseguirDatosFormulario}>
          <input type='text' 
                 name="nombre" 
                 placeholder='Nombre'
                 onChange={cambiarDatos} />
          <input type='text' name="apellido" placeholder='Apellido'  onChange={cambiarDatos}/>
          <select name="genero"  onChange={cambiarDatos}>
              <option value="hombre">Hombre</option>
              <option value="mujer">Mujer</option>
          </select>
          <textarea placeholder='Biografia' name="biografia"  onChange={cambiarDatosDifLog}></textarea>
          <input type='submit' value="Enviar" />
         
      </form>
      </div>
    )
  }
  