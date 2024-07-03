import React,{useState} from 'react'

export const FormularioComponent = () => {

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

  return (
    <div>
        <h1>Formularios en react Enviar hasta ese momento se envia el form, condicion de biografia</h1>

     { usuario.biografia && usuario.biografia.length >= 1 &&   
            (<div className='info_usuario label-gray' >
                {usuario.nombre} {usuario.apellido} es un {usuario.genero} y su biografia es: <p>{usuario.biografia}</p>
            </div>)
     }      
    <form onSubmit={conseguirDatosFormulario}>
        <input type='text' name="nombre" placeholder='Nombre' />
        <input type='text' name="apellido" placeholder='Apellido' />
        <select name="genero">
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
        </select>
        <textarea placeholder='Biografia' name="biografia"></textarea>
        <input type='submit' value="Enviar" />
       
    </form>
    </div>
  )
}
