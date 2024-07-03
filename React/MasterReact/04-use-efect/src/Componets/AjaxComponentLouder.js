import React, { useEffect, useState } from 'react'

export const AjaxComponentLouder = () => {
  //promesa
  const [usuarios, setUsuarios] = useState([])
  const [cargando, setCargando] = useState(true)
  const [errores, setErrores] = useState("")

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
       //getUsuariosAJAX();
       getUsuariosAS_AW();
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
              console.log(error.message)
          })
  }

  //Funcion asincrona para peticion //espera un resultado con el await
  const getUsuariosAS_AW = () =>{
    setTimeout( async () =>{
        try{
            const peticion = await fetch("https://reqres.in/api/users?page=2")
            const {data} = await peticion.json();
            setUsuarios(data);
            console.log(data);
            setCargando(false)
        }catch(error){
            console.log(error)
            console.log(error.message)
            setErrores(error.message)
        }
    },2000)   
  }


  if(errores !== ""){
    return (
        <div className='errores'>   
                <h2> {errores}</h2>
        </div>)
  }else if(cargando == true){
    return (
        <div className='cargando'>   
                <h2>Cargando...</h2>
        </div>)
  }else if (cargando == false && errores === ""){
    return (
        <div>
            <h2>Listado de usuarios via AJAX dinamico</h2>
            <ol className='usuarios'>
                    {
                        usuarios.map( usuario => {
                            return <li key={usuario.id}> <img src={usuario.avatar} width="80"/> {usuario.first_name} {usuario.last_name}</li>
                        })
                    }
            </ol>
            <p></p>
        </div>
      )
  }
}
