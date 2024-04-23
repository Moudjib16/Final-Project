const express = require('express');
const router = express.Router();
const payementController = require('../controllers/payementController');


router.get('/pay', payementController.getPay);
router.get('/confirm', payementController.getConfirm);

module.exports = router;