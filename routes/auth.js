
/* 
    Rutas para el path
    /api/auth
*/
const { check } = require('express-validator');


const{
    crearUsuario,
    loginUsuario,
    renovarToken
} = require('../controllers/auth')

//const express = require('express');
//const router = express.Router();

const { Router } = require('express');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

router.post('/login', 
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe tener 8 caracteres como mínimo').isLength({ min:8}),
        validarCampos
    ],
    loginUsuario );
    

router.post('/new', 
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe tener 8 caracteres como mínimo').isLength({ min:8}),
        validarCampos
    ],
crearUsuario );


router.post('/renew', renovarToken);


module.exports = router;

