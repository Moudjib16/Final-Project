const express = require('express');
const user = require('./models/user');
const app = express();
const appMiddleware = require('./middleware/middleware')
const homeRoutes = require('./routes/homeRouter');
const authRoutes = require('./routes/authRouter');
const profileRoutes = require('./routes/profileRouter');
const tripRoutes = require('./routes/tripRouter');
const searchRoutes = require('./routes/searchRouter');
const payementRoutes = require('./routes/payementRouter');
const errorHandler = require('./routes/errorHandler')



//middleware
app.set('view engine', 'ejs');
app.use(appMiddleware);


//Routes
app.use(homeRoutes);
app.use(authRoutes);
app.use(profileRoutes);
app.use(tripRoutes);
app.use(searchRoutes);
app.use(payementRoutes);
app.use(errorHandler);

// server start
const port = 3000;

app.listen(port, () => {
 console.log(`App listening at port ${port}`);
});