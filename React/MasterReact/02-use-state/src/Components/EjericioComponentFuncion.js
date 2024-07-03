import React, {useState} from 'react'
import propTypes from 'prop-types';


export const EjericioComponentFuncion = ({year}) => { 
    
    const [yearNow, setYearNow] = useState(year);
    const [error, setError] = useState('');

    const siguiente = e =>{
        setYearNow(yearNow+1);
    }

    const anterior = e =>{
        let operacion= yearNow - 1;
        setYearNow(operacion);
    }

    const cambiarYear = (e) => {
      const nuevoAno = e.target.value;
      if (!isNaN(nuevoAno)) {
        setYearNow(Number(nuevoAno));
        setError('');
      } else {
        setError('Por favor, introduce un número válido.');
      }
    }


    return (
      <div>
          <h2>Ejericicio con eventos y useState</h2>
          <strong className='label label-green'>{yearNow}</strong>    
          <button onClick={siguiente}>Ir al ano siguiente</button>
          <button onClick={anterior}>Ir al ano anterior</button><br/>
          <input type='text' onChange={cambiarYear} placeholder='Cambia el año' />
            {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
    )
  }

  EjericioComponentFuncion.prototype={
    year: propTypes.number.isRequired
  }
  