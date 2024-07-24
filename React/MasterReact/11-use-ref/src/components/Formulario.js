import React, { useRef } from 'react'

export const Formulario = () => {
    const nombreValue =useRef()
    const apellidoValue =useRef()
    const emailValue =useRef()

    const miCaja =useRef()

    const mostrar= e=>{
        e.preventDefault();

        {/**Esta es la forma de validar que envia el nombre al hacer enviar */}
        console.log(nombreValue.current.value)
        console.log(apellidoValue.current.value)
        console.log(emailValue.current.value)

        //mi caja ver que hay dentro
        console.log(miCaja.current.className)
        //aplicarle otra clase y ponerle otro color
        /**Se utiliza la desestruturacion antes miCaja.curren.classList.add */
        let {current: caja} =miCaja;
        caja.classList.add("fondoVerde")
        caja.innerHTML="Formulario enviado"
    }

  return (
    <div>
        <h1>UseRef:</h1> 
        <p>hace una referencia con un elemento del Dom con una propiedad current con un valor dentro. El valor persiste dentro ciclo de vida del componente</p>
        <p>
            con use Ref se puede recoger el valor del campo, es sustituir el e.target por este Hook

            Usar useRef y usar un hook de estado (como useState) para manejar los datos de un formulario en React tiene diferencias clave en cómo se manejan y actualizan los datos.
        </p>
        <p>
        useRef<hr/>
Persistencia sin re-renderizado:<br/>

        <br/>useRef proporciona una manera de crear una referencia mutable que no causa un re-renderizado cuando cambia. Es útil cuando necesitas acceder a un valor que no quieres que dispare un re-renderizado del componente.
<br/>Acceso directo al DOM:
<br/>useRef es comúnmente utilizado para acceder directamente a elementos del DOM. Esto es útil para manejar formularios, enfoque de input, o integración con bibliotecas de terceros.
<br/>Manejo de datos:
<br/>Con useRef, los datos del formulario no están en el estado de React. Esto significa que no tienes una forma reactiva de manejar los datos. Debes acceder a los valores manualmente cuando los necesites, por ejemplo, al enviar el formulario.
        </p>
        <div className="contenedor">
            <div className="miCaja" ref={miCaja}>
                <h2>Pruebas con useRef</h2>
            </div>
        </div>

        <form onSubmit={mostrar}>
            <input type='text' placeholder='Nombre' ref={nombreValue}/>
            <input type='text' placeholder='Apellidos' ref={apellidoValue}/>
            <input type='email' placeholder='Correo electronico' ref={emailValue}/>

            <input type='submit' value='Enviar'/>
            {/**Me posociona en el elementolisto para escribir */}
            <button onClick={() => nombreValue.current.select()}>posiciona en nombre</button>
        </form>
    </div>
  )
}
