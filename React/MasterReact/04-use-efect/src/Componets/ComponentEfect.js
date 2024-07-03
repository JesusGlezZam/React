import React, {useState, useEffect} from 'react'
import { AvisoComponent } from './AvisoComponent';

export const ComponentEfect = () => {
    const [usuario, setUsuario] = useState("Karla Panini")
    const [fecha, setFecha] = useState(new Date().toLocaleString());
    const [contador, setContador] = useState(0);
    const [clase, setClase] = useState('label');

    const modUsuario = e => {
        setUsuario(e.target.value)
    }

    //Se ejecuta por cada intervalo de 1 seg cuenta y se entra a la condicion del use Effect
    useEffect(() => {
        const interval = setInterval(() => {
          setFecha(new Date().toLocaleString());
        //  console.log("Cada segundo")
        setContador(prevContador => prevContador + 1);
      }, 1000);
        console.log("Inicial")
        // Cleanup interval on component unmount
        return () => clearInterval(interval);
      }, []);

      useEffect(() => {
        if (contador >= 10) {
          setClase('label label-green');
        } else {
          setClase('label');
        }
      }, [contador]);


/*    Teniendo un funcion dentro de l mismo effect  
      useEffect(() => {
        const interval = setInterval(() => {
          setFecha(new Date().toLocaleString());
          setContador((prevContador) => {
            const nuevoContador = prevContador + 1;
            if (nuevoContador >= 10) {
              setClase('label label-green');
            } else {
              setClase('label');
            }
            return nuevoContador;
          });
        }, 1000);
        console.log("Inicial");

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
      }, []);*/

      //Se ejecuta cada que haya un cambio en usuario
      useEffect(()=>{
          setContador(contador+1)
          console.log("Haz modificado el usuario: "+contador) 
      }, [usuario])


      //
      /*
      //Solo se ejecuta una vez al  cargar el componente
      useEffect(() => {
        const fechaInicial = new Date().toLocaleString();
        setFecha(fechaInicial);
      }, []);*/

  return (
    <div>
        <h1>El efecto hook useEffect</h1>
        <strong className={contador >= 10 ? 'label label-green' : 'label'}>{usuario}</strong><br/>
        <strong className={clase}>{fecha}</strong><br/>

        <input type='text'
               onChange={modUsuario}
               placeholder='Cambia el nombre' /><br/>

        {contador >= 20 && "Hemos superado 20 en el contador "} 

        {usuario === "JESUS" && <AvisoComponent />}


    </div>
  )
}
