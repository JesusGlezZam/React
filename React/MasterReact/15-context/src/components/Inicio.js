import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Inicio = () => {

  //2.5 
  //const compartida= useContext(PruebaContext)
  
  //3.5 utilizando la desestructucacion del estado usuario usuario de App.js
  const {usuario}= useContext(PruebaContext)

  


  return (
    <div>
      <h1>Inicio</h1>
      <p> Se pueden pasar valores u objetos, json con useContext .Provider ejemplo</p>
      <p>Pagina de inicio</p>
     {/*1 <p>Valor compartido: <strong>{datoDesdeElContexto}</strong></p>  
          pasando solo datoDesdeElContexto porque solo se pasaba un valor, se puede usar la desestructuracion o datoDesdeElContexto. titutlo */}
     
     {/*2 <p>Valor compartido: <strong>{compartida.titulo}</strong></p>  */}

     {/*2.5
     <p>Valor compartido: <strong>{compartida.usuario.nombre}</strong></p> */}

     <p>Valor compartido: <strong>{usuario.nombre}</strong></p>



    </div>
  )
}
