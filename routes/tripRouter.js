const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');

router.post('/depart', tripController.createTrip);
router.post('/depart0', tripController.updateDepart0);
router.post('/arrivee', tripController.updateArrivee);
router.post('/arrivee0', tripController.updateArrivee0);
router.post('/date', tripController.updateDate);
router.post('/time', tripController.updateTime);
router.post('/places', tripController.updatePlaces);
router.post('/price', tripController.updatePrice);
router.post('/description', tripController.updateDescription);
router.get('/page1', tripController.getDepart);
router.get('/page2', tripController.getDepart0);
router.get('/page3', tripController.getArrivee);
router.get('/page4', tripController.getArrivee0);
router.get('/calendaire', tripController.getDate);
router.get('/heure', tripController.getTime);
router.get('/people', tripController.getPlaces);
router.get('/prix', tripController.getPrice);
router.get('/description', tripController.getDescription);

module.exports = router;
