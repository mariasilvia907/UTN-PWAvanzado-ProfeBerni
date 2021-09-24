console.log("Hola mundo ");
​
//Variables
​
let nombre:string = "Pepe";
let persona:number = 25;
let apellido: string | number = 25
let ganar:boolean = false;
​
//Interfaces
​
interface Personaje {
    nombre:string;
    pv:number;
    habilidades:string[];
    ciudad?: string ; //dato optativo 
}
​
//Objetos
​
const personaje: Personaje = {
    nombre:'Aquaman',
    pv:100,
    habilidades:['Agua','Rayo']
}
​
personaje.ciudad = 'Buenos Aires';
​
console.table(personaje);
​
//Funciones
​
function sumar(num1:number, num2:number) {
    return num1 + num2;
}
​
const sumarA = (num1:number ,num2:number)=>{
    return num1 + num2
}
​
const resultado = sumar(100,300);
console.log(resultado);
​

​
 function multiplicar(a:number, b:number, c?:number):number { // function name ():number -> quiere decir que el resultado debe ser si o si number.Tipamos el resultado
​
    /* return a * b * c;     va a marcar el c para avisarnos que puede generar un error, ya que al hacer esa funcion, en caso que no sea un number el parametro c, va a dar error.*/
    return a * b;
}
​
 //Funciones a la interfaces
​
interface personajeJuego{
    nombre:string;
    pv:number;
    mostrarPv:()=> void;
}
​
​
//Objeto tipo personajeJuego
​
const nuevoPersonaje : personajeJuego = {
    nombre:'Goku',
    pv:80,
    mostrarPv: ():void =>{
        console.log(`${nuevoPersonaje.nombre} tiene ${nuevoPersonaje.pv} puntos de vida `);
    }
}

nuevoPersonaje.nombre
​
​
function curarPersonaje( personaje: personajeJuego  , curar: number){
    personaje.pv += curar;
    console.log(`${personaje.nombre} ha sido curado con ${curar} puntos de vida y ahora tiene ${personaje.pv}`);
}


curarPersonaje(nuevoPersonaje, 20)
console.log(nuevoPersonaje.mostrarPv());
console.log(nuevoPersonaje);


//Clases 


class Personas{

    constructor(
        public nombre: string,
        public apellido: string,
        public rol: string,
        ){

        }

    dameNombre(){
        return `Mi nombre es: ${this.nombre}`
    }

    dameApellido(){
        return `Mi apellido es: ${this.apellido}`
    }

    dameRol(){
        return `Mi rol es: ${this.rol}`
    }


}

class Veterinario extends Personas {

    static apodo: string = 'Doc';

    constructor(
        public nombre: string,
        public apellido: string,
        private salario: number,
        public matricula: number,
        public rol: string,
        
    ){
        super(nombre, apellido, rol);
    }

    dameMatricula(){
        return `Mi matrícula es: ${this.matricula}`
    }

    alimentaMascotas(){
        return `Estoy alimentando a la mascota`
    }

    
}


class Empleado extends Personas{
    constructor(
        public nombre: string,
        public apellido: string,
        private salario: number,
        public rol: string,
        
    ){
        super(nombre, apellido, rol);
    }
}

class Cliente extends Personas{
    constructor(
        public nombre: string,
        public apellido: string,
        public telefono: number,
        public tarjeta: number, 
        public rol: string,       
    ){
        super(nombre, apellido, rol);
    }
}

class jefeVeterinarios extends Veterinario{

    static suspenderVeterinarios?: boolean = true;
    

    controlarVeterinarios(){
        return `Estoy controlando a los veterinarios`
    }

}


//Objetos
const Veterinario1 = new Veterinario('Pedro', 'Perez', 1000, 12500, 'Veterinario');
const Empleado1 = new Empleado('Antonio', 'Perez', 1000, 'Empleado');
const Jefe = new jefeVeterinarios('Juan', 'Perez', 1000, 12500, 'Jefe');

console.log(Veterinario1.dameNombre());
console.log(Empleado1.dameRol());
console.log(Jefe.alimentaMascotas());
console.log(Veterinario.apodo);

console.log(Veterinario1.nombre);






​














