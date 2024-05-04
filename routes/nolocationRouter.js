const express = require('express');
const router = express.Router();
const nolocationController = require('../controllers/nolocationController');


router.get('/no-location', nolocationController.getNoLocation);


module.exports = router;