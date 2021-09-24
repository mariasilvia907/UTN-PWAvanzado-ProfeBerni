var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hola mundo ");
//Variables
var nombre = "Pepe";
var persona = 25;
var apellido = 25;
var ganar = false;
//Objetos
var personaje = {
    nombre: 'Aquaman',
    pv: 100,
    habilidades: ['Agua', 'Rayo']
};
personaje.ciudad = 'Buenos Aires';
console.table(personaje);
//Funciones
function sumar(num1, num2) {
    return num1 + num2;
}
var sumarA = function (num1, num2) {
    return num1 + num2;
};
var resultado = sumar(100, 300);
console.log(resultado);
function multiplicar(a, b, c) {
    /* return a * b * c;     va a marcar el c para avisarnos que puede generar un error, ya que al hacer esa funcion, en caso que no sea un number el parametro c, va a dar error.*/
    return a * b;
}
//Objeto tipo personajeJuego
var nuevoPersonaje = {
    nombre: 'Goku',
    pv: 80,
    mostrarPv: function () {
        console.log(nuevoPersonaje.nombre + " tiene " + nuevoPersonaje.pv + " puntos de vida ");
    }
};
nuevoPersonaje.nombre;
function curarPersonaje(personaje, curar) {
    personaje.pv += curar;
    console.log(personaje.nombre + " ha sido curado con " + curar + " puntos de vida y ahora tiene " + personaje.pv);
}
curarPersonaje(nuevoPersonaje, 20);
console.log(nuevoPersonaje.mostrarPv());
console.log(nuevoPersonaje);
//Clases 
var Personas = /** @class */ (function () {
    function Personas(nombre, apellido, rol) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.rol = rol;
    }
    Personas.prototype.dameNombre = function () {
        return "Mi nombre es: " + this.nombre;
    };
    Personas.prototype.dameApellido = function () {
        return "Mi apellido es: " + this.apellido;
    };
    Personas.prototype.dameRol = function () {
        return "Mi rol es: " + this.rol;
    };
    return Personas;
}());
var Veterinario = /** @class */ (function (_super) {
    __extends(Veterinario, _super);
    function Veterinario(nombre, apellido, salario, matricula, rol) {
        var _this = _super.call(this, nombre, apellido, rol) || this;
        _this.nombre = nombre;
        _this.apellido = apellido;
        _this.salario = salario;
        _this.matricula = matricula;
        _this.rol = rol;
        return _this;
    }
    Veterinario.prototype.dameMatricula = function () {
        return "Mi matr\u00EDcula es: " + this.matricula;
    };
    Veterinario.prototype.alimentaMascotas = function () {
        return "Estoy alimentando a la mascota";
    };
    Veterinario.apodo = 'Doc';
    return Veterinario;
}(Personas));
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, apellido, salario, rol) {
        var _this = _super.call(this, nombre, apellido, rol) || this;
        _this.nombre = nombre;
        _this.apellido = apellido;
        _this.salario = salario;
        _this.rol = rol;
        return _this;
    }
    return Empleado;
}(Personas));
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(nombre, apellido, telefono, tarjeta, rol) {
        var _this = _super.call(this, nombre, apellido, rol) || this;
        _this.nombre = nombre;
        _this.apellido = apellido;
        _this.telefono = telefono;
        _this.tarjeta = tarjeta;
        _this.rol = rol;
        return _this;
    }
    return Cliente;
}(Personas));
var jefeVeterinarios = /** @class */ (function (_super) {
    __extends(jefeVeterinarios, _super);
    function jefeVeterinarios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    jefeVeterinarios.prototype.controlarVeterinarios = function () {
        return "Estoy controlando a los veterinarios";
    };
    return jefeVeterinarios;
}(Veterinario));
//Objetos
var Veterinario1 = new Veterinario('Pedro', 'Perez', 1000, 12500, 'Veterinario');
var Empleado1 = new Empleado('Antonio', 'Perez', 1000, 'Empleado');
var Jefe = new jefeVeterinarios('Juan', 'Perez', 1000, 12500, 'Jefe');
console.log(Veterinario1.dameNombre());
console.log(Empleado1.dameRol());
console.log(Jefe.alimentaMascotas());
console.log(Veterinario.apodo);
console.log(Veterinario1.nombre);
