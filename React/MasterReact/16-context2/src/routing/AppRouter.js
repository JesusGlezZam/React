import React, { useContext } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Articulos } from '../components/Articulos'
import { Acerca } from '../components/Acerca'
import { Contacto } from '../components/Contacto'
import { Login } from '../components/Login'
import { PruebaContext } from '../context/PruebaContext'


export const AppRouter = () => {

    /**Desestructuranddo */
    const {usuario, setUsuario}  = useContext(PruebaContext)

  return (
        <BrowserRouter>

                <div className='header'>
                    {/** MENU NAVEGACION */}
                    <nav>
                        <div className='logo'>
                            <h2>Aprendiendo React content</h2>
                        </div>
                        <ul>
                            <li>
                                <NavLink to="/">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/articulos">Articulos</NavLink>
                            </li>
                            <li>
                                <NavLink to="/acerca-de">Acerca de</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contacto">Contacto</NavLink>
                            </li>
                           

                            {/**Accediendo a use context para hacer una condicion donde valida que exista el valor de la propiedad */}
                            {usuario.hasOwnProperty("nick") && usuario.nick !== null ? (
                                <>
                                    <li>
                                        <NavLink to="/">{usuario.nick}</NavLink>
                                    </li>

                                    <li>
                                    <a href="#" onClick={ e => {
                                        e.preventDefault();
                                        setUsuario({})  // {/**Pasar las propiedades vacias */}
                                    
                                       {/* setUsuario({
                                            nick:null,
                                            nombre: "Manuel",
                                            web: usuario.web  
                                        }*//* si se quieiera pasar una propiedad*/}
                                        
                                    }}>Cerrar sesion</a>
                                    </li>

                                </>
                            ):(
                                <li>
                                <NavLink to="/login">Identificate</NavLink>
                                </li>
                            )
                            }                           
                        </ul>
                    </nav>
                </div>

                <section className='content'>
                    {/** CONFIGURAR RUTAS */}
                    <Routes>
                        <Route path='/' element={<Inicio/>} />
                        <Route path='/inicio' element={<Inicio/>} />
                        <Route path='/articulos' element={<Articulos/>} />
                        <Route path='/acerca-de' element={<Acerca/>} />
                        <Route path='/contacto' element={<Contacto/>} />
                        <Route path='/login' element={<Login/>} />

                        <Route path='*' element={(<div>
                            <h1>ERROR ESTA PAGINA NO EXISTE</h1>
                        </div>)} />  
                    </Routes>
                </section>    
        </BrowserRouter>
  )
}
