const trip = require("../models/trip");
const User = require("../models/user");

exports.createTrip = async (req, res) => {
  try {
    const tripId = Math.floor(100000 + Math.random() * 900000);
    const newTrip = new trip({
      id: tripId,
      ...req.body
    });
    const savedTrip = await newTrip.save();
    req.session.tripId = savedTrip._id;
    console.log("Saved to database:", savedTrip);
    res.status(200).redirect("publier/page2");
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error saving to database" });
  }
};

exports.updateDepart0 = async (req, res) => {
  try {
    const { depart0 } = req.body;
    const tripId = req.session.tripId;
    if (!tripId) {
      return res.status(404).send({ message: "Trip ID not found in session" });
    }
    const existingTrip = await trip.findById(tripId);
    if (!existingTrip) {
      return res.status(404).send({ message: "Trip not found" });
    }
    existingTrip.depart0 = depart0;
    await existingTrip.save();
    res.status(200).redirect("publier/page3");
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error updating depart0" });
  }
};

exports.updateArrivee = async (req, res) => {
  try {
    const { arrivee } = req.body;
    const tripId = req.session.tripId;
    if (!tripId) {
      return res.status(404).send({ message: "Trip ID not found in session" });
    }
    const existingTrip = await trip.findById(tripId);
    if (!existingTrip) {
      return res.status(404).send({ message: "Trip not found" });
    }
    existingTrip.arrivee = arrivee;
    await existingTrip.save();
    res.status(200).redirect("publier/page4");
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error updating arrivee" });
  }
};

exports.updateArrivee0 = async (req, res) => {
  try {
    const { arrivee0 } = req.body;
    const tripId = req.session.tripId;
    if (!tripId) {
      return res.status(404).send({ message: "Trip ID not found in session" });
    }
    const existingTrip = await trip.findById(tripId);
    if (!existingTrip) {
      return res.status(404).send({ message: "Trip not found" });
    }
    existingTrip.arrivee0 = arrivee0;
    await existingTrip.save();
    res.status(200).redirect("publier/calendaire");
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error updating depart0" });
  }
};

exports.updateDate = async (req, res) => {
  try {
    let dateData = req.body.content;
    const tripId = req.session.tripId;
    if (!tripId) {
      return res.status(404).send({ message: "Trip ID not found in session" });
    }
    const existingTrip = await trip.findById(tripId);
    if (!existingTrip) {
      return res.status(404).send({ message: "Trip not found" });
    }
    console.log(dateData);
    if (dateData[9] === undefined) {
      dateData = dateData.slice(0, 8) + "0" + dateData.slice(8);
    }
    console.log(dateData);
    existingTrip.dateData = dateData;
    await existingTrip.save();
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error updating depart0" });
  }
};

exports.updateTime = async (req, res) => {
  try {
    const time = req.body.content;
    const tripId = req.session.tripId;
    if (!tripId) {
      return res.status(404).send({ message: "Trip ID not found in session" });
    }
    const existingTrip = await trip.findById(tripId);
    if (!existingTrip) {
      return res.status(404).send({ message: "Trip not found" });
    }
    existingTrip.time = time;
    await existingTrip.save();
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error updating depart0" });
  }
};

exports.updatePlaces = async (req, res) => {
  try {
    const places = req.body.content;
    const tripId = req.session.tripId;

    if (!tripId) {
      return res.status(404).send({ message: "Trip ID not found in session" });
    }
    const existingTrip = await trip.findById(tripId);
    if (!existingTrip) {
      return res.status(404).send({ message: "Trip not found" });
    }
    existingTrip.places = places;
    for (let index = 0; index < places; index++) {
      existingTrip.passenger[index] = "";
    }
    existingTrip.available_places = places;
    await existingTrip.save();
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error updating depart0" });
  }
};

exports.updatePrice = async (req, res) => {
  try {
    const price = req.body.content;
    const tripId = req.session.tripId;
    if (!tripId) {
      return res.status(404).send({ message: "Trip ID not found in session" });
    }
    const existingTrip = await trip.findById(tripId);
    if (!existingTrip) {
      return res.status(404).send({ message: "Trip not found" });
    }
    existingTrip.price = price;
    await existingTrip.save();
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

exports.updateDescription = async (req, res) => {
  try {
    const description = req.body.content;
    const profile = await User.findById(req.session.userID);
    const tripId = req.session.tripId;
    if (!tripId) {
      return res.status(404).send({ message: "Trip ID not found in session" });
    }
    const existingTrip = await trip.findById(tripId);
    if (!existingTrip) {
      return res.status(404).send({ message: "Trip not found" });
    }
    existingTrip.description = description;
    existingTrip.driver.name = profile.name;
    await existingTrip.save();
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error updating depart0" });
  }
};

exports.getDepart = async (req, res) => {
  const profile = await User.findById(req.session.userID);
  const defaultProfile = {
    name: "Log",
    firstname: "In",
    userType: 0,
  };
  if (!profile) {
    req.session.returnTo = req.originalUrl;
    res.render("notsigned", { stylesheet: 'notsigned/', title: 'Not Signed', profile: defaultProfile });
  } else {
    res.render("publier/page1", { stylesheet: 'notsigned/', title: 'Wilaya', profile });
  }
};

exports.getDepart0 = async (req, res) => {
  const profile = await User.findById(req.session.userID);
  res.render("publier/page2", { stylesheet: 'notsigned/', title: 'Commune', profile });
};

exports.getArrivee = async (req, res) => {
  const profile = await User.findById(req.session.userID);
  res.render("publier/page3", { stylesheet: 'notsigned/', title: 'Wilaya', profile });
};

exports.getArrivee0 = async (req, res) => {
  const profile = await User.findById(req.session.userID);
  res.render("publier/page4", { stylesheet: 'notsigned/', title: 'Commune', profile });
};

exports.getDate = async (req, res) => {
  const profile = await User.findById(req.session.userID);
  res.render("publier/calendaire", { profile });
};

exports.getTime = async (req, res) => {
  const profile = await User.findById(req.session.userID);
  res.render("publier/heure", { stylesheet: 'notsigned/', title: 'Time', profile });
};

exports.getPlaces = async (req, res) => {
  const profile = await User.findById(req.session.userID);
  res.render("publier/people", { stylesheet: 'notsigned/', title: 'Time', profile });
};

exports.getPrice = async (req, res) => {
  const profile = await User.findById(req.session.userID);
  res.render("publier/prix", { stylesheet: 'notsigned/', title: 'Time', profile });
};

exports.getDescription = async (req, res) => {
  const profile = await User.findById(req.session.userID);
  res.render("publier/description", { stylesheet: 'notsigned/', title: 'Time', profile });
};

exports.getCreated = async (req, res) => {
  const profile = await User.findById(req.session.userID);
  res.render("publier/tripcreated", { stylesheet: 'notsigned/', title: 'Time', profile });
};
