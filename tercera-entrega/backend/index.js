import express from 'express'
import 'dotenv/config'
import morgan from 'morgan'
import session from 'express-session'
import passport from 'passport'
import MongoStore from 'connect-mongo'
import indexRoute from './routes/index.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import fileUpload from 'express-fileupload'

import './utils/passport.config.js'

const app = express()

const mongoConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.SESSION_URL, mongoOptions:mongoConfig }),
    cookie: {
      maxAge: 600000,
    },
  })
);

app.set('view engine', '.ejs')

app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(cookieParser(process.env.SECRET));
app.use(morgan('dev'))
app.use(cors())
app.use(fileUpload())

app.use(passport.initialize())
app.use(passport.session())

app.use(indexRoute)

export default app;