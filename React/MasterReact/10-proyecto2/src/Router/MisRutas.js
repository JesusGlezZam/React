import React from 'react'
import {BrowserRouter, Routes, Route, NavLink, Navigate} from "react-router-dom"
import { Inicio } from '../Componets/Inicio'
import { Portafolio } from '../Componets/Portafolio'
import { Servicios } from '../Componets/Servicios'
import { Curriculum } from '../Componets/Curriculum'
import { Contacto } from '../Componets/Contacto'
import { HeaderNav } from '../Layout/HeaderNav'
import { Footer } from '../Layout/Footer'
import { Error } from '../Componets/Error'
import { Proyecto } from '../Componets/Proyecto'

export const MisRutas = () => {
  return (
    <BrowserRouter>
        {/**Header y navegacion */}
        <HeaderNav />



        {/**Contenido central */}
        <section className='content'>
          <Routes>
              {/**Poner una ruta inicial cuando cargue la pagina   <Route path="/" element={<Inicio/>} /> */}
              <Route path="/" element={<Navigate to='/inicio'/>} />
              <Route path="/inicio" element={<Inicio/>} />
              <Route path="/portafolio" element={<Portafolio/>} />
              <Route path="/servicios" element={<Servicios/>} />
              <Route path="/curriculum" element={<Curriculum/>} />
              <Route path="/contacto" element={<Contacto/>} />

               {/**ruta con parametro dentro de la url */}
              <Route path="/proyecto/:id" element={<Proyecto/>} />
              
              <Route path="*" element={<Error/>} />
          </Routes>
        </section>
        


        {/**Footer */}
        <Footer/>

    </BrowserRouter>
  )
}
