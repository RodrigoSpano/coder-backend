import Productos from '../container/Products.js'

let prodList = [
  {
    title:'termo Stanley',
    description: 'termo de calidad, capaz de mantener agua caliente por mas de 24hs',
    price:29,
    timestamp: Date.now(),
    code:20313256466,
    img:'shorturl.at/678234',
    stock:33,
    id:1
  },
  {
    title:'mouse logitech',
    description: 'mouse logitech de gran calidad, wireless para el pro',
    price:35,
    timestamp: Date.now(),
    code:20313256466,
    img:'shorturl.at/987345',
    stock:58,
    id:2
  }
]


export const getProducts = (req, res) => {
  res.json({
    status:200,
    prodList
  })
}

export const getProdById = (req, res) => {
  const {id} = req.params
  const prod = prodList.find(el => el.id === Number(id))
  res.json({
    status: 200,
    id: id,
    prod
  })
}

export const postProduct = (req, res) => {
  const {isAdmin, title, description, price, timestamp, code, img, stock} = req.body
  const product = { title:title, description:description, price:price, timestamp:timestamp, code:code, img:img, stock:stock, id: prodList.length+1 }
  if(isAdmin){
    const prod = new Productos('./container/prods.txt')
    prod.save(product)
    prodList.push(product)
    res.json({
      status: 200,
      prodList
    })
  } else {
    res.json({
      message:'no estas autorizado para realizar este tipo de peticion'
    })
  }

}


export const editProduct = (req, res) => {
  const {id} = req.params
  const {isAdmin, title, description, price, timestamp, code, img, stock} = req.body
  if(isAdmin){
    const prods = prodList.filter(el => el.id !== Number(id))
    prods.push({title: title, description: description, price: price, timestamp:timestamp, code:code, img:img, stock:stock, id: Number(id)})
    res.json({
      status: 200,
      prodList: prods 
    })
  } else {
    res.json({
      message: 'no estas autorizado para realizar este tipo de peticion'
    })
  }
}

export const deleteProduct = (req, res) => {
  const { id } = req.params
  let isAdmin = true;
  if(isAdmin){
    const prods = prodList.filter(el => el.id !== Number(id))
    res.json({
      status:200,
      prodList: prods
    })
  } else {
    res.json({
      message:'no estas autorizado para realizar este tipo de peticion'
    })
  }
}