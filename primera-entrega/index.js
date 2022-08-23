import express from 'express'
import 'dotenv/config'

import productosRouter from './routes/productosRouter.js'
import carritoRouter from './routes/carritoRouter.js'

const app = express()


app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/productos', productosRouter)
app.use('/api/carrito', carritoRouter)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`running on port ${PORT}`))