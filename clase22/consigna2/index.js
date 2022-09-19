import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'

import messageRoute from './routes/messages.routes.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/messages', messageRoute)

const CONNECTION_URL = 'mongodb://localhost/clase22'
const PORT = 5000
mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`running on port ${PORT}`)))
  .catch(err => console.log(err))