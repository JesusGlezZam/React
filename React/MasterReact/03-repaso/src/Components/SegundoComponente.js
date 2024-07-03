import React, { Component } from 'react'

export default class SegundoComponente extends Component {
    constructor(props){
        super(props);
        this.state={
            nombre: "Karen Mejia",
            web: "karen@gmail.com"
        }

     this.cambiarNombre=this.cambiarNombre.bind(this);
    }

    cambiarNombre(e, nuevoNombre){
        this.setState({ 
            nombre: nuevoNombre
        })
    }



  render() {
    return (
      <div>
        <h1>Componente con funcion bind</h1>
        <p>Clase componente con funcion bind</p>
        <p>Mi nombre es: <strong className={this.state.nombre.length >=4 ? 'verde' : 'rojo'}>{this.state.nombre}</strong></p>
        <p>Mi web es: {this.state.web}</p> 

        <button onClick={ e => this.cambiarNombre(e,"Jesus Zamudio")}>Cambiar nombre</button><br/>
        <button onClick={ e =>
                            {console.log("El valor del estadoes: ",this.state.nombre)}
                        
                        }>Conocer el estado de nombre</button><br/>


        <input type='text' onChange={e => this.cambiarNombre(e, e.target.value)} placeholder='cambia el nombre'/>
      </div>
    )
  }
}
