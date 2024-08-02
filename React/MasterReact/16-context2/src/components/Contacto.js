import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Contacto = () => {
  //2.5
  const datoDesdeElContexto = useContext(PruebaContext)


  const {usuario} = useContext(PruebaContext)

  return (
    <div>
    <h1>Contacto</h1>
    <p>Pagina de contacto</p>
    
    <p>Valor JSON:</p>
    <pre>{JSON.stringify(datoDesdeElContexto.usuario.web)}</pre> 

    <p>Valor: <strong>Desde desestrutucacion El nombre {usuario.nombre} con web: {usuario.web}</strong></p> 

  </div>
  )
}
