import express from 'express'
import { getRandomProds } from './controllers/prods.js'

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/api/productos-test', getRandomProds)

app.listen(5000)
console.log(`running 5000`)