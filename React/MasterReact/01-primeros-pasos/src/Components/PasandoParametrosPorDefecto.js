import React from 'react'
import propTypes from 'prop-types';

export const PasandoParametrosPorDefecto  = ({nombre, apellidos, ficha}) => { //puede ser pasandola por la desestructuracion nombre="Alberto", apellidos="Escorfano"

    console.log(nombre, apellidos, ficha);
  
  return (
    <div>
        <h1>Pasando parametros por defecto</h1>
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
  PasandoParametrosPorDefecto.prototype ={
      nombre: propTypes.string.isRequired,
      apellidos: propTypes.string,
      ficha: propTypes.object
  }

  PasandoParametrosPorDefecto.defaultProps={
    nombre:"Alberto", 
    apellidos:"Escorfano"
  }
  