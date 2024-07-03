import React, { useEffect, useState } from 'react'
import { Editar } from './Editar'
/**
 * Componente ListadoDesestruturacion
 * 
 * Este componente muestra una lista de películas almacenadas en localStorage.
 * Permite editar y borrar películas de la lista.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {Array} props.listadoPelicula - La lista de películas.
 * @param {Function} props.setListadoPelicula - Función para actualizar la lista de películas.
 */
export const ListadoDesestruturacion = ({ listadoPelicula, setListadoPelicula }) => {
    const [editar, setEditar] = useState(0);

    // Ejecuta conseguirPeliculas cuando el componente se monta
    useEffect(() => {
        console.log("Componente cargado de películas");
        conseguirPeliculas();
    }, []);

    /**
     * Obtiene la lista de películas desde el almacenamiento local.
     *
     * La función recupera las películas almacenadas en localStorage bajo la clave "generico",
     * las convierte de JSON a un objeto JavaScript y actualiza el estado `listadoPelicula` con estas películas.
     *
     * @returns {Array} La lista de películas obtenida desde el almacenamiento local.
     */
    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("generico"));
        setListadoPelicula(peliculas);
        return peliculas;
    };

    /**
     * Elimina una película del almacenamiento local y actualiza el estado del listado.
     *
     * La función obtiene la lista de películas almacenadas en localStorage,
     * filtra la lista para eliminar la película con el ID especificado,
     * actualiza el estado `listadoPelicula` con la lista filtrada y
     * guarda la lista actualizada en localStorage.
     *
     * @param {number|string} id - El ID de la película a eliminar.
     */
    const borrarpelicula = (id) => {
        let peliculas_almacenadas = conseguirPeliculas();
        let actualizacion_peliculas = peliculas_almacenadas.filter(pelicula => pelicula.id !== parseInt(id));
        console.log(peliculas_almacenadas, actualizacion_peliculas);
        setListadoPelicula(actualizacion_peliculas);
        localStorage.setItem('generico', JSON.stringify(actualizacion_peliculas));
    };

    return (
        <>
            {listadoPelicula != null ? (
                listadoPelicula.map(peli => (
                    <article key={peli.id} className="peli-item">
                        <h3 className="title">{peli.titulo}</h3>
                        <p className="description">{peli.descripcion}</p>
                        <button className="edit" onClick={() => setEditar(peli.id)}>Editar</button>
                        <button className="delete" onClick={() => borrarpelicula(peli.id)}>Borrar</button>
                        {editar === peli.id && (
                            <Editar
                                peli={peli}
                                conseguirPeliculas={conseguirPeliculas}
                                setEditar={setEditar}
                            />
                        )}
                    </article>
                ))
            ) : (
                <h2>No hay películas dentro del storage desestruturacion</h2>
            )}
        </>
    );
};
    
   /*   return (
        <>
            {/*Se utiliza listadoPelicula && para verificar si listadoPelicula no es null ni undefined.}
            {listadoPelicula !=null ? 
                listadoPelicula.map(peli => {
                    return (
                        /*aqui van las peliculas
                        <article key={peli.id} className="peli-item">
                        <h3 className="title">{peli.titulo}</h3>
                        <p className="description">{peli.descripcion}</p>
                
                            <button className="edit">Editar</button>
                            <button className="delete">Borrar</button>
                        </article>
                    );
                })
                :<h2>No hay peliculas dentro del storage</h2>
            }
               
        </>
      )*/

