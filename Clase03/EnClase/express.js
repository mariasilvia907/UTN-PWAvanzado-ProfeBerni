
const express = require('express');

const app = express();
const port = 3000;

app.get('/descargar', (req, res) => {
    res.download('./texto.txt');
});


const server = app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

server.on("error", (error) => {
    console.log("error en el servidor:", error);
});