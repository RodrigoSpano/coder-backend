const express = require('express')
const { Router } = express
const routerProds = Router()
const products = require('./DB')

const app = express()
app.use(express.json())

routerProds.get('/', (req, res) => {
  res.json({
    status: 200,
    products: products
  })
})

routerProds.get('/:id', (req, res) => {
  const { id } = req.params
  let prod = products.find(el => el.id === Number(id))
  if(prod){
    res.json({
      status:200,
      product: prod
    })
  } else {
    console.log('producto no encontrado')
  }
})

routerProds.post('/', (req, res) => {
  const { name, price, thumbnail } = req.body
  let prod = {name:name, price: price, thumbnail:thumbnail, id: products.length+1}
  products.push(prod)
  res.json({
    status:200,
    product: prod
  })
})

routerProds.put('/:id', (req, res) => {
  const { id } = req.params
  const { name, price, thumbnail } = req.body
  let idd = Number(id)
  
  let newProd = {name:name, price:price, thumbnail:thumbnail, id:idd}
  let prods = products.filter(el => el.id !== idd)
  
  res.json({
    status:200,
    products:[...prods, newProd]
  })
})

routerProds.delete('/:id', (req, res) => {
  const { id } = req.params
  prods = products.filter(el => el.id !== Number(id))
  res.json({
    status:200,
    products: prods
  })
})


app.use('/api/prods', routerProds)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`running on port ${PORT}`)).on('err', (err)=>console.log(err))