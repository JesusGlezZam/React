import React, { useCallback, useEffect, useState } from 'react'
import { EmpleadosCallBack } from './EmpleadosCallBack'

export const GestionCallBack = () => {
    const [nombreGestor, setnameGestor] = useState("")
    const [numPagina, setNumPagina] = useState(1)
    //const gestorInput = useRef();

    const asignarGestor = e =>{
        setnameGestor(e.target.value)
    }
    const numeroPagina = (pagina) =>{
      setNumPagina(pagina)
    }

    useEffect(()=>{
      console.log("Vista gestion actualizada")
    },[nombreGestor,numPagina])
    
    const mostrarMesaje = useCallback(() =>{
        console.log("Hola que tal soy un mesaje desde el componente Empleados")
    },[numPagina])
    
  return (
    <div>
        <h1>Use Call back solo cuando una de sus dependencias se actualice a nivel componente - funciones</h1>
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
        <EmpleadosCallBack numPagina={numPagina} mensaje={mostrarMesaje}/>
    </div>
  )
}
