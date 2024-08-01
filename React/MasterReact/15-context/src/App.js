import { useState } from 'react';
import './App.css';
import { PruebaContext } from './context/PruebaContext';
import { AppRouter } from './routing/AppRouter';

function App() {
  //3
  const [usuario, setUsuario] = useState({
    nombre: "Jesus",
    web: "yedark.com"
  })

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
      
        {/*1 <PruebaContext.Provider value="Jesus Glez Zamudio">  Prueba pasando solo un valor*/}
        
        {/*2 <PruebaContext.Provider value={curso}>*/}

        {/**3 desestructuracion del estado e iniciandolo */}
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
