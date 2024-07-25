import logo from './logo.svg';
import './App.css';
import { Gestion } from './components/Gestion';
import { Tareas } from './components/Tareas';
import { Productos } from './components/Productos';
import { GestionCallBack } from './components/GestionCallBack';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>¿Qué es useMemo?
useMemo es un hook de React que memoriza (o guarda) el resultado de una función para evitar cálculos innecesarios. Esto es útil cuando tienes cálculos costosos que solo deberían realizarse si ciertas dependencias cambian.
</h2>
<p>¿Por qué usar useMemo?
Imagina que tienes una lista de elementos y quieres realizar un cálculo complejo en cada renderizado. Sin useMemo, cada vez que React renderiza el componente, ese cálculo se repetirá, incluso si los datos no han cambiado. Esto puede hacer que tu aplicación sea más lenta si los cálculos son costosos.

useMemo ayuda a <strong>evitar esto al memorizar el resultado del cálculo y reutilizarlo cuando los datos relevantes no han cambiado.</strong></p>
        {/**Ejercicio con hook useMemo */}
       {/* <Tareas/><hr/>
        <Productos/>*/}

        {/**Ejercicio de metodo memo para components */}  
        {/*<Gestion/>*/}

        {/**Ejercicio de  useCallback - permite memoririzar funciones*/}
        <GestionCallBack/>

      </header>
    </div>
  );
}

export default App;