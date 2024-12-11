import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Persona = () => {

    /**Hook para recoger parametros que llegan de la URL de ReactRouterDom  useParams()*/
    //const parametros = useParams();   
    //Parametros que llegan por URL
   // console.log(parametros)

   //Valores por defecto en parametros opcionales
   //let {nombre="Jesus", apellido="Gonzalez"} =useParams();

    //Desestructurar parametros para hacer uso de lo que viene desde Personas Router principal
    const {nombre, apellido} = useParams();

    ///hooks useNavigate
    const navegar = useNavigate();

    const [error, setError] = useState('');


    const enviar = (e) => {
        e.preventDefault();
        let nombre = e.target.nombre.value.trim();
        let apellido = e.target.apellido.value.trim();
        let urlGenerada=`/persona/${nombre}/${apellido}`;


        if (!nombre || !apellido) {
            setError('Por favor, complete ambos campos.');
            return;
        }else if(nombre === "contacto" ) {
            navegar("/contacto");
        } else{
            console.log(urlGenerada)
            navegar(urlGenerada);
        }
        setError('');

        
        
    }

    return (
        <div>
            {/**Utilizando el codigo de paramsetros */}
            {/**<h1>Pagina de persona: {parametros.nombre}</h1> */}

            {!nombre ? (
                <h1>No hay persona que mostrar</h1>
                
            ) : (
                <>
                <h1>Pagina de persona: {nombre} {apellido}</h1>
                <p>Esta es la pagina de persona</p>
                </>
                
            )}
            

            <form onSubmit={enviar}>
                <input type='text' name='nombre' className='form-input' />
                <input type='text' name='apellido' className='form-input' />
                <input type='submit'  value='Enviar' className='form-input' />
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      )
}


/**
 * useNavigate: Utilízalo para redirigir a diferentes rutas en respuesta a eventos de usuario, como envíos de 
 * formularios, clics en botones o enlaces, y condiciones basadas en la lógica de la aplicación.
   
    useState: Utilízalo para manejar y actualizar estados locales dentro de un componente, como valores 
    de formularios, contadores, estados de visualización, y cualquier otro dato que necesite ser reactivo dentro del componente. */