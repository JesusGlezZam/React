import React, { useEffect } from 'react'

export const AvisoComponent = () => {

  useEffect(() => {
      //Cuando el componente se monta
      alert("El componente AvisoComponent esta montado")

      //Cuando el componente se desmonta SIRVE PARA ENVIAR EMAIL, LANZAR UNA PETICION AJAX
      return () => {
        alert("COMPONENTE DESMONTADO")
      } ;
  },[]);



  return (
    <div>
        <h3>Componente de aviso</h3>
        <button onClick={ e =>{
            alert("Bienvenido")}
        }>Mostrar alrta</button>
    </div>
  )
}
