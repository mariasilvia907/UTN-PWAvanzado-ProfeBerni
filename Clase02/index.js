
const http = require('http');

const server = http.createServer((peticion, respuesta) => {

    console.log(peticion);
    respuesta.end("Este es un Servidor con HTTP nativo de Node");

//Ejercicio 2
    /* let hora = new Date().getHours()


    let mensajes


    if (hora >= 6 && hora <= 12) {
        mensajes = "Buenos días";        
    } if (hora >= 13 && hora <= 19) {
        mensajes = "Buenas tardes";
    } if (hora >= 20 && hora <= 5) {
        mensajes = "Buenas noches";
    }


    respuesta.end(mensajes); */

});

server.listen(8080, function() {
    //console.log("Servidor escuchando en el puerto 3000");
    console.log(`Servidor escuchando en el Puerto http://localhost:${server.address().port}`);
    });


