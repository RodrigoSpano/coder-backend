import express from 'express'
import 'dotenv/config'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import indexRoute from './src/routes/index.js'
import MongoStore from 'connect-mongo'

const app = express()

const mongoConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  store: MongoStore.create({mongoUrl: 'mongodb://localhost/sessions', mongoOptions: mongoConfig })
}))

app.set('view engine', '.ejs')
app.set('views', './views')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cookieParser(process.env.COKIES_SECRET))

app.use(indexRoute)

export default app;