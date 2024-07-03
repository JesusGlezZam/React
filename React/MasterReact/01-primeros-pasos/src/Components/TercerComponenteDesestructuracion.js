import React from 'react'
import propTypes from 'prop-types';

export const TercerComponenteDesestructuracion = ({nombre, apellidos, ficha}) => {

  console.log(nombre, apellidos, ficha);

return (
  <div>
      <h1>Comunicacion entre componentes, ejemplo de desestructurando las propiedades para pasarlo como parametro</h1>
      <ul>
          <li>{nombre}</li>
          <li>{apellidos}</li>
          <li>{ficha.altura}</li>
          <li>{ficha.grupo}</li>
      </ul>
  </div>
)
}

//Poniendole propiedades a las variables
TercerComponenteDesestructuracion.prototype ={
    nombre: propTypes.string.isRequired,
    apellidos: propTypes.string,
    ficha: propTypes.object
}



