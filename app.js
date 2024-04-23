const express = require('express');
const path = require('path');
const morgan = require('morgan');
const user = require('./models/user');
const trip = require('./models/trip');
const bcrypt = require('bcrypt');
const connectDB = require('./db/db');
const session = require ('express-session');
const app = express();
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRouter');
const tripRoutes = require('./routes/tripRouter');



// Register view engine
app.set('view engine', 'ejs');

// Static files
app.use(express.static('public'));

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
//session middleware to store user data
app.use(session({
  secret: 'ID',
  resave: false,
  saveUninitialized: true,
}));
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.get('/', (req, res) => {
  res.render('home', { stylesheet: 'home/', title: 'Home' });
});



app.use(authRoutes);
app.use(tripRoutes);


app.get('/home', (req, res) => {
    res.redirect('/');
  });


app.get('/profile', (req, res) => {
  res.render('profile');
});

app.get('/profile/personal', async (req, res) => {
  try {
    const userID = req.session.userID;
    if(userID){
      console.log(userID);
    }
    const profile = await user.findById(userID); // Assuming you have only one profile in your databas
    res.render('profile/personal',{profile});
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.post('/modify' , async (req,res) => {
  try {
    // Get user data from the form
    const { name, firstname, email, password, address, phone, city, state } = req.body;

    // Get the user ID from the session
    const userId = req.session.userID;

    // Check if the user is logged in
    if (!userId) {
      return res.status(401).send('Unauthorized');
    }

    // Update user data in the database using the user ID
    await user.findByIdAndUpdate(userId, { name, firstname, email, password, address, phone, city, state });

    res.redirect('/profile/modified');
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' })
  }
});

app.get('/profile/modified', (req, res) => {
  res.redirect('../');
});
 

//payement page
app.get('/pay', (req, res) => {
  res.render('pay');
});

app.get('/confirm', (req, res) => {
  res.render('confirm');
});

// Handle invalid routes
app.use((req, res) => {
  res.status(404).render('404', {stylesheet: '404/', title : '404'});
});



// server start
const port = 3000;

app.listen(port, () => {
 console.log(`App listening at port ${port}`);
});