const { name } = require("ejs");
const trip = require("../models/trip");
const User = require("../models/user");
const Notis = require("../models/notifications");

exports.getTrajet = async (req, res) => {
  try {
    const profile = await User.findById(req.session.userID);
    const queryParams = req.query;
    console.log(queryParams);
    if (!profile) {
      const defaultProfile = {
        name: "Log",
        firstname: "In",
        userType: 0,
      };
      res.render("trajet", { profile: defaultProfile, trajet: queryParams });
    } else {
      res.render("trajet", { profile, trajet: queryParams });
    }
  } catch (error) {
    console.error("Error retrieving profile:", error);
    res.status(500).send("Error retrieving profile");
  }
};

exports.postReserve = async (req, res) => {
  try {
    const { clientName, id } = req.body;
    const existingTrip = await trip.findOne({ id: id });
    const profile = await User.findById(req.session.userID);
    if (!existingTrip) {
      console.log("Trip not found");
      return res.status(404).send({ message: "Trip not found" });
    } else {
      const nextFreeIndex = existingTrip.passenger.findIndex(
        (slot) => slot == ""
      );
      if (nextFreeIndex !== -1 && existingTrip.available_places !== 0) {
        existingTrip.passenger[nextFreeIndex] = clientName;
        existingTrip.available_places = existingTrip.available_places - 1;
        profile.trips.push(id);
        email = existingTrip.driver.email;
        const existingNotification = await Notis.findOne({
          driverEmail: email,
        });
        if (!existingNotification) {
          console.log("NOtification not found");
          const newNotis = new Notis({
            driverEmail: email,
            Names: [clientName],
          });
          console.log(newNotis);
          await newNotis.save();
        } else {
          existingNotification.Names.push(clientName);
          console.log(existingNotification);
          await existingNotification.save();
        }
        console.log(email);
        await profile.save();
        await existingTrip.save();
        console.log("Saved client name to index:", nextFreeIndex);
        res.status(200).redirect("/pay");
      } else {
        console.log("No free slots available in the 'passenger' array.");
        res
          .status(400)
          .send("No free slots available in the 'passenger' array.");
      }
    }
  } catch (err) {
    console.error("Error reserving trip:", err);
    res.status(500).send("Error reserving trip");
  }
};
