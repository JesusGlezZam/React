import logo from './logo.svg';
import './App.css';
import { FormularioComponent } from './components/FormularioComponent';
import { FormularioCamposNoVacios } from './components/FormularioCamposNoVacios';
import { FormularioEvent } from './components/FormularioEvent';
import { FormularioEnviar } from './components/FormularioEnviar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FormularioComponent/><br/>
        <FormularioEvent/><br/>
        <FormularioEnviar/><br/>
        <FormularioCamposNoVacios/>
      </header>
    </div>
  );
}

export default App;
