const Trips = require("../models/trip");
const Comments = require("../models/comments");
const User = require("../models/user");

exports.getComments = async (req, res) => {
  try {
    const exclude = { _id: 0, createdAt: 0, updatedAt: 0 };
    const profile = await User.findById(req.session.userID);
    const queryParams = req.query;
    const driverEmail = getEmailFromQuery(queryParams);
    console.log(driverEmail);
    const existingDriver = await User.findOne({ email: driverEmail });
    console.log(existingDriver);
    let CommentsArray = await Comments.find({ driverEmail: driverEmail}, exclude);
    console.log(CommentsArray);
    if (!profile) {
      const defaultProfile = {
        name: "Log",
        firstname: "In",
        userType: 0,
      };
      req.session.returnTo = req.originalUrl;
      res.render("notsigned", {
        Comments: CommentsArray,
        stylesheet: "notsigned/",
        title: "",
        profile: defaultProfile,
        driverName : existingDriver.name + existingDriver.firstname
      });
    } else {
      res.render("comments", {
        Comments: CommentsArray,
        profile,
        driverName : existingDriver.name + existingDriver.firstname
      });
    }
  } catch (error) {
    console.error("Error retrieving profile:", error);
    res.status(500).send("Error retrieving profile");
  }
};

exports.postComments = async (req, res) => {
  try {
    const { driverEmail, name, comment, rate } = req.body;
    console.log(driverEmail);
    console.log(name);
    console.log(comment);
    console.log(rate);

    const existingDriver = await User.findOne({ email: driverEmail });
    if (!existingDriver) {
      console.log("Driver not found");
      return res.status(404).send({ message: "Driver not found" });
    } else {
      const existingComment = await Comments.findOne({ driverEmail: driverEmail });
      if (!existingComment) {
        console.log("Comment not found");
        const newComment = new Comments({
          driverEmail: driverEmail,
          Names: [name],
          comment: [comment],
          rate: [rate],
        });
        await newComment.save();
        console.log("Saved comment");
        return res.status(201).send({ message: "Comment saved" });
      } else {
        existingComment.Names.push(name);
        existingComment.comment.push(comment);
        existingComment.rate.push(rate);
        await existingComment.save();
        console.log("Comment updated:", existingComment);
        return res.status(200).send({ message: "Comment updated" });
      }
    }
  } catch (err) {
    console.error("Error posting comment:", err);
    res.status(500).send("Error posting comment");
  }
};



exports.postRating = async (req, res) => {
  try {
    const { driverEmail,rate } = req.body;
    console.log(driverEmail);
    console.log(rate);
    const existingDriver = await Trips.find({ "driver.email": driverEmail });
    console.log(existingDriver);
    if (!existingDriver) {
      console.log("Driver not found");
      return res.status(404).send({ message: "Driver not found" });
    } else {
      existingDriver.forEach(async (trip) => {
        trip.driver.rate = rate;
        await trip.save();
      });
  
      console.log("Driver rating updated");
      return res.status(200).send({ message: "Driver rating updated" });
    }} catch (err) {
      console.error("Error updating driver rating:", err);
      res.status(500).send("Error updating driver rating");
    }
};


function getEmailFromQuery(query) {
  const keys = Object.keys(query);
  if (keys.length > 0) {
    return keys[0]; // This will get the email part from { 'zerrouguemoudjib@gmail.com': '' }
  }
  return null;
}