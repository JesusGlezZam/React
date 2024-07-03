import React, { useEffect } from 'react'

export const ListadoProps = (props) => {
    useEffect(() => {
        console.log("Componente cargado de películas");
        conseguirPeliculas();
    }, []);

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("generico"));
        props.setListadoPelicula(peliculas);; // Actualiza listadoPelicula usando props.setListadoPelicula
        console.log(peliculas);
    };

    return (
        <>  
            {props.listadoPelicula !=null ? 
                props.listadoPelicula.map(peli => {
                    return (
                        <article key={peli.id} className="peli-item">
                            <h3 className="title">{peli.titulo}</h3>
                            <p className="description">{peli.descripcion}</p>
                
                            <button className="edit">Editar</button>
                            <button className="delete">Borrar</button>
                        </article>
                    );
                })
            :(<h2>No hay peliculas dentro del storage props</h2>)
          }
        </>
    );
}


