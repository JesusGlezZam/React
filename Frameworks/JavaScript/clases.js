class Coche{
    //
    constructor(modelo, velocidad, antiguedad){
        this.modelo=modelo;
        this.velocidad =velocidad;
        this.antiguedad=antiguedad;
    }

    aumentarVelocidad(){
        this.velocidad +=1;
    }

    disminuirVelocidad(){
        this.velocidad -=1;
    }
    
}

//
var coche1 = new Coche('BMW',200,2024);
var coche2 = new Coche('Audi',200,2023);
var coche3 = new Coche('Mercedes',200,2024);
var coche4 = new Coche('BMW',200,2024);

//Mostrar en colosa el objeto Json
console.log(coche1);

//utilizar la funcion de aumentar
document.write("<h1>Velocidad inicial: "+coche1.velocidad+"<h1/>");
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
document.write("<h1>Velocidad final: "+coche1.velocidad+"<h1/>");

//Herencia
class Autobus extends Coche{
    constructor(modelo, velocidad, antiguedad) {
        super(modelo, velocidad, antiguedad);
        //Agregando nueva propiedad para autobus
        this.altura=5;
    }
    mostrarAltura(){
        return "La altura del autobus es: " +this.altura;
    }
}
var autobus1= new Autobus('PEGASUS', 160, 2011);
console.log(autobus1);
console.log(autobus1.mostrarAltura());