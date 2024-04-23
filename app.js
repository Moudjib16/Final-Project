const express = require('express');
const user = require('./models/user');
const app = express();
const homeRoutes = require('./routes/homeRouter');
const authRoutes = require('./routes/authRouter');
const tripRoutes = require('./routes/tripRouter');
const appMiddleware = require('./middleware/middleware')




app.set('view engine', 'ejs');
app.use(appMiddleware);

app.use(homeRoutes);
app.use(authRoutes);
app.use(tripRoutes);

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