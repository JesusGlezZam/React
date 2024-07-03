import logo from './logo.svg';
import './App.css';
import { PrimerComponente } from './Components/PrimerComponente';
import  SegundoComponente  from './Components/SegundoComponente';
import ComponentClaseFuncionFlecha from './Components/ComponentClaseFuncionFlecha';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Repaso
        </p>
        <br/>
        <PrimerComponente />
        <br/>
        <SegundoComponente /><br/>
        <ComponentClaseFuncionFlecha/>
      </header>
    </div>
  );
}

export default App;
