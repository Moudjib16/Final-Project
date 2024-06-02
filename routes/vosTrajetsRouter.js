const express = require('express');
const router = express.Router();
const vosTrajetsController = require('../controllers/vosTrajetsController');


router.get('/vosTrajets/client', vosTrajetsController.getclient);
router.get('/vosTrajets/driver', vosTrajetsController.getdriver);
router.get('/plan', vosTrajetsController.getPlan);

module.exports = router;