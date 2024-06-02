const Trips = require('../models/trip');
const User = require('../models/user')

exports.getSearch =  async(req, res) => {
  const exclude = {_id:0 , createdAt:0 , updatedAt:0}
  const profile = await User.findById(req.session.userID).lean();
  const trips = await Trips.find({}, exclude);
  const defaultProfile = {
        name: "Log",
        firstname: "In",
        userType: 0
      }
  if (!profile) {
    req.session.returnTo = req.originalUrl;
    res.render("notsigned", { stylesheet: 'notsigned/', title: 'Not Signed', profile: defaultProfile });
  }else {
  res.render('search', {trips, profile });
  }
};

exports.getCardsData = async (req, res) => {
    try {
        const trips = await Trips.find().lean();
        res.json(trips);
        console.log(trips);
        
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
}