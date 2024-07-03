import React, { Component } from 'react'

export default class Editar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo_componente: "Editar película: "
        };
    }

    /**
     * Maneja el evento de guardar la edición de una película.
     *
     * La función obtiene los datos del formulario, encuentra la película en el listado
     * y actualiza sus detalles en localStorage y en el estado del componente padre.
     *
     * @param {Object} e - El evento del formulario.
     * @param {number|string} id - El ID de la película a editar.
     */
    guardarEdicion = (e, id) => {
        e.preventDefault();

        // Obtener el formulario del evento
        const target = e.target;

        // Buscar el índice de la película a actualizar
        const peliculas_almacenadas = this.props.conseguirPeliculas();
        console.log(peliculas_almacenadas)
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
        this.props.setEditar(peliculas_almacenadas);
    };

    render() {
        const { titulo_componente } = this.state;
        const { peli } = this.props;

        return (
            <div className="edit_form">
                <h3>{titulo_componente} {peli.id}</h3>
                <form onSubmit={e => this.guardarEdicion(e, peli.id)}>
                    <input
                        type="text"
                        name="titulo"
                        className="titulo_editado"
                        defaultValue={peli.titulo}
                    />
                    <textarea
                        name="descripcion"
                        className="descripcion_editada"
                        defaultValue={peli.descripcion}
                    />
                    <input
                        type="submit"
                        className="editar"
                        value="Actualizar"
                    />
                </form>
            </div>
        );
    }
}
