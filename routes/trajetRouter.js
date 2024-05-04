const express = require('express');
const router = express.Router();
const trajetController = require('../controllers/trajetController');


router.get('/trajet', trajetController.getTrajet);


module.exports = router;