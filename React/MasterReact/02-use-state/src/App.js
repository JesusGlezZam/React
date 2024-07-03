import logo from './logo.svg';
import './App.css';
import { MiPrimerEstadoFuncion } from './Components/MiPrimerEstadoFuncion';
import MiPimerEstadoClase from './Components/MiPimerEstadoClase';
import { EjericioComponentFuncion } from './Components/EjericioComponentFuncion';
import EjercicioComponentClass from './Components/EjercicioComponentClass';
import { EjercicioComponenteProps } from './Components/EjercicioComponenteProps';



function App() {
  const fecha = new Date();
  const yearActual = fecha.getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>El estado de React hook useState</h1>
          <MiPrimerEstadoFuncion/> <br/>
          <MiPimerEstadoClase /> <br/>
          <EjercicioComponenteProps year={yearActual-1}/>
          <EjericioComponentFuncion year={yearActual}/>
          <EjercicioComponentClass year={yearActual+1}/>


      </header>
    </div>
  );
}

export default App;
