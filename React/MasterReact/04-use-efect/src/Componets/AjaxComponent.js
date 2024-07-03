import React, { useState,useEffect } from 'react'

export const AjaxComponent = () => {
    //url: https://reqres.in/

    //promesa
    const [usuarios, setUsuarios] =useState([])

    //Generico/ basico
    const getUsuariosEstaticos = () =>{
        setUsuarios([ {
            "id": 1,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 1,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 3,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        }])
    }

     // Cargar usuarios estáticos cuando el componente se monta
     useEffect(() => {
         // getUsuariosEstaticos();
         getUsuariosAJAX();
      //   getUsuariosAS_AW();
    }, []);


    //Peticion ajax
    const getUsuariosAJAX = () =>{
        fetch("https://reqres.in/api/users?page=1")
            .then(respuesta => respuesta.json())
            .then(resultado_final => {
                setUsuarios(resultado_final.data)
                console.log(resultado_final.data)
            },
            error =>{
                console.log(error)
            })
    }

    //Funcion asincrona para peticion //espera un resultado con el await
    const getUsuariosAS_AW = async() =>{
        const peticion = await fetch("https://reqres.in/api/users?page=2")
        const {data} = await peticion.json();
         setUsuarios(data);
        console.log(data);
    }


  return (
    <div>
        <h2>Listado de usuarios via AJAX estatico</h2>
        <ol className='usuarios'>
                {
                    usuarios.map( usuario => {
                        return <li key={usuario.id}>{usuario.first_name} &nbsp; {usuario.last_name}</li>
                    })
                }
        </ol>
        <p></p>
    </div>
  )
}
