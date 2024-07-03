import React from 'react'

/**
 * Componente Editar
 * 
 * Este componente permite editar los detalles de una película.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {Object} props.peli - Los detalles de la película a editar.
 * @param {Function} props.conseguirPeliculas - Función para obtener la lista actualizada de películas.
 * @param {Function} props.setEditar - Función para actualizar el estado del componente padre con la lista actualizada de películas.
 */
export const Editar = (props) => {
  const titulo_componente = "Editar película: ";

  /**
   * Maneja el evento de guardar la edición de una película.
   *
   * La función obtiene los datos del formulario, encuentra la película en el listado
   * y actualiza sus detalles en localStorage y en el estado del componente padre.
   *
   * @param {Object} e - El evento del formulario.
   * @param {number|string} id - El ID de la película a editar.
   */
  const guardarEdicion = (e, id) => {
    e.preventDefault();

    // Obtener el formulario del evento
    const target = e.target;

    // Buscar el índice de la película a actualizar
    const peliculas_almacenadas = props.conseguirPeliculas();
    const indice = peliculas_almacenadas.findIndex(peli => peli.id === id);

    // Crear un objeto con el ID, título y descripción actualizados
    const pelicula_actualizada = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value
    };

    // Actualizar el elemento en el array de películas
    peliculas_almacenadas[indice] = pelicula_actualizada;

    // Guardar el array actualizado en localStorage
    localStorage.setItem('generico', JSON.stringify(peliculas_almacenadas));

    // Actualizar el estado del componente padre y cerrar el formulario de edición
    props.setEditar(peliculas_almacenadas);
  };

  return (
    <div className="edit_form">
      <h3>{titulo_componente} {props.peli.id}</h3>
      <form onSubmit={e => guardarEdicion(e, props.peli.id)}>
        <input
          type="text"
          name="titulo"
          className="titulo_editado"
          defaultValue={props.peli.titulo}
        />
        <textarea
          name="descripcion"
          className="descripcion_editada"
          defaultValue={props.peli.descripcion}
        />
        <input
          type="submit"
          className="editar"
          value="Actualizar"
        />
      </form>
    </div>
  );
};
