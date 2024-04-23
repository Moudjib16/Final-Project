const trip = require('../models/trip');


exports.createTrip = async (req, res) => {
  try {
    const newTrip = new trip(req.body);
    const savedTrip = await newTrip.save();
    req.session.tripId = savedTrip._id;
    console.log('Saved to database:', savedTrip);
    res.status(200).redirect('publier/page2');
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: 'Error saving to database' });
  }
};

exports.updateDepart0 = async (req, res) => {
  try {
    const { depart0 } = req.body;
    const tripId = req.session.tripId;
    if (!tripId) {
      return res.status(404).send({ message: 'Trip ID not found in session' });
    }
    const existingTrip = await trip.findById(tripId);
    if (!existingTrip) {
      return res.status(404).send({ message: 'Trip not found' });
    }
    existingTrip.depart0 = depart0;
    await existingTrip.save();
    res.status(200).redirect('publier/page3');
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: 'Error updating depart0' });
  }
};

exports.updateArrivee = async (req, res) => {
  try {
    const { arrivee } = req.body;
    const tripId = req.session.tripId;
    if (!tripId) {
      return res.status(404).send({ message: 'Trip ID not found in session' });
    }
    const existingTrip = await trip.findById(tripId);
    if (!existingTrip) {
      return res.status(404).send({ message: 'Trip not found' });
    }
    existingTrip.arrivee = arrivee;
    await existingTrip.save();
    res.status(200).redirect('publier/page4');
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: 'Error updating arrivee' });
  }
};

exports.updateArrivee0 = async (req, res) => {
  try {
    const { arrivee0 } = req.body;
    const tripId = req.session.tripId;
    if (!tripId) {
      return res.status(404).send({ message: 'Trip ID not found in session' });
    }
    const existingTrip = await trip.findById(tripId);
    if (!existingTrip) {
      return res.status(404).send({ message: 'Trip not found' });
    }
    existingTrip.arrivee0 = arrivee0;
    await existingTrip.save();
    res.status(200).redirect('publier/calendaire');
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: 'Error updating depart0' });
  }
};

exports.updateDate = async (req, res) => {
  try {
    const dateData = req.body.content;
    const tripId = req.session.tripId;
    if (!tripId) {
      return res.status(404).send({ message: 'Trip ID not found in session' });
    }
    const existingTrip = await trip.findById(tripId);
    if (!existingTrip) {
      return res.status(404).send({ message: 'Trip not found' });
    }
    existingTrip.dateData = dateData;
    await existingTrip.save();
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: 'Error updating depart0' });
  }
};

exports.updateTime = async (req, res) => {
  try {
    const time = req.body.content;
    const tripId = req.session.tripId;
    if (!tripId) {
      return res.status(404).send({ message: 'Trip ID not found in session' });
    }
    const existingTrip = await trip.findById(tripId);
    if (!existingTrip) {
      return res.status(404).send({ message: 'Trip not found' });
    }
    existingTrip.time = time;
    await existingTrip.save();
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: 'Error updating depart0' });
  }
};

exports.updatePlaces =  async (req, res) => {
  try {
    const places = req.body.content;
    const tripId = req.session.tripId;

    if (!tripId) {
      return res.status(404).send({ message: 'Trip ID not found in session' });
    }
    const existingTrip = await trip.findById(tripId);
    if (!existingTrip) {
      return res.status(404).send({ message: 'Trip not found' });
    }
    existingTrip.places = places;
    await existingTrip.save();
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: 'Error updating depart0' });
  }
};

exports.updatePrice =  async (req, res) => {
  try {
    const price = req.body.content;
    const tripId = req.session.tripId;
    if (!tripId) {
      return res.status(404).send({ message: 'Trip ID not found in session' });
    }
    const existingTrip = await trip.findById(tripId);
    if (!existingTrip) {
      return res.status(404).send({ message: 'Trip not found' });
    }
    existingTrip.price = price;
    await existingTrip.save();
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

exports.updateDescription =  async (req, res) => {
  try {
    const description = req.body.content;
    const tripId = req.session.tripId;
    if (!tripId) {
      return res.status(404).send({ message: 'Trip ID not found in session' });
    }
    const existingTrip = await trip.findById(tripId);
    if (!existingTrip) {
      return res.status(404).send({ message: 'Trip not found' });
    }
    existingTrip.description = description;
    await existingTrip.save();
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: 'Error updating depart0' });
  }
};


exports.getDepart = (req, res) => {
  res.render('publier/page1');
};

exports.getDepart0 = (req, res) => {
  res.render('publier/page2');
};

exports.getArrivee = (req, res) => {
  res.render('publier/page3');
};

exports.getArrivee0 = (req, res) => {
  res.render('publier/page4');
};

exports.getDate = (req, res) => {
  res.render('publier/calendaire');
};

exports.getTime = (req, res) => {
  res.render('publier/heure');
};

exports.getPlaces = (req, res) => {
  res.render('publier/people');
};

exports.getPrice = (req, res) => {
  res.render('publier/prix');
};

exports.getDescription = (req, res) => {
  res.render('publier/description');
};


