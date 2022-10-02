import express from 'express';
import 'dotenv/config';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import indexRoute from './routes/index.routes.js';
import passport from 'passport';

export const app = express();

app.set('view engine', '.ejs');

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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser(process.env.SECRET));
app.use(morgan('dev'));

app.use(passport.initialize());
app.use(passport.session());

app.use(indexRoute);
