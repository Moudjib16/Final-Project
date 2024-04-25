const Trips = require('../models/trip');

exports.getSearch =  (req, res) => {
    res.render('search' , {display: false});
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