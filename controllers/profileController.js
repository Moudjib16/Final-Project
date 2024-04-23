const user = require('../models/user');

exports.getProfile =  (req, res) => {
    res.render('profile');
  };
  
exports.getPersonal = async (req, res) => {
    try {
      const userID = req.session.userID;
      if(userID){
        console.log(userID);
      }
      const profile = await user.findById(userID); 
      res.render('profile/personal',{profile});
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
exports.postModify = async (req,res) => {
    try {
      const { name, firstname, email, password, address, phone, city, state } = req.body;
      const userId = req.session.userID;
      if (!userId) {
        return res.status(401).send('Unauthorized');
      }
      await user.findByIdAndUpdate(userId, { name, firstname, email, password, address, phone, city, state });
      res.redirect('/profile');
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' })
    }
  };