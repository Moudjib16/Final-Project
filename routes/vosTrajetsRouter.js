const express = require('express');
const router = express.Router();
const vosTrajetsController = require('../controllers/vosTrajetsController');


router.get('/vosTrajets', vosTrajetsController.getvosTrajets);
router.get('/plan', vosTrajetsController.getPlan);

module.exports = router;