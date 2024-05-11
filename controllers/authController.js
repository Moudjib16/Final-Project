const user = require('../models/user');
const bcrypt = require('bcrypt');


exports.getSignup = (req, res) => {
  res.render('signup', {exist: ''});
};

exports.postSignup = async (req, res) => {
  console.log(req.body);
  const userdata = new user(req.body);

  const userexist = await user.findOne({email : userdata.email});
  if (userexist) {
    res.render('signup/emailExist')
  }
  else{
    const saltRounds = 10; 
    const hashPassword = await bcrypt.hash(userdata.password, saltRounds);
    userdata.password = hashPassword;
    userdata.save()
    .then((result) => {
      console.log('Saved to database:', result);
      res.status(200).redirect('login');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).sendFile({ message: 'Error saving to database' });
    });
  }
};

exports.getLogin = (req, res) => {
  res.render('login');
};

exports.postLogin = async (req, res) => {
  try{
    const check = await user.findOne({email : req.body.email});
    if(!check){
      res.render('login/nouser');
    }else{
    const passwordMatch = await bcrypt.compare(req.body.password, check.password);
    if(passwordMatch){
      req.session.userID = check._id;
      req.session.usertype = check.userType; 
      res.redirect('/');
    }
    else{
      res.render('login/wrongpass');
    }
  }}
  catch {
    res.send('wrong details');
  }
};

exports.logout = (req, res) => {
  res.render('logout');
};

exports.disconnect = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
      return res.status(500).send('Error logging out');
    }
    const defaultProfile = {
      name: "Log",
      firstname: "In",
      userType: 0
    };
    res.render('home', { stylesheet: 'home/', title: 'Home', profile: defaultProfile });
  });
};