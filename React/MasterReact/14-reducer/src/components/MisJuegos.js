import React, { useEffect, useReducer } from 'react'
import { JuegoReducer } from '../reducers/JuegoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem("juegos")) || [];
}    

export const MisJuegos = () => {

    const [juegos, dispatch] = useReducer(JuegoReducer, [], init)

    useEffect(() =>{
            localStorage.setItem("juegos", JSON.stringify(juegos))
        },[juegos])
    
    const conseguiDatosForm = e =>{
        e.preventDefault();

        let juego ={
            id: new Date().getTime(),
            titulo: e.target.titulo.value,
            descripcion: e.target.descripcion.value
        }

        console.log(juego)


        const accion = {
            type: "crear",
            payload: juego
        }

        dispatch(accion)
        e.target.titulo.value = '';
        e.target.descripcion.value = '';

        console.log(juegos)
    }

    const borramelo = id =>{
        const action ={
            type: "borrar",
            payload: id
        }

        dispatch(action)
    }

    const editar = (e, id) =>{
        console.log(e.target.value, "editar", id)
        
        let juego = {
            id,
            titulo: e.target.value,
            descripcion: e.target.value
        }

        const action ={
            type: "editar",
            payload: juego
        }

        dispatch(action)
       
    }

  return (
    <div>
        <h1>Estos son Mis Video Juegos</h1>

        <p>Numero de videojuegos: {juegos.length}</p>

            <ul>
                {juegos.map(juego => (
                    <li key={juego.id}>
                        <strong>{juego.titulo}</strong>: {juego.descripcion}
                        &nbsp;
                        <button onClick={e => borramelo(juego.id)}>X</button>
                        <input type='text' onBlur={e => editar(e, juego.id)}
                                                onKeyPress= {e =>{
                                                        if(e.key == "Enter"){
                                                            editar(e, juego.id)
                                                            console.log("Has persionado enter")
                                                        }
                                                }
                                            }    
                        />
                    </li>
                ))}
            </ul>
        <h3>Agregar juego</h3>

        <form onSubmit={conseguiDatosForm}>
            <input type='texto' name='titulo' placeholder='Titulo'/>
            <textarea name='descripcion' placeholder='Descripcion'/>
            <input type='submit' value='Guardar'/>
        </form>
    </div>
  )
}
