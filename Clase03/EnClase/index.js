
/* Ejercicio 1 */
/* Utilizando Common JS */
const moment = require('moment');

/* ES6 */
/* import moment from 'moment'; */

const hoy = moment();
const nacimiento = moment('10-12-1995', 'DD-MM-YYYY');

const edad = hoy.diff(nacimiento, 'years');
const dias = hoy.diff(nacimiento, 'days');

console.log(`Hoy es: ${hoy.format('DD-MM-YYYY')}`);
console.log(`Nací el: ${nacimiento.format('DD-MM-YYYY')}`);

/* Imprimir en consola edad y días */
console.log(`Pasaron ${edad} años de mi nacimiento.`);





