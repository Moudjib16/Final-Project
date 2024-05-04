const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');


router.get('/about', aboutController.getAbout);


module.exports = router;