

const fs = require('fs');

const data = fs.appendFileSync('./texto.txt', '\n Estoy agregando contenido al texto del archivo');

console.log(data);