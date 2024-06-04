const Trips = require("../models/trip");
const { name } = require("ejs");
const User = require("../models/user");

exports.getclient = async (req, res) => {
  try {
    const exclude = { _id: 0, createdAt: 0, updatedAt: 0 };
    const profile = await User.findById(req.session.userID);
    let tripsArray;
    console.log(tripsArray);
    i = 0;
    for (let id of profile.trips) {
      const trip = await Trips.find({ id }, exclude);
      if (trip) {
        if (tripsArray === undefined) {
          tripsArray = trip;
        } else {
          tripsArray.push(trip[0]);
        }
      }
      console.log(tripsArray);
      i++;
    }

    if (!profile) {
      const defaultProfile = {
        name: "Log",
        firstname: "In",
        userType: 0,
      };
      req.session.returnTo = req.originalUrl;
      res.render("notsigned", {
        trips: tripsArray,
        stylesheet: "notsigned/",
        title: "",
        profile: defaultProfile,
      });
    } else {
      res.render("vosTrajets/client", {
        trips: tripsArray,
        profile,
      });
    }
  } catch (error) {
    console.error("Error retrieving profile:", error);
    res.status(500).send("Error retrieving profile");
  }
};

exports.getdriver = async (req, res) => {
  try {
    const exclude = { _id: 0, createdAt: 0, updatedAt: 0 };
    const profile = await User.findById(req.session.userID);
    const email = profile.email;
    console.log(email);
    const tripsArray = await Trips.find({"driver.email": email}, exclude);
    console.log(tripsArray)
    if (!profile) {
      const defaultProfile = {
        name: "Log",
        firstname: "In",
        userType: 0,
      };
      req.session.returnTo = req.originalUrl;
      res.render("notsigned", {
        trips: tripsArray,
        stylesheet: "notsigned/",
        title: "",
        profile: defaultProfile,
      });
    } else {
      res.render("vosTrajets/driver", {
        trips: tripsArray,
        profile,
      });
    }
  } catch (error) {
    console.error("Error retrieving profile:", error);
    res.status(500).send("Error retrieving profile");
  }
};

exports.getDriverPlan = async (req, res) => {
  try {
    const profile = await User.findById(req.session.userID);

    if (!profile) {
      const defaultProfile = {
        name: "Log",
        firstname: "In",
        userType: 0,
      };
      res.render("plan/driver", { profile: defaultProfile });
    } else {
      res.render("plan/driver", { profile });
    }
  } catch (error) {
    console.error("Error retrieving profile:", error);
    res.status(500).send("Error retrieving profile");
  }
};

exports.getClientPlan = async (req, res) => {
  try {
    const profile = await User.findById(req.session.userID);

    if (!profile) {
      const defaultProfile = {
        name: "Log",
        firstname: "In",
        userType: 0,
      };
      res.render("plan/client", { profile: defaultProfile });
    } else {
      res.render("plan/client", { profile });
    }
  } catch (error) {
    console.error("Error retrieving profile:", error);
    res.status(500).send("Error retrieving profile");
  }
};
