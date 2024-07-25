import React, { useEffect, useRef, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {
    const [nombreGestor, setnameGestor] = useState("")
    const [numPagina, setNumPagina] = useState(1)
    //const gestorInput = useRef();

    const asignarGestor = e =>{
        //Esto es una prueba con ref
        //console.log(gestorInput.current.value)
        //setnameGestor(gestorInput.current.value)
        setnameGestor(e.target.value)
    }
    const numeroPagina = (pagina) =>{
      setNumPagina(pagina)
    }

    useEffect(()=>{
      console.log("Vista gestion actualizada")
    },[nombreGestor,numPagina])

    
  return (
    <div>
        <h1>Notas: las REf sirven para seleccionar cosas del formulario para tener una referencia del DOM y para cuando siempre actualizar en tiempo real en esa referencia</h1>
        <h1>Nombre del gestor: {nombreGestor}</h1>  
        <h2>Listado de empleados</h2>
        {/**
          Pureba con parametro de ref  
        <input type='text' ref={gestorInput} onChange={asignarGestor} placeholder='Introduce tu nombre de Gestor'/> */}
        
        <input type='text' onChange={asignarGestor} placeholder='Introduce tu nombre de Gestor'/>
        <p>Los usuarios son gestionados por {nombreGestor} vienen de placeholder</p>
        {/* Botones para cambiar la página */}
      <button onClick={() => numeroPagina(1)}>Pagina 1</button>
      <button onClick={() => numeroPagina(2)}>Pagina 2</button>
        <Empleados numPagina={numPagina}/>
    </div>
  )
}
