import React, { Component } from 'react'
import propTypes from 'prop-types';

export default class EjercicioComponentClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
          yearNow: props.year
        };
        this.siguiente = this.siguiente.bind(this);
        this.anterior = this.anterior.bind(this);
        this.cambiarYear = this.cambiarYear.bind(this);
      }
    
      siguiente() {
        this.setState(prevState => ({
          yearNow: prevState.yearNow + 1
        }));
      }
    
      anterior() {
        this.setState(prevState => ({
          yearNow: prevState.yearNow - 1
        }));
      }
    
      cambiarYear(e) {
        const nuevoAno = e.target.value;
        if (!isNaN(nuevoAno)) {
          this.setState({
            yearNow: nuevoAno
          });
        } else {
          alert("Por favor, introduce un número válido.");
        }
      }
    
    
  render() {
    return (
      <div>
         <h2>Ejercicio con constrcutor</h2>
        <strong className='label label-green'>{this.state.yearNow}</strong>    
        <button onClick={this.siguiente}>Siguiente</button>
        <button onClick={this.anterior}>Anterior</button><br/>
        <input type='text' onChange={this.cambiarYear} placeholder='Cambia el año' />
      </div>
    )
  }
}

EjercicioComponentClass.prototype={
    year: propTypes.number.isRequired
  }


