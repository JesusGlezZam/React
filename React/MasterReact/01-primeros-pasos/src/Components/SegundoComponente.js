// rafc es el comando para crear un componente
import React from 'react'

export const SegundoComponente = () => {

    const libros = ["Harry Potter", "Juego de Tronos", "Los juegos del hambre"];
   // const libros = [];

  return (
    <div className='segundo-componente'>
        <h1>Listado de libros estatico</h1>
            <ul>
                <li>{libros [0]}</li>
                <li>{libros [1]}</li>
                <li>{libros [2]}</li>
            </ul>

         <h2>Listado con map pasando parametro el index</h2>  
           { /* Haciendo una funcion  */ }
            {libros.length >=1 ?
                (<ul>
                 {  //*Esta seria otra funcion*/
                    libros.map((libro,indice) =>{
                        return <li key={indice}>{libro}</li>
                    })
                 }
               </ul>) : (<p>No hay elementos</p>)
            }
    </div>
  )
}
