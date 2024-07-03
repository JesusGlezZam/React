import React, { Component } from 'react'
import Editar from './Editar';

export default class Listado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editar: 0
        };
    }


    componentDidMount() {
        console.log("Componente cargado de películas");
        this.conseguirPeliculas();
    }

    conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("generico")) || [];
        this.props.setListadoPelicula(peliculas);
        return peliculas;
    };

    borrarPelicula = (id) => {
        let peliculasAlmacenadas = JSON.parse(localStorage.getItem("generico")) || [];
        let actualizacionPeliculas = peliculasAlmacenadas.filter(pelicula => pelicula.id !== parseInt(id));
        this.props.setListadoPelicula(actualizacionPeliculas);
        localStorage.setItem('generico', JSON.stringify(actualizacionPeliculas));
    };

    render() {
        const { listadoPelicula } = this.props;
        const { editar } = this.state;

        return (
            <>
                {Array.isArray(listadoPelicula) && listadoPelicula.length > 0 ? (
                    listadoPelicula.map(pelicula => (
                        <article key={pelicula.id} className="peli-item">
                            <h3 className="title">{pelicula.titulo}</h3>
                            <p className="description">{pelicula.descripcion}</p>
                            <button className="edit" onClick={() => this.setState({ editar: pelicula.id })}>Editar</button>
                            <button className="delete" onClick={() => this.borrarPelicula(pelicula.id)}>Borrar</button>
                            {editar === pelicula.id && (
                                <Editar
                                    peli={pelicula}
                                    conseguirPeliculas={this.conseguirPeliculas}
                                    setEditar={() => this.setState({ editar: 0 })}
                                />
                            )}
                        </article>
                    ))
                ) : (
                    <h2>No hay películas dentro del storage</h2>
                )}
            </>
        );
    }
}