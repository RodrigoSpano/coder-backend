import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import productsRoute from './router/products.routes.js'
import cartRouter from './router/cart.routes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev')) //morgan lo uso para ver el estado de las peticiones en la consola

app.use('/api/products', productsRoute)
app.use('/api/cart', cartRouter)

const URL = 'mongodb://localhost/ecommerce'
const PORT = 5000
mongoose.connect(URL)
  .then(() => app.listen(PORT, () => console.log(`running on port ${PORT}`)))
  .catch(err => console.log(err.message))