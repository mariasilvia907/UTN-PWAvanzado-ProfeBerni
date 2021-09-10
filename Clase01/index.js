
//Elementos de consola
console.log("Iniciamos nuestra Clase de PWA!!");
console.error("Este es un mensaje de ERROR");
console.warn("Cuidado!! puede ser un error grave");
console.info("Está ingresando a un sitio de pago");
console.clear();

console.log("---------------------------------------------------------------------------");

//Clases en JavaScript - Modelo para producir Clientes
class Cliente {
    //Constructor: las características del modelo de Cliente
    constructor (nombre, apellido, direccion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
    }

    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y mi apellido es ${this.apellido} y mi dirección es ${this.direccion}`);
    }

    pagar(){

    }
}

var Pepe = new Cliente("Pepe", "González", "CABA");

var Papo = {
    nombre:"Papo",
    apellido: "Pérez"
}

Pepe.saludar();

console.log("---------------------------------------------------------------------------");

//Métodos JS especiales: Reduce
const numeros = [1,2,3,4,5];

let resultado = numeros.reduce((suma, numeroActual) => suma + numeroActual);
console.log(resultado);

console.log("---------------------------------------------------------------------------");


//Posición de los elementos
const datos = ["UTN-BA", "Java", "Javascript"];

datos.forEach((item, index, array)  => {
    console.log(`El elemento ${item} está en la posición ${index} en ${array}`);
})









