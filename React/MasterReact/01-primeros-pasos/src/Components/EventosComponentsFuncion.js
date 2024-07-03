import React from 'react'

// con una clase/*
export const EventosComponentsFuncion = () => {

   const hasDadoClick = () => {
       alert("Has dado click a una funcion sin parametros");
   }
    // Definimos la función que maneja el evento y recibe parámetros
   const hasDadoClickParam = (e, nombre) => {
    alert("Has dado click a una funcion d parametros " + nombre);
  }
  
  function hasDadoDobleClick (e) {
      alert("Has dado doble click  ");
  }

  const hasEntrado =(e, accion)=>{
    console.log(`Has ${accion} a la caja con el mouse`);

  }

  const estasDentro = e=> {
    console.log("Estas dentro del input, mete tu nombre");
  }

  const estasFuera = e=> {
    console.log("Estas fuera del input, adios!");
  }

    return (
      <div> 
                <h1>Eventos en react con un componente Funcion</h1>
             {/*funcion flecha no recomendablde aqui por temas de reutilizacion de  metodos*/}
             <button onClick={()=>{console.log("haciendo un click con funcion flecha no recomendable")}}>Dame click funcion flecha</button>
             

             <br/>
             <button onClick={hasDadoClick}>Dame click funcion sin param</button>

             <br/>
             <button onClick={(e) => hasDadoClickParam(e, 'Juan')}>Dame click funcion con param</button>

             <br/>
             <button onDoubleClick={hasDadoDobleClick}>Dame doble click</button>

             <br/>
              {/**Evento onMouseEnter on MouseLeave */}
             <div id='caja' 
                  onMouseEnter={e => hasEntrado(e,"entrado")}
                  onMouseLeave={e => hasEntrado(e,"salido")}>
                   Pasa el mouse sobre mí
             </div>

             <br/>
              {/**Eventos onFocus y blur*/}
              <input type='text'
                    onFocus={estasDentro}
                    onBlur={estasFuera}
                    placeholder='Introduce tu nombre...'/>
      </div>


    )
}


