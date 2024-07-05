import React from 'react'
import {Routes, Route, BrowserRouter, NavLink, Navigate} from 'react-router-dom'
import { Inicio } from '../Components/Inicio'
import { Articulos } from '../Components/Articulos'
import { Contacto } from '../Components/Contacto'
import { Error } from '../Components/Error'
import { Persona } from '../Components/Persona'
import { PanelControl } from '../Components/PanelControl'
import { InicioPanel } from '../Components/Panel/InicioPanel'
import { Gestion } from '../Components/Panel/Gestion'
import { Crear } from '../Components/Panel/Crear'
import { AcercaDe } from '../Components/Panel/AcercaDe'

export const RouterPrincipal = () => {

  return (
    /**configuracion de la rutas; estructura para la pagina inicial, menu de navegacion, etc etc..  */
    <BrowserRouter>

        <h1> Cabecera</h1><hr/>

        <h2>nav etiqueta para hacer navegacion web SPA "Single page aplication"</h2><hr/>
        <nav>
            <ul>
              <li>
              {/** Navegacion */}
                <NavLink to="/inicio"
                         className={({ isActive }) => isActive ? "activado" : ""}
                >Inicio</NavLink> 
              </li>

              <li>
                <NavLink to="/articulos"
                className={({ isActive }) => isActive ? "activado" : ""}
                >Articulos</NavLink>
              </li>

              <li>
                <NavLink to="/contacto"
                         className={({ isActive }) => isActive ? "activado" : ""}
                >Contacto</NavLink>
              </li>

              <li>
                <NavLink to="/persona"
                         className={({ isActive }) => isActive ? "activado" : ""}
                >Persona</NavLink>
              </li>
              
              <li>
                <NavLink to="/panel"
                         className={({ isActive }) => isActive ? "activado" : ""}
                >Panel Control</NavLink>
              </li>
            </ul>
        </nav><hr/>

        <section className='contenido-principal'>
            {/**Cada ruta debe estar en Routes */}
            {/**Se carga componente que coincida con el path articulos /articulos*/}
            <Routes>
                    <Route path="/" element={<Inicio/>} />
                    <Route path="/inicio" element={<Inicio/>} />
                    <Route path="/articulos" element={<Articulos/>} />
                    <Route path="/contacto" element={<Contacto/>} />
                    <Route path="/persona" element={<Persona/>} />


                    {/** Pasar parametros por la URL */}
                    <Route path="/persona/:nombre/:apellido" element={<Persona/>} />
                    {/**Por si solo tiene nombre*/}
                    <Route path="/persona/:nombre" element={<Persona/>} />
                    {/**Se agrega nuevamente ruta por si no lleva parametros salga No hay persona que mostrar */}
                    <Route path="/persona" element={<Persona/>} />

                    
                    {/**Ruta para cuando se ponga en el navegador http://localhost:3000/redirigi,no mande a una navegacion*/} 
                    <Route path='/redirigir' element={<Navigate to="/persona/jesus/zamudio" />} />

                    
                    {/**Subrutas */}
                    <Route path='/panel/*' element={<PanelControl/>}>
                        {/* Ruta por*/}
                        <Route index element={<InicioPanel/>} />
                        {/**Definir rutas */}
                        <Route path='inicio-panel' element={<InicioPanel/>} />
                        <Route path='crear-articulos' element={<Crear/>} />
                        <Route path='gestion-usuarios' element={<Gestion/>} />                       
                        <Route path='acerda-de' element={<AcercaDe/>} />
                    </Route>

                    
                    {/**Manejar el error de poner en la url un parametro no existente */}
                    <Route path="/*" element={<Error/>} />
            </Routes>
        </section><hr/>

        <footer>
            Este es el pie de pagina
        </footer>
        

    </BrowserRouter>
  )
}
