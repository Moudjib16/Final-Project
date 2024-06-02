const express = require('express');
const router = express.Router();
const reserveController = require('../controllers/reserveController');


router.get('/trajet', reserveController.getTrajet);
router.post('/reserve/create', reserveController.postReserve);

module.exports = router;