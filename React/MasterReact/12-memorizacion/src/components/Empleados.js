import React, { useEffect, useState } from "react"


/**Practipara para que no se vuelva a renderizar el mismo componente hasta que haya sufrido un cambio. Visualizar quitando el React.memo() */
export const Empleados = React.memo (({numPagina}) => {
   const [empleados, setEmpleados] = useState([])

    useEffect(()=>{
        console.log("Se ha renderizado empleados")
    },[empleados])

    const conseguirEmpleado = async (pag) =>{
        const url ="https://reqres.in/api/users?page="+pag
        const peticion = await fetch(url)
        /**Desestructurando data con nombre empreados const empleados = await peticion.json() */
        const {data:empleados} = await peticion.json()
        setEmpleados(empleados)
    }

    useEffect(()=>{
        console.log("Se ejecuto una peticion AJAX")
        conseguirEmpleado(numPagina);
    },[numPagina])


  return (
    <div>
        <h1>Empleados solo regresando una posicion</h1>
            <ul className="empleados">
                <li>{empleados.length >=1 && empleados[0].email}</li>
            </ul>
        
        <h1>Empleados ejecutando una peticion AJAX</h1>
            <p>Mostrando la pagina: {numPagina}</p>
            <ul className="empleados">
                {empleados.length >= 1 && 
                    empleados.map(empleado =>{
                        return < li key={empleado.id}>{empleado.first_name + " " + empleado.last_name}</li>
                    })
                }
            </ul>    
        
    </div>
  )
})
  
/*Se renderiza cada vez que se mete en el campo algun dato*/
/*export const Empleados = ({numPagina}) => {
    const [empleados, setEmpleados] = useState([])

    useEffect(()=>{
        conseguirEmpleado(numPagina);
    },[numPagina])

    const conseguirEmpleado = async (pag) =>{
        const url ="https://reqres.in/api/users?page="+pag
        const peticion = await fetch(url)
        
        const {data:empleados} = await peticion.json()
        setEmpleados(empleados)
    }

    console.log("Se ha renderizado el componte Empleados ejecutando una peticion AJAX")

  return (
    <div>
        <h1>Empleados solo regresando una posicion</h1>
            <ul className="empleados">
                <li>{empleados.length >=1 && empleados[0].email}</li>
            </ul>
        
        <h1>Empleados ejecutando una peticion AJAX</h1>
            <p>Mostrando la pagina: {numPagina}</p>
            <ul className="empleados">
                {empleados.length >= 1 && 
                    empleados.map(empleado =>{
                        return < li key={empleado.id}>{empleado.first_name + " " + empleado.last_name}</li>
                    })
                }
            </ul>    
        
    </div>
  )
}*/




