import React, { useState } from 'react'

/**
 * Componente Buscador
 * 
 * Este componente permite buscar películas dentro del listado proporcionado.
 * Actualiza el listado de películas basado en la búsqueda realizada por el usuario.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {Array} props.listadoPelicula - La lista de películas.
 * @param {Function} props.setListadoPelicula - Función para actualizar la lista de películas.
 */
export const Buscador = ({ listadoPelicula, setListadoPelicula }) => {
  const [busqueda, setBusqueda] = useState('');
  const [noEncontrado, setNoEncontrado] = useState(false);

  /**
   * Maneja el evento de búsqueda de películas.
   *
   * La función obtiene el valor del campo de búsqueda, filtra el listado de películas
   * para encontrar coincidencias y actualiza el estado del listado de películas y del indicador de no encontrado.
   *
   * @param {Object} e - El evento del input de búsqueda.
   */
  const buscarPelicula = (e) => {
    const valorBusqueda = e.target.value;
    setBusqueda(valorBusqueda);

    // Si la longitud de la búsqueda es menor o igual a 1, restablecer el listado de películas al valor genérico
    if (valorBusqueda.length <= 1) {
      const peliculasGenericas = JSON.parse(localStorage.getItem('generico')) || [];
      setListadoPelicula(peliculasGenericas);
      setNoEncontrado(false);
      return;
    }

    // Filtrar el listado de películas para encontrar coincidencias
    const peliculas_encontradas = listadoPelicula.filter((peli) =>
      peli.titulo.toLowerCase().includes(valorBusqueda.toLowerCase())
    );

    // Actualizar el estado noEncontrado basado en el resultado de la búsqueda
    if (peliculas_encontradas.length === 0) {
      setNoEncontrado(true);
    } else {
      setNoEncontrado(false);
    }

    // Actualizar el estado del listado de películas con las coincidencias encontradas
    setListadoPelicula(peliculas_encontradas);
  };

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
          onChange={buscarPelicula} // Llamar a buscarPelicula en cada cambio del input
        />
        <button id="search">Buscar</button>
      </form>
    </div>
  );
};
