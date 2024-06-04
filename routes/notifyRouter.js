const express = require('express');
const router = express.Router();
const notifyController = require('../controllers/notifyController');


router.get('/notify-driver', notifyController.getNotifications);

module.exports = router;