
/* Lectura de archivos de texto */

const fs = require('fs');

const data = fs.readFileSync('./texto.txt', 'utf8');

console.log(data);



