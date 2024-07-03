import logo from './logo.svg';
import './App.css';
import { ComponentEfect } from './Componets/ComponentEfect';
import { AjaxComponent } from './Componets/AjaxComponent';
import { AjaxComponentLouder } from './Componets/AjaxComponentLouder';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> <br/>

      <ComponentEfect/>
      <br/><AjaxComponent/>

      <br/><AjaxComponentLouder/>
        
      </header>
    </div>
  );
}

export default App;
