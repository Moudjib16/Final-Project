const User = require('../models/user');
const bcrypt = require('bcrypt');
const sendEmail = require('../utils/nodemailer');


exports.getEmail = (req,res)=>{
    res.render('recovery/enterEmail');
};

exports.getConfirm = (req,res)=>{
    res.render('recovery/confirmCode');
};

exports.getReset = (req,res)=>{
    res.render('recovery/reset');
};



exports.postEmail = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the email exists in your database
    const existingUser = await User.findOne({ email });
    
    if (!existingUser) {
      console.log("User not found.");
      return res.status(404).send('User not found.');
    }

    req.session.email = email;
    console.log(email)
    const token = await sendEmail(email);
    req.session.recoveryToken = token
    console.log(token);
    console.log(req.session);
    // Redirect to the confirm page
    res.redirect('confirmCode');
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).send('An error occurred.');
  }
};

exports.postConfirm = async (req, res) => {
    try {
        const { token } = req.body;
        console.log(token);
        console.log(req.session.recoveryToken)
        // Compare the token with the one stored in the session
        if (token == req.session.recoveryToken) {
            console.log('Token verified successfully.');
            res.status(200).send('Token verified successfully.');
        } else {
            console.log('Incorrect token.');
            res.status(400).send('Incorrect token.');
        }
    } catch (error) {
        console.error('Error verifying token:', error);
        res.status(500).send('An error occurred.');
    }
};
  
exports.postReset = async (req, res) => {
    try {
        const password = req.body.password;
        console.log(typeof password);
        console.log(password);
        const email = req.session.email;
        if (!email) {
            return res.status(401).send('Unauthorized');
        }
        else{
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(404).json({ error: 'User not found.' });
              }
            if (password) {
                const saltRounds = 10;
                const hashPassword = await bcrypt.hash(password, saltRounds);
                user.password = hashPassword;
              }
            await user.save();
            res.redirect('/home');
        }
    } catch (error) {
        console.error('Error verifying token:', error);
        res.status(500).send('An error occurred.');
    }
};
  