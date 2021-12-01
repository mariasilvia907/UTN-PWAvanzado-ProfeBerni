
const {response} = require('express');
const Evento = require('../models/Evento');
const { loginUsuario } = require('./auth');


const getEvento = async (req, res = response) => {
    
    const evento = await Evento.find();
    res.json({
        "message": "Todos los eventos son: ",
        evento
    });
}

const crearEvento = async (req, res = response) => {
    console.log(req.body);

    const evento = new Evento(req.body);

    try {

        evento.user = req.uid;
        await evento.save();

        res.status(200).json({
            message: 'Creamos el Evento: ',
            evento
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'Hubo un error al crear el Evento',
            error
        });
    }
}

const actualizarEvento = async (req, res = response) => {
    res.json({
        message: 'Hemos Actualizado el evento', 
    });
}

const eliminarEvento = async (req, res = response) => {
    res.json({
        message: 'Hemos Eliminado el evento', 
    });
}

module.exports = {
    getEvento,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}