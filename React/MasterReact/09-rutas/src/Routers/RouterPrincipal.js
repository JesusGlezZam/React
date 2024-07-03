import React from 'react'
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom'
import { Inicio } from '../Components/Inicio'
import { Articulos } from '../Components/Articulos'
import { Contacto } from '../Components/Contacto'
import { Error } from '../Components/Error'

export const RouterPrincipal = () => {
  return (
    /**configuracion de la rutas; estructura para la pagina inicial, menu de navegacion, etc etc..  */
    <BrowserRouter>

        <h1> Cabecera</h1><hr/>

        <h2>Menu</h2><hr/>

        <section>
            {/**Cada ruta debe estar en Routes */}
            {/**Se carga componente que coincida con el path articulos /articulos*/}
            <Routes>
                    <Route path="/" element={<Inicio/>} />
                    <Route path="/inicio" element={<Inicio/>} />
                    <Route path="/articulos" element={<Articulos/>} />
                    <Route path="/contacto" element={<Contacto/>} />
                    <Route path="/*" element={<Error/>} />
            </Routes>
        </section><hr/>

        <footer>
            Este es el pie de pagina
        </footer>
        

    </BrowserRouter>
  )
}
