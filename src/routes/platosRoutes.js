const express = require('express');
const router = express.Router();
const path = require('path');

//Requerir el modulo de los controladores
const platosController = require(path.resolve(__dirname, '../controllers/platosController'));

// Métodos en nuestros controladores: index - show - edit - delete

router.get('/platos/view/:id', platosController.view);

module.exports = router;