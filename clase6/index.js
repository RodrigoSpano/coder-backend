const express = require('express');
const app = express()
const port = 8080;

const Contenedor = require('./contenedor')
const prods = new Contenedor('./productos.txt')

app.get('/', (req, res) => {
  res.send('<p>Navega a /productos para ver los productos, o /productoRandom para obtener un producto al azar</p>')
})

app.get('/productos', (req, res) => {
  prods.getAll()
  .then(resp => JSON.stringify(resp))
  .then(data => res.send(data))
})

app.get('/productoRandom', (req, res) => {
  prods.randomProd()
  .then(resp => JSON.stringify(resp))
  .then(data => res.send(data))
})


const server = app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
server.on('error', err => console.log(err))