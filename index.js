
const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const Port = 8080;

const app = express();
dbConnection();


app.use(express.static('public'));
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));


app.listen(process.env.Port, () => {
    console.log(`Servidor corriendo en el puerto ${Port}`);
})





























//console.log('Hello World');
