import React, { useEffect, useRef, useState } from 'react'

export const Ejemplo = () => {
    const [numeroSaludo, setNumeroSaludo] = useState(0)
    const saludosEnCola =useRef(numeroSaludo);


    /**Ejercicio efecto que los ponga en cola y se fueran enviando con cierto retraso cada que se utilice numeroSaludo es decir cada que haca click*/
   /* useEffect(() =>{
        setTimeout(() =>{
            console.log("Mensajes en cola: " +numeroSaludo)
        },2000)

    },[numeroSaludo])*/ /**Cada que se utiliza  demora 2 seg para mostrar el incremental en el log*/
    
      /**Ejercicio efecto al hacer muchos clicks demora 2 seg pero muestra en el log el actualizado de clicks */
      useEffect(() =>{
        saludosEnCola.current =numeroSaludo
        setTimeout(() =>{
            console.log("Mensajes en cola: " + saludosEnCola.current)
        },2000)

    },[numeroSaludo]) /**Cada que se utiliza  demora 2 seg para mostrar el incremental en el log*/

    const enviarSaludo = e =>{
        setNumeroSaludo(numeroSaludo +1)
       // console.log("click en saludos: "+numeroSaludo)
    }


  return (
    <div>
        <h1>Ejemplo con use ref: permite almacenar informacion mutable (que puede cambiar en cualquier momento)
        permite modificar el valor de la referencia por curren, pero no hace un cambio visual en el componente</h1>
        <h2>Saludos enviados: {numeroSaludo}</h2>
        <button onClick={enviarSaludo}>Enviar saludo</button>
    </div>
  )
}
