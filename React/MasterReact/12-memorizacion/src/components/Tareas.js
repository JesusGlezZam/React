import React, { useMemo, useState } from 'react'

export const Tareas = () => {
  
  const [tareas,setTareas] =useState([])
  const [contador, setContador] = useState(1200)

  // Función para manejar el envío del formulario y agregar una nueva tarea
  const guardarTareas = e =>{
    e.preventDefault();
    let tareas_actualizadas = [...tareas, e.target.descripcion.value] 
    setTareas(tareas_actualizadas)
    e.target.descripcion.value = '';
    //.log(tareas) 

    /**Se puede hacer todo dentro de una misma linea */
    {/*setTareas((tarea) => [...tarea, e.target.descripcion.value])
      console.log(tareas)
      */}     
  }

  const borrarTarea = id =>{
    /**Filtar las tareas para borrar la que no quiero */
    let  act_tareas = tareas.filter((tarea,indice) => indice !== id)

      // Guarda el nuevo listado de tareas en el estado
      setTareas(act_tareas)
  }

  /**Use memo para que solo acute, cuando se un proceso largo, que cargue rendimiento de la aplicacion, cuando deba, no solo cuando se actualice un estado */
  const sumarAlContador = e =>{
    setContador(contador+1)
  }

  // Función costosa que se simula un procesamiento largo
  const contadresPasados = (acumulacion) =>{
    for(let i = 0; i<=acumulacion;i++){
      console.log("Ejecutando acululacion de contadores del pasado...")
    }
    return `<h3>Contador manual de tareas: ${acumulacion}</h3>`
  }

  // useMemo memoriza el resultado de contadoresPasados y solo recalcula cuando el contador cambia
  const memoContadores = useMemo(()=>contadresPasados(contador),[contador])

  return (
    <div>
        <h2>useMemo: Es útil para optimizar el rendimiento de componentes que realizan cálculos costosos, asegurando que estos cálculos solo se realicen cuando es necesario.</h2>
        <h1>Mis tareas</h1>
        <form className='tareas-container' onSubmit={guardarTareas}>
            <input type='text' name='descripcion' placeholder='describe la tarea'/>
            <input type='submit' value="Guarda tarea" />
        </form>

       {/** <h3>Contador manual de tareas: {contador}</h3> */}
        {/**Sustituimos por una funcion sin usar use memo repite en contador y tarea 
        <h3>{contadresPasados(contador)}</h3>*/}
        <h3>{memoContadores}</h3>        
        <button onClick={sumarAlContador}>Sumar</button>

        <h3>Lista de tareas:</h3>
        <ul>
          {
            tareas.map(
              (tarea,indice) =>{
                return (
                  <li key={indice}>
                    {tarea}
                    &nbsp;
                    <button onClick={() => borrarTarea(indice)}>x</button>
                  </li>
                )
              }
            )
          }
        </ul>
    </div>
  )
}
