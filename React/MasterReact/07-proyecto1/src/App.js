import { useState } from "react";
import { Buscador } from "./Components/Buscador";
import { Crear } from "./Components/Crear";
import { ListadoDesestruturacion } from "./Components/ListadoDesestruturacion";
import { Peliculas } from "./Components/Peliculas";



function App() {
    //Estado para poder pasar las peliculas y rendericen en la pagina principal
    const [listadoPelicula, setListadoPelicula] = useState([]);


  return (
    <div className="layout">
    {/*Cabecera*/}
    <header className="header">
        <div className="logo">
            <div className="play"></div>
        </div>
        
        <h1>MisPelis</h1>
    </header>

    {/*Barra de navegación*/}
    <nav className="nav">
        <ul>
            <li><a href="/#">Inicio</a></li>
            <li><a href="/#">Peliculas</a></li>
            <li><a href="/#">Blog</a></li>
            <li><a href="/#">Contacto</a></li>
        </ul>
    </nav>
        
    {/*Contenido principal*/}
        <section id="content" className="content">
            <ListadoDesestruturacion listadoPelicula={listadoPelicula}  setListadoPelicula={setListadoPelicula}/>
            {/*<ListadoProps listadoPelicula={listadoPelicula}  setListadoPelicula={setListadoPelicula}/>*/}
           
        </section>

    {/*Barra lateral*/}
    <aside className="lateral">
        <Buscador listadoPelicula={listadoPelicula}  setListadoPelicula={setListadoPelicula}/>
        <Crear setListadoPelicula={setListadoPelicula}/>
    </aside>

    {/*Pie de página*/}
    <footer className="footer">
        &copy; Máster en React - <a href="https://victorroblesweb.es">victorroblesweb.es</a>
    </footer>

</div>
  );
}

export default App;
