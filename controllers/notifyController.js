const { name } = require('ejs');
const User = require('../models/user');
const Notis = require('../models/notifications')

exports.getNotifications = async (req, res) => {
    try {
      const exclude = { _id: 0, createdAt: 0, updatedAt: 0 };
      const profile = await User.findById(req.session.userID);
      const email = profile.email;
      console.log(email);
      const notisArray = await Notis.find({driverEmail: email}, exclude);
      console.log(notisArray)
      if (!profile) {
        const defaultProfile = {
          name: "Log",
          firstname: "In",
          userType: 0,
        };
        req.session.returnTo = req.originalUrl;
        res.render("notsigned", {
          notis: notisArray,
          stylesheet: "notsigned/",
          title: "",
          profile: defaultProfile,
        });
      } else {
        res.render("notify-driver", {
          notis: notisArray,
          profile,
        });
      }
    } catch (error) {
      console.error("Error retrieving profile:", error);
      res.status(500).send("Error retrieving profile");
    }
  };
