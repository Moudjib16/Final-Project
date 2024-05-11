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
router.get('/publier/page1', tripController.getDepart);
router.get('/publier/page2', tripController.getDepart0);
router.get('/publier/page3', tripController.getArrivee);
router.get('/publier/page4', tripController.getArrivee0);
router.get('/publier/calendaire', tripController.getDate);
router.get('/publier/heure', tripController.getTime);
router.get('/publier/people', tripController.getPlaces);
router.get('/publier/prix', tripController.getPrice);
router.get('/publier/description', tripController.getDescription);
router.get('/publier/tripcreated', tripController.getCreated);

module.exports = router;
