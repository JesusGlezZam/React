import React, {useState} from 'react'

export const PrimerComponente = () => {
   // let nombre = "Jesus Glez"
    let web = "jesus@gmail.com"

    let cursos= [
        "Martes en JavaScript",
        "Master en PHP",
        "Master en React",
        "Master en CSS"
    ]
     
    const [nombre, setNombre] = useState("Pamela Mejia");

    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre);
    }
    


  return (
    <div>
        <h1>Mi primer componente</h1>
        <p>Esto es un texto en mi componentet</p>
        <p>Mi nombre es: <strong className={nombre.length >=4 ? 'verde' : 'rojo'}>{nombre}</strong></p>
        <p>Mi web es: {web}</p> 

        <button onClick={ e => cambiarNombre("Jesus Zamudio")}>Cambiar nombre</button><br/>
        <button onClick={ e =>
                            {console.log("El valor del estadoes: ",nombre)}
                        
                        }>Conocer el estado de nombre</button><br/>


        <input type='text' onChange={e => cambiarNombre(e.target.value)} placeholder='cambia el nombre'/>

        <h2>Cursos: </h2>
        <ul>
        {/**Funcion  para imprimir un arreglo */}
            {
                cursos.map((curso, indice) =>{
                     return(
                        <li key={indice}>
                            {curso}
                        </li>
                     )
                })
            }
        </ul>  
    </div>
  )
}
