import React from 'react'

export const Peliculas = () => { 
  return (
    <>
            {/*aqui van las peliculas*/}
            <article className="peli-item">
            <h3 className="title">Como si fuera la primera vez (2004)</h3>
            <p className="description">Henry es un hombre con miedo al compromiso, hasta que conoce a Lucy y siente que podría ser la chica indicada. Sin embargo, Lucy sufre de memoria a corto plazo y es incapaz de recordar lo que sucedió después de un trágico accidente que tuvo hace años.</p>

            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
            </article>

            <article className="peli-item">
            <h3 className="title">Garra (2022)</h3>
            <p className="description">Stanley es un reclutador de baloncesto que pasa por un mal momento en su carrera. Durante un viaje a España, descubre a un chico con un talento excepcional y un pasado turbulento. A pesar de las dificultades, ambos lucharán por llegar a la NBA.</p>

            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
            </article>

            <article className="peli-item">
            <h3 className="title">Click: perdiendo el control (2006)</h3>
            <p className="description">Michael se siente sobrepasado con su trabajo como arquitecto y le es difícil brindarle atención a su familia. Sin embargo, todo cambia cuando un extraño hombre le obsequia un control remoto universal que le permite manipular el tiempo a su antojo. Así, podrá adelantar todas las tareas tediosas, enfermedades y otros inconvenientes para dedicarse a lo que realmente quiere.</p>

            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
            </article>

            <article className="peli-item">
            <h3 className="title">Una esposa de mentira (2011)</h3>
            <p className="description">Danny es un exitoso cirujano plástico que finge estar casado para evitar relaciones a largo plazo. Todo cambia cuando conoce a Palmer, una joven y bella chica con la que sí desearía comprometerse. Sin embargo, ella descubre su falsa argolla de matrimonio y termina la relación.</p>

            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
            </article>
    </>
  )
}
