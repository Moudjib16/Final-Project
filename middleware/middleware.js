const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const bodyParser = require('body-parser');
const connectDB = require('./db/db');

const app = express();

// Register view engine
app.set('view engine', 'ejs');

// Static files
app.use(express.static('public'));

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'ID',
  resave: false,
  saveUninitialized: true,
}));
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

module.exports = app;
