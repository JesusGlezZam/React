 export const GuardarEnStoragePelicula = pelicula =>{
    //conseguir los elementos que ya tenemos en LocalStorage pelis es el nombre que se le da al storage
    let elementos =JSON.parse(localStorage.getItem("pelis"));

    //Comprobar si es un array
    if(Array.isArray(elementos)){
        //anadir dentro del array un elemento nuevo
        elementos.push(pelicula);
    }else{
        //Crear un array con la nueva peli
        elementos = [pelicula];
    }
    console.log(elementos)

    //Guadar en el localStorage pelis es el nombre que se le da al storage  //Guardar en el almacenamiento local
    localStorage.setItem("pelis", JSON.stringify(elementos));

    //Devolver objeto guardado
    return pelicula;
}


// los parametros son clave del storage, y el elemento es el objeto que se va a ir al array
export const GuardarEnStorageGenerico = (clave,elemento) =>{
    //conseguir los elementos que ya tenemos en LocalStorage
    let elementos =JSON.parse(localStorage.getItem(clave));

    //Comprobar si es un array
    if(Array.isArray(elementos)){
        //anadir dentro del array un elemento nuevo
        elementos.push(elemento);
    }else{
        //Crear un array con la nueva peli
        elementos = [elemento];
    }
    console.log(elementos)

    //Guadar en el localStorage  //Guardar en el almacenamiento local
    localStorage.setItem(clave, JSON.stringify(elementos));

    //Devolver objeto guardado
    return elemento;
}

