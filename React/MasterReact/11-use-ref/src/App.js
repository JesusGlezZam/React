import { Ejemplo } from "./components/Ejemplo";
import { Formulario } from "./components/Formulario";
import { FormularioConSpinner } from "./components/FormularioConSpinner";
import { FormularioDeshabilitado } from "./components/FormularioDeshabilitado";
import { FormularioNuevosEstilosSpinner } from "./components/FormularioNuevosEstilosSpinner";
import { FormularioOverlay } from "./components/FormularioOverlay";
import { FormularioSpinnerCurrent } from "./components/FormularioSpinnerCurrent";


function App() {
  return (
    <div className="App">
        <Ejemplo/><hr/>
        <FormularioConSpinner/><hr/>
        <FormularioSpinnerCurrent/><hr/>
        <FormularioOverlay/><hr/>
        <FormularioDeshabilitado/><hr/> 
        <FormularioNuevosEstilosSpinner/><hr/>  
        <Formulario/>
     
    </div>
  );
}

export default App;
