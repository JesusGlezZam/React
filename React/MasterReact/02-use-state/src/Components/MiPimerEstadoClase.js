import React, { Component } from 'react'

export default class MiPimerEstadoClase extends Component {
    constructor(props) {
        super(props);
    
        // Inicializa el estado con el valor "Jesus Zamudio"
        this.state = {
          nombre: "Alberto Scorfano"
        };
    
        // Enlazar los métodos
        this.cambiarNombre = this.cambiarNombre.bind(this);
        this.cambiarNombreParam = this.cambiarNombreParam.bind(this);
    }

     // Método para cambiar el nombre sin parámetros
    cambiarNombre() {
        this.setState({
        nombre: "Yulia Portobello"
        });
    }

    // Método para cambiar el nombre con parámetros
    cambiarNombreParam(e, nombreFijo) {
        this.setState({
        nombre: nombreFijo
        });
    }
  
    render() {
    return (
      <div>  
            <h3>Componente: Mi primer estado</h3>
            <strong className='label'>{this.state.nombre}</strong><br/>

            <button onClick={this.cambiarNombre}>Cambiar</button><br/>

            <button onClick={e => this.cambiarNombreParam(e, "Lucas")}>Cambiar</button><br/>

            <input type='text' onChange={e => this.cambiarNombreParam(e, e.target.value)} />
    </div>
    )
  }
}
