//alerta
alert('Generacion de alerta');

//variables
var nombre= "Jesus Gonzalez"
var altura= 178;

var concatenacion= nombre + " " +altura;

//opción 1
/*document.write(nombre);
document.write(altura);
document.write(concatenacion);*/

//*Segundo ejemplo
var datos=document.getElementById("datos");
datos.innerHTML=`
<br/> <h1>Soy la caja de datos<h1/>
    <h2>Mi nombre es: ${nombre}<h2/>
    <h3>Mido: ${altura} cm<h3/>
`;

if(altura >= 180){
    datos.innerHTML+='<h1>Eres una persona alta<h1/>'
}else{
    datos.innerHTML+='<h1>Eres una persona de baja estatura<h1/>'
}


for(var i=2020; i<=2024;i++){
    datos.innerHTML+="<h2>Estamos en el  año:" +i;
}/*/

/*Tercer ejemplo*/
function MuestraMiNombre(nombre, altura,ano){
    var datos=document.getElementById("datos");
    datos.innerHTML+=`
    <br/><h1>Parametrizar una funcion y mandarla a llamar Muestra mi nombre<h1/>
    <h2>Mi nombre es: ${nombre}<h2/>
    <h3>Mido: ${altura} cm<h3/>
`;

    for(var i=ano; i<=2024;i++){
        datos.innerHTML+="<h2>Estamos en el  año:" +i;
    }
    
}

MuestraMiNombre("Emilia Gonzalez",180,2022);
/*Tercer ejemplo*/

/*Cuarto ejemplo retornando datos*/
function MiNombre(nombre, altura){
    var misDatos=`
    <br/><h1>Retornando la funcionalidad de Mi nombre<h1/>
    <h2>Mi nombre es: ${nombre}<h2/>
    <h3>Mido: ${altura} cm<h3/>
`;

return misDatos;
}

function imprimir(){
    var datos=document.getElementById("datos");
    datos.innerHTML+=MiNombre("Pamela",156);
    if(altura >= 180){
        datos.innerHTML+='<h1>Eres una persona alta<h1/>'
    }else{
        datos.innerHTML+='<h1>Eres una persona de baja estatura<h1/><br/>'
    }
}

imprimir();
/*Cuarto ejemplo*/

/*Quinto ejemplo*/
var nombre=['Karla', 'Joan', 'Elizabeth'];
document.write('<h1>Listado de nombres for<h1/>');
for(i=0; i<nombre.length; i++){
    document.write(nombre[i]+'<br/>');
}

document.write('<h1>Listado de nombres foreach con funcion<h1/>');
    nombre.forEach(function (nombre) {
    document.write(nombre+'<br/>');
});

document.write('<h1>Listado de nombres con funcion flecha<h1/>');
    nombre.forEach((nombre)=> {
    document.write(nombre+'<br/>');
});

/*JSON */
document.write('<h1>JSON<h1/>');
var coche={
    modelo: 'Mercedes Clase A',
    maxima: 350,
    antiguedad:2024,
    mostrarDatos(){
        console.log("Consola del modelo",this.modelo,this.maxima, this.antiguedad)
    },
    propiedad1:"Valor aleatorio"
};

document.write("<h1>coche: "+coche.modelo+" velocidad maxima: "+coche.maxima+"<h1/>");
//Linea para que se muestre en la consola
coche.mostrarDatos();
//Mostrar el json en consola
console.log(coche);


/*Promesas: estructuras usadas de manera asincrona o ajax*/ //Valor que puede estar disponible ahora, futuro o nunca
//capturar respuesta positiva, rechazada o no llegan datos
var saludar = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let saludo="Ejercicio para que se muestre el resolve";
       // saludo=false; //Esto es cuando quiera que salga el reject
        if(saludo){
            resolve(saludo);
        }else{
            reject("Debe mostrar reject")
        }
            
    },1000);
});


//funcion flecha para mostrar una alerta
saludar.then(resultado =>{
    alert(resultado);
}).catch(err =>{
    alert(err);
});







