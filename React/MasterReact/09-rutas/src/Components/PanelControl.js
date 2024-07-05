import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
        <h1>PANEL DE CONTRO</h1>
        <p>Elige una de estas opciones</p>
        <nav>
            <ul>
                <li>
                <NavLink to="/panel/inicio-panel">Inicio</NavLink>
                </li>   
                <li>
                <NavLink to="/panel/crear-articulos">Crear articulos</NavLink>
                </li>
                <li>
                <NavLink to="/panel/gestion-usuarios">Gestion usuarios</NavLink>
                </li>
                <li>
                <NavLink to="/panel/acerda-de">Acerca de</NavLink>
                </li>  
            </ul>
        </nav>
        <div>
            {/**Aqui se van a cargar los componentes de las subrutas o rutas anidadas */}
            <Outlet/>
        </div>

    </div>
  )
}
