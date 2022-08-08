const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.urlencoded({ extended: true }))


app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
  })
  )
  app.set('view engine', '.hbs')
  app.set('views', './views')

  let products = []

app.get('/', (req, res) => {
  res.render('main', {exist:true ,products})
})

app.post('/productos', (req, res) => {
  const prod = req.body
  products.push(prod)
  res.render('main', {exist:true, products})
})

app.get('/productos', (req, res) => {
  res.render('main', {exist:true, products})
})

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`)
} ).on('err', err => console.log(err))