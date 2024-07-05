import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div>
        <h1>Error 404</h1>
        <strong>Esta pagina no existe</strong><br/>
         {/** Enlace suelto */}
        <Link to="/inicio">Volver al inicio</Link><br></br>
        <a href='https://github.com/JesusGlezZam/React'>Ejemplo de navegacion React</a>
    </div>
  )
}
