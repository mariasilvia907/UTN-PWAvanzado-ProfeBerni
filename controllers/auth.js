
const express = require('express');
const Usuario = require('../models/Usuario');
const { validationResult } = require('express-validator');



const crearUsuario = async (req, res = express.response) => {
    
    console.log(req.body);

    const { name, email, password } = req.body;
    //const errores = validationResult(req);

    //console.log(errores);

    const usuario = new Usuario(req.body);
    await usuario.save();

    /*  if (password.length < 8) {
        return res.status(400).json({ 
            error: 'La contraseña debe tener al menos 8 caracteres' 
        });
    }  */

    return res.status(200).json({
        message: 'Creación del Usuario realizada',
        //user: req.body,
        name, email, password
    });
}


const renovarToken = (req, res = express.response) => {
    res.json({
        message: 'Renovamos tu permiso con este Token'
    });
}

module.exports = {
    crearUsuario,
    renovarToken
}