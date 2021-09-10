
/* Sobreescribe el texto  */

const fs = require('fs');

const data = fs.writeFileSync('./texto.txt', 'Este es un contenido nuevo para el archivo txt.');

console.log(data);
