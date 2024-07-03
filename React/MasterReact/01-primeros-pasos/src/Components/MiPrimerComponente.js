//importar modulos de react/ dependencies
import React from 'react'


//Funcion del componente
const MiPrimerComponente = () => {

    let nombre = "Jesus";
    let web = "jesus@desarrollo.com"

    let usuario ={
        nombre: "Pamela",
        apellidos: "Hernandez",
        web : "pamela@desarrollo.com"
    }

    console.log(usuario); //mostrar en consola el json

  return (
    <div className='mi-componente'>  {/* tambien puede ser <> </>    <Fragment> <Fragment> */}
        <h1>
            Mi primer componente
         </h1>
        <br/>
        <h3>Interpolando variables</h3>
        <ul>
            <li>Nombre: <strong> {nombre}</strong></li>
            <li>Web: <strong> {web}</strong></li>
        </ul>
        <br/>
        <h3>Interpolando variables con json</h3>
        <ul>
            <li>Nombre: <strong> {usuario.nombre}</strong></li>
            <li>Web: <strong> {usuario.apellidos}</strong></li>
            <li>Web: <strong> {usuario.web}</strong></li>
        </ul>

        <br/>
         <p> Ejercicio de lista</p>
            <ul>
                <li>
                    React
                </li>
                <li>
                    Angular
                </li>
                <li>
                    Vue
                </li>
            </ul>
        
    </div>
  )
}

export default MiPrimerComponente;
//exportar el componente
