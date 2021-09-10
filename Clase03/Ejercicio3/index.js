
/* Ejercicio 1 - Fecha de Nacimiento */
/* Common JS */
const moment = require('moment');

const hoy = moment();
const nacimiento = moment('10-07-1974', 'DD-MM-YYYY');

const edad = hoy.diff(nacimiento, 'years');
const dias = hoy.diff(nacimiento, 'days');

console.log(`Hoy es ${hoy.format('DD-MM-YYYY')}`);	
console.log(`Nací el ${nacimiento.format('DD-MM-YYYY')}`);

console.log(`Pasaron ${edad} años desde mi nacimiento`);
console.log(`Pasaron ${dias} días desde mi nacimiento`);


/* "type": "module", */  // Para que funcione en node agregar en el package.json

/* Para el ejercicio 2 */
import moment from 'moment'; 

const hoy = moment();
const nacimiento = moment('10-07-1974', 'DD-MM-YYYY');

const edad = hoy.diff(nacimiento, 'years');
const dias = hoy.diff(nacimiento, 'days');

console.log(`Hoy es ${hoy.format('MM-DD-YY')}`);	
console.log(`Nací el ${nacimiento.format('MM-DD-YY')}`);

console.log(`Pasaron ${edad} años desde mi nacimiento`);
console.log(`Pasaron ${dias} días desde mi nacimiento`);