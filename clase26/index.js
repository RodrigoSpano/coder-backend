const cookieParser = require('cookie-parser');
const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const passport = require('passport');

require('dotenv').config();
require('./utils/passport.config');

const indexRoute = require('./routes/index');

const app = express();

app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 600000,
    },
  })
);

app.set('view engine', '.ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SECRET));
app.use(morgan('dev'));

app.use(passport.initialize());
app.use(passport.session());

app.use(indexRoute);

module.exports = app;
