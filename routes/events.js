const { Router } = require("express");
const { validarJWT} = require('../middlewares/validar-jwt');                      
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require("../controllers/events");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { isDate } = require("../helpers/isdate");

const router = Router();

// Todas las rutas tienen que pasar por la 
// validación de JWT
router.use( validarJWT );

// Obtener eventos
router.get('/', getEventos);

// Crear un nuevo evento
router.post(
    '/', 
    [
        check('title', 'El título es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalización es obligatoria').custom(isDate),
        validarCampos
    ],
    crearEvento
);

// Actualizar evento
router.put(
    '/:id',
    [
        check('title', 'El título es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de finalización es obligatoria').custom(isDate),
        validarCampos
    ],
    actualizarEvento
);

// Borrar evento
router.delete('/:id', eliminarEvento);

module.exports = router;
