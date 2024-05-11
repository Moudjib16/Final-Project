const express = require('express');
const router = express.Router();
const recoveryController = require('../controllers/recoveryController');


router.get('/enterEmail', recoveryController.getEmail);
router.post('/enterEmail', recoveryController.postEmail);
router.get('/confirmCode', recoveryController.getConfirm);
router.post('/verifyToken', recoveryController.postConfirm)
router.get('/reset', recoveryController.getReset);
router.post('/reset', recoveryController.postReset);
module.exports  = router;
