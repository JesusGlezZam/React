import React, { Component } from 'react';

class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {
          busqueda: '',
          noEncontrado: false
        };
      }
    
      /**
       * Maneja el evento de búsqueda de películas.
       *
       * La función obtiene el valor del campo de búsqueda, filtra el listado de películas
       * para encontrar coincidencias y actualiza el estado del listado de películas y del indicador de no encontrado.
       *
       * @param {Object} e - El evento del input de búsqueda.
       */
      buscarPelicula = (e) => {
        const valorBusqueda = e.target.value;
        this.setState({ busqueda: valorBusqueda });
    
        // Si la longitud de la búsqueda es menor o igual a 1, restablecer el listado de películas al valor genérico
        if (valorBusqueda.length <= 1) {
          const peliculasGenericas = JSON.parse(localStorage.getItem('generico')) || [];
          this.props.setListadoPelicula(peliculasGenericas);
          this.setState({ noEncontrado: false });
          return;
        }
    
        // Filtrar el listado de películas para encontrar coincidencias
        const peliculas_encontradas = this.props.listadoPelicula.filter((peli) =>
          peli.titulo.toLowerCase().includes(valorBusqueda.toLowerCase())
        );
    
        // Actualizar el estado noEncontrado basado en el resultado de la búsqueda
        if (peliculas_encontradas.length === 0) {
            this.setState({ noEncontrado: true });
            // Restaurar el listado completo de películas desde localStorage
            const peliculasGenericas = JSON.parse(localStorage.getItem('generico')) || [];
            this.props.setListadoPelicula(peliculasGenericas);
          } else {
            this.setState({ noEncontrado: false });
            // Actualizar el estado del listado de películas con las coincidencias encontradas
            this.props.setListadoPelicula(peliculas_encontradas);
          }
    
      };
    
      render() {
        const { busqueda, noEncontrado } = this.state;
    
        return (
          <div className="search">
            <h3 className="title">Buscador</h3>
            {/*
              Mostrar el mensaje de "No se ha encontrado ninguna coincidencia"
              solo si noEncontrado es true y la longitud de la búsqueda es mayor a 1
            */}
            {noEncontrado && busqueda.length > 1 && (
              <span className='no-encontrado'> No se ha encontrado ninguna coincidencia</span>
            )}
            <form>
              <input
                type="text"
                id="search_field"
                name="busqueda"
                autoComplete="off"
                value={busqueda}
                onChange={this.buscarPelicula} // Llamar a buscarPelicula en cada cambio del input
              />
              <button id="search">Buscar</button>
            </form>
          </div>
        );
      }
}

export default Buscador;
