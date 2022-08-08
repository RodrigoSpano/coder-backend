const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.set('view engine', '.ejs')
app.set('views', './views')

let products = []

app.get('/', (req, res) => {
  res.render('pages/index', {})
})

app.post('/productos', (req, res) => {
  const prod = req.body
  products.push(prod)
  res.render('pages/products', {products})
})

app.get('/productos', (req, res) => {
  res.render('pages/products', {products})
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`running on ${PORT}`)).on('err', err => console.log(err))