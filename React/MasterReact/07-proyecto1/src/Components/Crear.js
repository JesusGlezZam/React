import React, { useState } from 'react'
import { GuardarEnStorageGenerico, GuardarEnStoragePelicula } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoPelicula}) => {
    const tituloCmponet = "Añadir pelicula";
    const [pelicula, setPelicula] = useState({
        titulo: '',
        descripcion: ''
    })

    //Hacer una desestructuracion para poder entrar al estado de peliculas
    //const {titulo, descripcion} = pelicula; pelicula.titulo por eso se tustituyo en el render

    //Maneja el estado de los errores
    const [errores, setErrores] = useState({ titulo: '', descripcion: '' });


    const conseguirDatosForm = e =>{
        e.preventDefault();

        // Obtener datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;



        /*Esta es una forma de validar campos vacios
        if (titulo.trim() === "" || descripcion.trim() === "") {
            alert("Por favor, completa todos los campos obligatorios.");
            return;
        }*/
        

        /**creando una funcion para validacion de campo */
        let erroresTemp = validarCampos({ titulo, descripcion });

        if (Object.keys(erroresTemp).length > 0) {
            setErrores(erroresTemp);
            return;
        }


        //Crear objeto de la pelicula a guardar
        let pelicula ={
            id: new Date().getTime(),
            titulo, 
            descripcion
        }
        
        //**forma de  mandar una alerta//
       // alert("Se a agregado la pelicula correctamente: " +titulo)
        console.log(pelicula)

        //asignamos al estado lo nuevo agregado; se guarda el estado
        setPelicula(pelicula);

        //actualizar el estado de listado principal
        setListadoPelicula(elemetos =>{
            return[...elemetos,pelicula]
        });

        //Gudamos en el localStorage
        GuardarEnStoragePelicula(pelicula);
        GuardarEnStorageGenerico("generico", pelicula);

        // Limpiar los errores después de un envío exitoso
        setErrores({});
       
         // Limpiar el formulario
        target.reset();
    }

   

    /**Validar si los campos vienen vacios */
    const validarCampos = (campos) => {
        let erroresTemp = {};
    
        if (campos.titulo.trim() === "") {
            erroresTemp.titulo = 'El título es obligatorio.';
        }
        if (campos.descripcion.trim() === "") {
            erroresTemp.descripcion = 'La descripción es obligatoria.';
        }
    
        return erroresTemp;
    };

  return (
    <div className="add">
            <h3 className="title">{tituloCmponet}</h3>
            <strong>
            {/*Si existe titulo y descripcion, muestrame la etiqueta*/}
            {(pelicula.titulo && pelicula.descripcion) && "Has creado la pelicula: " + pelicula.titulo}
            </strong>
            

            <form onSubmit={conseguirDatosForm}>
                <input type="text"
                       name="titulo" 
                       id="title" 
                       placeholder="Titulo" />
                {errores.titulo && <p style={{ color: 'red' }}>{errores.titulo}</p>}

                <textarea id="description"
                          name="descripcion" 
                          placeholder="Descripción"
                          ></textarea>
                 {errores.descripcion && <p style={{ color: 'red' }}>{errores.descripcion}</p>}          
                <input type="submit" id="save" value="Guardar" />
            </form>
        </div>
  )
}
