const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');


router.get('/profile', profileController.getProfile);
router.get('/profile/personal', profileController.getPersonal);
router.post('/Modify', profileController.postModify);


module.exports = router;
