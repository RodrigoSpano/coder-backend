const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.urlencoded({ extended: true }))

app.set('view engine', '.pug')
app.set('views', './views')

let products = []

app.get('/', (req, res) => {
  res.render('pages/hello', {})
})

app.post('/productos', (req, res) => {
  const prod = req.body
  products.push(prod)
  res.render('partials/productos', {products})
})

app.get('/productos', (req, res) => {
  res.render('partials/productos', {products})
})

app.listen(PORT, () => console.log(`running on port ${PORT}`)).on('error', err => console.log(err))