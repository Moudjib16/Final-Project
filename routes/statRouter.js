const express = require('express');
const router = express.Router();
const statController = require('../controllers/statController');


router.get('/statistic', statController.getStat);

module.exports = router;