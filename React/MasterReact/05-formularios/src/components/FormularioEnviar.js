import React, {useState} from 'react'

export const FormularioEnviar = () => {
    const [usuario, setUsuario] = useState({})

    const conseguirDatosFormulario= e=>{
      e.preventDefault();
      
      let datos = e.target;
      console.log(datos)
  
      let usuario ={
        nombre: datos.nombre.value,
        apellido: datos.apellido.value,
        genero: datos.genero.value,
        biografia: datos.biografia.value,
        enviar: datos.enviar.value
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
        /*
        expandir array literales
        var parts = ['shoulders', kness]:
        var lyrics =['head', ...parts, 'toes']
        //['head', 'shoulders', kness, 'toes']
        */
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
          <h1>Solo se muestra hasta que se le de enviar, no trae condicion de biografia</h1>
  
       { usuario.enviar &&   
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
          <input type='submit' value="Enviar" name='enviar' />
         
      </form>
      </div>
    )
  }
  