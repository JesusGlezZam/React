import React, { Component } from 'react'

export default class EventosComponetsProps extends Component {
    constructor(props) {
        super(props);
    
        // Inicializar el estado con un valor por defecto
        this.state = {
          nombre: 'Jesus'
        };
    
        // Enlazar los métodos en el constructor
        this.hasDadoClick = this.hasDadoClick.bind(this);
        this.hasDadoClickParam = this.hasDadoClickParam.bind(this);
        this.hasDadoDobleClick = this.hasDadoDobleClick.bind(this);
        this.hasEntrado = this.hasEntrado.bind(this);
        this.estasDentro = this.estasDentro.bind(this);
        this.estasFuera = this.estasFuera.bind(this);
      }
    
      // Métodos para manejar los diferentes eventos
      hasDadoClick() {
        alert("Has dado click a una función sin parámetros");
      }
    
      hasDadoClickParam(e, nombre) {
        alert("Has dado click a una función con parámetros " + nombre);
      }
    
      hasDadoDobleClick() {
        alert("Has dado doble click");
      }
    
      hasEntrado(e, accion) {
        console.log(`Has ${accion} a la caja con el mouse`);
      }
    
      estasDentro(e) {
        console.log("Estás dentro del input, mete tu nombre");
      }
    
      estasFuera(e) {
        console.log("Estás fuera del input, ¡adiós!");
      }
    
      render() {
        return (
          <div> 
            <h1>Eventos en React con un componente Clase pasando props</h1>
            
            {/* Función flecha */}
            <button onClick={() => { console.log("haciendo un click") }}>Dame click</button>
            <br/>
    
            <button onClick={this.hasDadoClick}>Dame click función sin param</button>
            <br/>
    
            <button onClick={(e) => this.hasDadoClickParam(e, this.state.nombre)}>Dame click función con param</button>
            <br/>
    
            <button onDoubleClick={this.hasDadoDobleClick}>Dame doble click</button>
            <br/>
    
            <div id='caja' 
                  onMouseEnter={e => this.hasEntrado(e,"entrado")}
                  onMouseLeave={e => this.hasEntrado(e,"salido")}>
              {/**Evento onMouseEnter on MouseLeave */}
              Pasa el mouse sobre mí
             </div>
            
            <br/>
            {/* Eventos onFocus y onBlur */}
            <input type='text'
                   onFocus={this.estasDentro}
                   onBlur={this.estasFuera}
                   placeholder='Introduce tu nombre...'/>
          </div>
        );
      }
}
