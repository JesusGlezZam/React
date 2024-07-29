import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const EjemploComponent = () => {
    const [mostrar, setMostrar] = useState(useState(false))
    const caja = useRef();
    const boton = useRef();

    useLayoutEffect(
        () => {
            console.log("useLayoutEffect:  Componente cargado!!!")
        }
    )

    useEffect(
        () => {
            console.log("useLayoutEffect:  Componente cargado!!!")
            
            if(caja.current == null) return
            
            const {bottom} = boton.current.getBoundingClientRect();

            caja.current.style.marginTop = `${bottom +15}px`;
            caja.current.style.left = `${bottom +15}px`;
            console.log(bottom)

        },[mostrar]
    )

  return (
    <div>
        <h1> Ejemplo useEffect y use LayoutEffect</h1>

        <button ref={boton} onClick={() => setMostrar (prev => {
                console.log(!prev)
                return !prev;
        })}>Mostrar mensaje</button>
        
        {
            mostrar &&(
                <div id="caja" ref={caja}>
                    Hola soy un mensaje
                </div>
            )
        }
    </div>
  )
}
