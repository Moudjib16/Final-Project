const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');


router.get('/comments', commentsController.getComments);
router.post('/comments/create', commentsController.postComments);
router.post('/comments/rating', commentsController.postRating);

module.exports = router;