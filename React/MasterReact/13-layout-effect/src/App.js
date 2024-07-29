import logo from './logo.svg';
import './App.css';
import { Diferencia } from './components/Diferencia';
import { EjemploComponent } from './components/EjemploComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p><br/>
        <Diferencia/><br/>
        <EjemploComponent/>
      </header>
    </div>
  );
}

export default App;
