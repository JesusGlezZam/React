import logo from './logo.svg';
import './App.css';
import { Redux } from './components/Redux';
import { MisJuegos } from './components/MisJuegos';
import { ListaTareas } from './components/ListaTareas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      </header>
      <Redux/><br/>
      <MisJuegos/>
      <ListaTareas/>
    </div>
  );
}

export default App;
