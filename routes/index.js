let controller = require('../controllers/peliculasControllers');
let express = require('express');
let router = express.Router();

// obtener todos los registros
router.get('/list', controller.getAllMovies);

// craer un nuevo registro
router.post('/agregar', controller.createMovie);

// modificar un registro
router.put('/modificar/:id', controller.updateMovie);

// eliminar un registro
router.delete('/eliminar/:id', controller.deleteMovie);


module.exports = router;
