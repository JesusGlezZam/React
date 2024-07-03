import logo from './logo.svg';
import './App.css';
import MiPrimerComponente from './Components/MiPrimerComponente';
import { SegundoComponente } from './Components/SegundoComponente';
import { TercerComponente } from './Components/TercerComponente';
import { TercerComponenteDesestructuracion } from './Components/TercerComponenteDesestructuracion';
import { PasandoParametrosPorDefecto } from './Components/PasandoParametrosPorDefecto';
import ParentComponent from './Components/ParentComponent';
import EventosComponentsClase from './Components/EventosComponentsClase'; // importando con clase
import {EventosComponentsFuncion} from './Components/EventosComponentsFuncion';
import EventosComponetsProps from './Components/EventosComponetsProps';
//import { EventosComponents } from './Components/EventosComponents'; // importando con funcion


function App() {

  const ficha_medica={
      altura: "168 cm",
      grupo: "A+",
      estado_salud:  "Buena",
      alergias: "Ninguna"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className='componentes'>
        <hr/>
        {/*Ejemplo de componentes pasando  propiedades*/ }
        <ParentComponent/>

        <hr/>
        {/*Eventos en react*/ }
        <EventosComponentsClase/>

        <hr/>
        {/*Eventos en react*/ }
        <EventosComponentsFuncion/>

        <hr/>
        {/*Eventos en react con props*/ }
        <EventosComponetsProps/>

        <hr/>
        {/*pasando propiedades al tercer componente por props*/ }
        <TercerComponente
          nombre="Fernanda"
          apellidos="Martinez"
          ficha={ficha_medica}
        />
        <hr/>
        {/*pasando propiedades al tercer componente por props*/ }
        <TercerComponenteDesestructuracion
          nombre="Oliver"  // Quitar la propiedad para que muestre en consola que es requerido
          apellidos="Henaine"
          ficha={ficha_medica}
        />

        <hr/>
        {/*pasando propiedades por defecto nombre y apellidos*/ }
        <PasandoParametrosPorDefecto
          ficha={ficha_medica}
        />

        <hr/>
        <MiPrimerComponente/>
        <hr/>
        <SegundoComponente/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
