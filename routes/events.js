/* 
    Responde a la Ruta
    /api/events/
*/
const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');
const { validarJWT } = require('../middlewares/validarJWT');

const{
    getEvento,
    crearEvento,
    actualizarEvento,
    eliminarEvento
} = require('../controllers/events');

router.use(validarJWT);


router.get('/', validarJWT, getEvento)

router.post('/', 
    [
        check('title', 'El Título es obligatorio').not().isEmpty(),
        check('start', 'La fecha de inicio es obligatoria').custom(isDate),
        check('end', 'La fecha final es obligatoria').custom(isDate),
        validarCampos, 
    ],
    crearEvento);

router.put('/:id', validarCampos, actualizarEvento );

router.delete('/:id', validarCampos, eliminarEvento);


module.exports = router;