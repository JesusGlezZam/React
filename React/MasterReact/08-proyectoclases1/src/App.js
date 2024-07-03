import React, { Component } from 'react';
import Buscador from './Componets/Buscador';
import Crear from './Componets/Crear';
import Listado from './Componets/Listado';


class App extends Component {
     constructor(props) {
        super(props);
        this.state = {
            listadoPelicula: [], // Inicializar listadoPelicula como un array vacío
        };
        //métodos como callbacks
        //this.setListadoPelicula = this.setListadoPelicula.bind(this);
    }

    setListadoPelicula = (nuevasPeliculas) => {
        this.setState({ listadoPelicula: nuevasPeliculas });
    }

    /**
     *  setListadoPelicula(nuevasPeliculas) {
    this.setState({ listadoPelicula: nuevasPeliculas });
  }
     */

    render() {
        return (
            <div className="layout">
                {/* Cabecera */}
                <header className="header">
                    <div className="logo">
                        <div className="play"></div>
                    </div>
                    <h1>MisPelis</h1>
                </header>

                {/* Barra de navegación */}
                <nav className="nav">
                    <ul>
                        <li><a href="/#">Inicio</a></li>
                        <li><a href="/#">Películas</a></li>
                        <li><a href="/#">Blog</a></li>
                        <li><a href="/#">Contacto</a></li>
                    </ul>
                </nav>

                {/* Contenido principal */}
                <section id="content" className="content">
                    <Listado
                        listadoPelicula={this.state.listadoPelicula}
                        setListadoPelicula={this.setListadoPelicula}
                    />
                </section>

                {/* Barra lateral */}
                <aside className="lateral">
                    <Buscador
                        listadoPelicula={this.state.listadoPelicula}
                        setListadoPelicula={this.setListadoPelicula}
                    />
                    <Crear
                        setListadoPelicula={this.setListadoPelicula}
                        listadoPelicula={this.state.listadoPelicula}
                    />
                </aside>

                {/* Pie de página */}
                <footer className="footer">
                    &copy; Máster en React - <a href="https://victorroblesweb.es">victorroblesweb.es</a>
                </footer>
            </div>
        );
    }
}
export default App;
