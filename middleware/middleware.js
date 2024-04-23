const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const bodyParser = require('body-parser');
const connectDB = require('../db/db');
const appMiddleware = express();

appMiddleware.use(express.static('public'));

appMiddleware.use(morgan('dev'));
appMiddleware.use(express.urlencoded({ extended: true }));
appMiddleware.use(session({
  secret: 'ID',
  resave: false,
  saveUninitialized: true,
}));
appMiddleware.use(bodyParser.json());

connectDB();

module.exports = appMiddleware;
