import React,{useState} from 'react'

export const MiPrimerEstadoFuncion = () => {
  //let nombre="Jesus Gonzalez"

  // hook nombre: Valor actual del estado (declaracion del estado)  setNombre: función que se usa para actualizar el valor de nombre  useState: Valor inicial del estado
  const [nombre, setNombre] = useState("Jesus Zamudio")

  
  const cambiarNombre = () =>{
    setNombre ("Ambar Zamudio")
  }

  const cambiarNombreParam = (e, nombreFijo) =>{
    setNombre(nombreFijo)
  }

  return (
    <div>
        <h3>Componente: Mi primer estado</h3>
        <strong className='label'>{nombre}</strong><br/>
        {/** Hook usState */}
        <button onClick={cambiarNombre}>Cambiar</button><br/>

        <button onClick={e => cambiarNombreParam(e, "Mildred")}>Cambiar</button><br/>

        <input type='text' onChange={ e => cambiarNombreParam(e, e.target.value)} />
    </div>
  )
}
