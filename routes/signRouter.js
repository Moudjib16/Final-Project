const express = require('express');
const router = express.Router();
const signController = require('../controllers/signController');


router.get('/signin', signController.getSign);
router.post('/log', signController.postLog);

module.exports = router;
