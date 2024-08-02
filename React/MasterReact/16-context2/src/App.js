import { useEffect, useState } from 'react';
import './App.css';
import { PruebaContext } from './context/PruebaContext';
import { AppRouter } from './routing/AppRouter';

function App() {
  const [usuario, setUsuario] = useState(() => {
    // Inicializar el estado con el valor del localStorage, si existe
    const usuarioLocal = JSON.parse(localStorage.getItem("usuario"));
    return usuarioLocal || {}; // Si no hay nada en localStorage, usar un objeto vacío
  }); 

    useEffect(() => {
      // Guardar el usuario en localStorage cada vez que cambie
      localStorage.setItem("usuario", JSON.stringify(usuario));
   }, [usuario]);


   /*Use efect se utiliza para la persistencia de datos
    useEffect(() => {
      //la primera vez que se carga el componente
      console.log("Use efect cuando se carga el componente la primera vez")
      //localStorage.getItem("usuario", JSON.stringify(usuario))
      let usuario_local = JSON.parse(localStorage.getItem("usuario"))
      setUsuario(usuario_local)
    },[])

    useEffect(() => {
      //Cada vez que se actualice el estado usuario, se guarda en el local Storage
      console.log("Use efect Cambio en estado USUARIO")
      localStorage.setItem("usuario", JSON.stringify(usuario))
    },[usuario])*/

  //2
  const curso = {
    id:1,
    titulo: "Master en React",
    tiempo: "40 horas"
  }

  return (
    <div className="App">
      <header className='App-header'>
        <h1> Aprendiendo el useContext npm install react-router-dom</h1>
      
        <PruebaContext.Provider value={{
          usuario, /** Esto es hacer ...usuario, usuario */
          setUsuario
        }}>
           <AppRouter/>
        </PruebaContext.Provider>
        
      </header>
    </div>
  );
}

export default App;
