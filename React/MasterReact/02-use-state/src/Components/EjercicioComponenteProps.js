import React ,{useState} from 'react'
import propTypes from 'prop-types';

export const EjercicioComponenteProps = (props) => { 
    
    const [yearNow, setYearNow] = useState(props.year);

    const siguiente = e =>{
        setYearNow(yearNow+1);
    }

    const anterior = e =>{
        let operacion= yearNow - 1;
        setYearNow(operacion);
    }

    const cambiarYear = (nuevoAno) =>{
      if (!isNaN(nuevoAno)) {
        setYearNow(nuevoAno);
      } else {
        alert("Por favor, introduce un número válido.");
      }
    }


    return (
      <div>
          <h2>Ejericicio props</h2>
          <strong className='label label-green'>{yearNow}</strong>    
          <button onClick={siguiente}>siguiente</button>
          <button onClick={anterior}>anterior</button><br/>
          <input type='text' onChange={e => cambiarYear(e.target.value)} placeholder='Cambia el ano' />
        </div>
    )
  }

  EjercicioComponenteProps.prototype={
    year: propTypes.number.isRequired
  }
  