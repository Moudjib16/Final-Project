const express = require('express');
const router = express.Router();

// Handle invalid routes
router.use((req, res) => {
  res.status(404).render('404', { stylesheet: '404/', title: '404' });
});

module.exports = router;
