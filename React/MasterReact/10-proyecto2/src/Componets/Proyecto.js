import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos';

export const Proyecto = () => {
    const params = useParams();
    const [proyecto, setProyecto] = useState({});


    useEffect( () =>{
        let mostrar = trabajos.filter( trabajos => trabajos.id === params.id)
        if (mostrar.length > 0) {
            setProyecto(mostrar[0]);
        }
        console.log(mostrar)
    },[]);

  return (
    <div className='page page-work'>
      <div className='mask'>
        <img src={"/images/"+proyecto.id+".png"} />
      </div>
      <h1 className='heading'>{proyecto.nombre}</h1>
        <p>Tecnologías: {proyecto.tecnologias}</p>
        <p>Categorías: {proyecto.categorias}</p>
        <a  href={"https://"+proyecto.url} target='_blank'>Ir al proyecto</a>

    </div>  
  )
}
