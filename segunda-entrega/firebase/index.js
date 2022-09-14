const express = require('express')
const { router: prodRoute } = require('./routes/prod.routes.js')
const { router: cartRoute } = require('./routes/cart.routes.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.use('/producto', prodRoute)
app.use('/cart', cartRoute)

app.listen(5000)
console.log('running')