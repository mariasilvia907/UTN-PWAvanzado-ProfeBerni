/**
 * ejemplo de un servidor http con express
 */

const express = require("express");
const moment = require("moment");

// creo una app de tipo express
const app = express();

const puerto = 8080;

// defino la ruta / con GET - petición - respuesta

//Definir distintas rutas para mis endpoints
app.get("/", (req, res) => {
    console.log("Request recibido!");
    res.json({ msg: "Hola mundo!" });
});

//Ejercicios
//Crear tres endpoints: /autor, /libro y /usuario y responder con unlista tipo json
//Testearlo con Postman

app.get("/autor", (req, res) => {
    console.log("Request recibido!");
    res.json([{ autor: `Berni`, instituto: `UTN`}, { autor: `Berni`, instituto: `UTN`}]);
});

//Para mensajes de txto directo
app.get("/texto", (req, res) => {
    console.log("Request recibido!");
    res.send(`<h1 style="color:blue">Soy la respuesta de un endpoint de tipo Texto</h1>`);
});


//pasar parámetros por id
app.get("/autor/:id", (req, res) => {
    console.log("Request recibido!", req.params.id);
    res.json({ autor: `Berni`, instituto: `UTN`, mensaje: `Persona con id: ${req.params.id}`});
});

//Con dos parámetros, los parámetros están en la url

app.get("/autor/:id/:edad", (req, res) => {
    console.log("Request recibido!", req.params.id);
    res.json({ autor: `Berni`, instituto: `UTN`, mensaje: `Persona con id: ${req.params.id} y la edad es: ${req.params.edad}`});
});

//Query parametros
app.get("/query", (req, res) => {
    console.log("Request recibido!");
    res.json({ autor: `Berni`, instituto: `UTN`, mensaje: `Persona con id: ${req.query.id}`});
});


//Puede ser con function - para descargas de archivos
//https://expressjs.com/es/guide/routing.html

app.get('/descargas', function (req, res) {
    res.download('./random.txt');
});


app.get('/error', function (req, res) {
    res.sendStatus(404)
});


//Ejercicios Visitas
let contador = 0;
app.get("/visitas", (req, res) => {
    contador ++;
    console.log("Request a visitas recibido!");
    res.send(`<h1 style="color:red">La cantidad de visitas es: ${contador}</h1>`);
});

app.get("/fyh", (req, res) => {
    let fecha = moment().format('DD-MM-YYYY');
    let hora = moment().format('HH:mm:ss');
    contador ++;
    console.log("Request a visitas recibido!");
    res.send(`<h1 style="color:red">La cantidad de visitas es: ${contador} y la fecha de la visita es: ${fecha}, ${hora}</h1>`);
});









// pongo a escuchar el servidor en el puerto indicado
const server = app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on("error", (error) => {
    console.log("error en el servidor:", error);
});
