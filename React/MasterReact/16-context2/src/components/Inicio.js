import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Inicio = () => {

  const {usuario}= useContext(PruebaContext)

  


  return (
    <div>
      <h1>Inicio</h1>
      <p>Pagina de inicio</p>

     <p>Valor compartido: <strong>{usuario.nombre} {usuario.web}</strong></p>



    </div>
  )
}
