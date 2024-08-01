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
    {/*1
    <p>Valor compartido: <strong>{datoDesdeElContexto.tiempo}</strong></p> */}  

    {/**2 Imprimir todo el JSON  <prev></prev> para mosttrar el previo     datoDesdeElContexto.id si se quiere mostrar el atributo*/}
    {/*<p>Valor JSON: <pre>{JSON.stringify(datoDesdeElContexto)}</pre></p>  */} 

    {/** 2.5 Utilizando la propiedad para acceder a un elemento del estado desde app */}
    <p>Valor JSON: <pre>{JSON.stringify(datoDesdeElContexto.usuario.web)}</pre></p> 

    <p>Valor: <strong>Desde desestrutucacion El nombre {usuario.nombre} con web: {usuario.web}</strong></p> 

      
    
      

  </div>
  )
}
