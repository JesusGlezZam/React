import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'
import { Chat } from './Chat'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
          Hola! Soy Jesus Gonzalez y soy <strong>automatizador de pruebas Web, moviles y de servicios</strong>, con frameworks de Selenium, Cypress, Appium y Postman,
          se realizar  integraciones continuas con Jenkis y un poco de Docker.
          Actualmente estoy <strong>programando y desarrollando</strong> servicios de desarrollo web con tecnologia de React.
      </h1>

      <h2 className='tittle'>
          Te ayudo a desarrollar tus automatizacioes para poder ejecutarlas a peticion o hacer programaciones de ejecucion.
          Ademas te ayudo a crear tu sitio web para tener mas visibilidad y relevancia en internet <Link to='/contacto'>Contacta conmigo</Link>
      </h2>

      <section className='last-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>
          Estos son algunos de mis trabajos
        </p>
        <ListadoTrabajos limite="2"/>
      </section>

      <Chat /> {/* Añadir el componente de chat aquí */}
    </div>
  )
}
