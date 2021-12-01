
const {response} = require('express');
const Usuario = require('../models/Usuario');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { generarToken } = require('../helpers/jwt')



const crearUsuario = async (req, res = response) => {
    
    console.log(req.body);

    const { name, email, password } = req.body;
    //const errores = validationResult(req);

    try {
        //console.log(errores);
        let usuario = await Usuario.findOne({email});
        console.log(usuario);

        if(usuario){
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe'
            });
        }
        
        usuario = new Usuario(req.body);
        
        //Encriptamos la constraseña del usuario creado
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        //Generamos el Token para el acceso a la aplicación
        const token = await generarToken(usuario.id, usuario.name)
        console.log(token);
        
        await usuario.save();

        /*  if (password.length < 8) {
            return res.status(400).json({ 
                error: 'La contraseña debe tener al menos 8 caracteres' 
            });
        }  */

        res.status(200).json({
            message: 'Creación del Usuario realizada',
            //user: req.body,
            name, email, token
        });

    } catch (error) {
        res.status(500).json({
            "message": 'No pudimos crear el Usuario, contacte al Administrador',
            "error": error
        })
    }
    
}


const loginUsuario = async (req, res = response) => {

    const { email, password } = req.body;

    try{

        const usuario = await Usuario.findOne({email});

        if(!usuario){
            return res.status(400).json({
                ok: false,
                msg: 'Usuario o Contraseña Incorrectos'
            });
        }

        const validarPassword = bcrypt.compareSync(password, usuario.password);

        if(!validarPassword){
            return res.status(400).json({
                ok: false,
                msg: 'Usuario o Contraseña Incorrectos'
            });
        }

        //Generamos el Token para el acceso a la aplicación
        const token = await generarToken(usuario.id, usuario.name);
        console.log(token);

        res.status(200).json({
            message: 'Bienvenido a nuestra API - Login',
            token
        });

    }catch (error) {
        res.status(400).json({
            "message": 'No pudimos logear el Usuario, contacte al Administrador',
            "error": error
        })
    }

}


const renovarToken = async (req, res = response) => {
    
    const uid = req.uid;
    const name = req.name;

    const token = await generarToken(uid, name);
    console.log(token);
    
    res.json({
        message: 'Renovamos tu permiso con este Token', 
        token
    });
}

module.exports = {
    crearUsuario,
    loginUsuario,
    renovarToken
}