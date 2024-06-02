const express = require('express');
const app = express();
const appMiddleware = require('./middleware/middleware')
const homeRoutes = require('./routes/homeRouter');
const aboutRoutes = require('./routes/aboutRouter');
const nolocationRoutes = require('./routes/nolocationRouter');
const authRoutes = require('./routes/authRouter');
const recoveryRoutes = require('./routes/recoveryRouter');
const profileRoutes = require('./routes/profileRouter');
const tripRoutes = require('./routes/tripRouter');
const searchRoutes = require('./routes/searchRouter');
const reserveRoutes = require('./routes/reserveRouter');
const payementRoutes = require('./routes/payementRouter');
const vosTrajetsRoutes = require('./routes/vosTrajetsRouter');
const reportRoutes = require('./routes/reportRouter');
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
app.use(recoveryRoutes);
app.use(profileRoutes);
app.use(tripRoutes);
app.use(searchRoutes);
app.use(reserveRoutes)
app.use(payementRoutes);
app.use(vosTrajetsRoutes);
app.use(reportRoutes);
app.use(errorHandler);

// server start
const port = 3000;

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
  });