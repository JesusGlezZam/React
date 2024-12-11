import React from 'react'

export const Servicios = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Servicios</h1>
      
      <section className='services'>
        <article className='service'>
            <h2>Diseno Web</h2>
            <p>Hago que tu web se vea bonita</p>
        </article>

        <article className='service'>
            <h2>Desarrollo Web</h2>
            <p>Hago tu pagina web desde cero</p>
        </article>

        <article className='service'>
            <h2>Pocisionamiento Web</h2>
            <p>Hago que tu web aparezca en Google y la vea la gente</p>
        </article>

        <article className='service'>
            <h2>Pruebas automatizadas</h2>
            <p>Hago que las pruebas sean ejecutadas solo con datos de entrada</p>
        </article>

      </section>
    </div>
  )
}
