import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext';

export const Login = () => {
   
  //desestructurar un estado
  const {usuario, setUsuario} = useContext(PruebaContext)

  const guardarDatos = e =>{
    e.preventDefault();
    //console.log(e.target.nick.value) //Ese console, se utiliza para validar que los valores si pasen en la funcion

    let usuario_identificado= {
      nick: e.target.nick.value,
      nombre: e.target.nombre.value,
      web: e.target.web.value
    }

    console.log(usuario_identificado)  // Validar que el objeto si se esta mostrando


    setUsuario(usuario_identificado)

  } 
  return (
    <div>
    <h1>Login</h1>
    <p>Pagina de sign up</p>

    <form className='login' onSubmit={guardarDatos}>
        <input type='text' name="nick" placeholder='NickName:' />
        <input type='text' name="nombre" placeholder='Nombre:' />
        <input type='text' name="web" placeholder='Web:' />

        <input type='submit' value="Enviar" />
    </form>
  </div>
  )
}
