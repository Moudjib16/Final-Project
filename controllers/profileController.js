const bcrypt = require('bcrypt');
const User = require('../models/user'); // Ensure correct import path and case

exports.getProfile = (req, res) => {
  res.render('profile');
};

exports.getPersonal = async (req, res) => {
  try {
    const userID = req.session.userID;
    if (!userID) {
      return res.status(401).send('Unauthorized');
    }

    const profile = await User.findById(userID);
    if (!profile) {
      return res.status(404).send('Profile not found');
    }

    res.render('profile/personal', { profile });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.postModify = async (req, res) => {
  try {
    const { name, firstname, email, password, address, phone, city, state } = req.body;
    const userId = req.session.userID;

    if (!userId) {
      return res.status(401).send('Unauthorized');
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }

    // Update user details
    user.name = name;
    user.firstname = firstname;
    user.email = email;
    user.address = address;
    user.phone = phone;
    user.city = city;
    user.state = state;

    // Hash and update password if provided
    if (password) {
      const saltRounds = 10;
      const hashPassword = await bcrypt.hash(password, saltRounds);
      user.password = hashPassword;
    }

    await user.save();
    res.redirect('/profile');
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
