import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const Diferencia = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const divRef = useRef(null);

  // useEffect para comparación
  useEffect(() => {
    console.log('useEffect');
    if (divRef.current) {
      const width = divRef.current.offsetWidth;
      const height = divRef.current.offsetHeight;
      console.log(`useEffect - Size: ${width}x${height}`);
    }
  });

  // useLayoutEffect para medir el tamaño del div
  useLayoutEffect(() => {
    console.log('useLayoutEffect');
    if (divRef.current) {
      const width = divRef.current.offsetWidth;
      const height = divRef.current.offsetHeight;
      console.log(`useLayoutEffect - Size: ${width}x${height}`);
      setSize({ width, height });
    }
  }, []);

  return (
    <div>
      <h1>useLayoutEffect vs useEffect</h1>
        <p>
        useEffect vs useLayoutEffect
useEffect se ejecuta después de que el navegador ha pintado la pantalla. Es adecuado para la mayoría de las operaciones que no necesitan bloquear el renderizado del navegador.
useLayoutEffect se ejecuta sincrónicamente después de que todas las mutaciones DOM se han realizado, pero antes de que el navegador tenga la oportunidad de pintar la pantalla. Esto es útil para operaciones que necesitan realizar cambios en el DOM y deben completarse antes de que el navegador repinte.
        </p>
        <p>
        Cuándo usar useLayoutEffect sobre useEffect
Usa useLayoutEffect cuando necesites medir o modificar el DOM de alguna manera y asegurar que estos cambios se apliquen antes de que el navegador repinte la pantalla. Esto puede incluir:

Medir el tamaño de un elemento antes de mostrarlo.
Leer y escribir en el DOM antes de que se complete el renderizado.
Por otro lado, usa useEffect para la mayoría de las operaciones asíncronas y efectos secundarios que no necesitan bloquear el renderizado del navegador, como llamadas a APIs, suscripciones, etc.







        </p>
      <div ref={divRef} style={{ width: '200px', height: '200px', backgroundColor: 'lightblue' }}>
        <p>Width: {size.width}px</p>
        <p>Height: {size.height}px</p>
      </div>
    </div>
  );
}
