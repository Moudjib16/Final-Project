const express = require('express');
const reportController = require('../controllers/reportController');

const router = express.Router();




router.post('/report/create', reportController.createReport_post);
router.get('/reports', reportController.getReport);


module.exports = router;
