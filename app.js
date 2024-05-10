const express = require('express');
const app = express();
const appMiddleware = require('./middleware/middleware')
const homeRoutes = require('./routes/homeRouter');
const aboutRoutes = require('./routes/aboutRouter');
const nolocationRoutes = require('./routes/nolocationRouter');
const authRoutes = require('./routes/authRouter');
const profileRoutes = require('./routes/profileRouter');
const tripRoutes = require('./routes/tripRouter');
const searchRoutes = require('./routes/searchRouter');
const trajetRoutes = require('./routes/trajetRouter');
const payementRoutes = require('./routes/payementRouter');
const errorHandler = require('./routes/errorHandler');
// const nodemailer = require('./utils/nodemailer')



//middleware
app.set('view engine', 'ejs');
app.use(appMiddleware);

//Utilities
// app.use(nodemailer)


//Routes
app.use(homeRoutes);
app.use(aboutRoutes);
app.use(nolocationRoutes)
app.use(authRoutes);
app.use(profileRoutes);
app.use(tripRoutes);
app.use(searchRoutes);
app.use(trajetRoutes)
app.use(payementRoutes);
app.use(errorHandler);

// server start
const port = 3000;

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
  });