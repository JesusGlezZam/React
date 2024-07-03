import React, { Component } from 'react'

// con una clase/*
export default class EventosComponentsClase extends Component {

  //tambien se podria pasar las propiedades para pasar un constructor props .bind(this)

  hasDadoClick = () => {
    alert("Has dado click a una funcion sin parametros");
}
 // Definimos la función que maneja el evento y recibe parámetros
 hasDadoClickParam = (e, nombre) => {
 alert("Has dado click a una funcion con parametros " + nombre);
}
 hasDadoDobleClick = () =>  {
  alert("Has dado doble click  ");
}
hasEntrado =(e, accion)=>{
  console.log(`Has ${accion} a la caja con el mouse`);

}

estasDentro = e=> {
  console.log("Estas dentro del input, mete tu nombre");
}

estasFuera = e=> {
  console.log("Estas fuera del input, adios!");
}

  render() {
    return (
      <div> 
                <h1>Eventos en react con un componente Clase</h1>
             {/*funcion flecha*/}
             <button onClick={()=>{console.log("haciendo un click")}}>Dame click</button>
             <br/>
             <button onClick={this.hasDadoClick}>Dame click funcion sin param</button>

             <br/>
             <button onClick={(e) => this.hasDadoClickParam(e, 'Juan')}>Dame click funcion con param</button>
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
              {/**Eventos onFocus y blur*/}
              <input type='text'
                    onFocus={this.estasDentro}
                    onBlur={this.estasFuera}
                    placeholder='Introduce tu nombre...'/>
      </div>    
    )
  }
}
