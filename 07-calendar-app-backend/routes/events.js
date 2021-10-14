/*
    Ruta de eventos 
    /api/events
*/

const {Router} = require('express');
const {validarJWT} = require('../middlewares/validar-jwt');
const {validarCampos} = require('../middlewares/validar-campos');
const {isDate} = require('../helpers/isDate');
const {actualizarEvento,eliminarEvento,crearEvento,getEvento} = require('../controllers/events');

const { check } = require('express-validator');

const router = Router();


//Todas pasan x validacion JWT.
router.use(validarJWT);

//Obtener eventos
router.get('/',getEvento);


//Crear evento
router.post(
    '/',
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha inicio esobligatoria').custom(isDate),
        check('end','Fecha fin es obligatoria').custom(isDate),
        validarCampos
    ],
    crearEvento);

//Actualizar evento
router.put('/:id',  actualizarEvento);

//Borrar evento
router.delete('/:id', eliminarEvento);


module.exports = router;