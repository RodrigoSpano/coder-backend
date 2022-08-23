
let carts_list = []

export const createCart = (req, res) => {
  let cart = []
  carts_list.push({id: carts_list.length+1, timestamp:Date.now(), productos: cart})
  res.json({
    status:200,
    message: 'carrito creado',
    carts_list
  })
}


export const deleteCart = (req, res) => {
  const {id} = req.params
  const Nid = Number(id)
  let vaciar = carts_list.find(el => el.id === Nid)

  if(vaciar){
    vaciar = {id:Nid, timestamp:Date.now(), productos: []}
    const new_list = carts_list.filter(el => el.id !== Nid)
    res.json({
      status: 200,
      message: `carrito ${id} vacio y eliminado`,
      new_list
    })
  } else {
    res.json({
      message: 'numero de carrito inexistente'
    })
  }
}


export const getCartProds = (req, res) => {
  const {id} = req.params
  const cart = carts_list.find(el => el.id === Number(id))
  if(cart){
    res.json({
      status:200,
      message: `carrito ${id}`,
      productos: cart.productos
    })
  } else {
    res.json({
      message:'carrito no encontrado'
    })
  }
}


export const postCartProds = (req, res) => {
  const {id} = req.params
  const cart = carts_list.find(el => el.id === Number(id))

  if(cart){
    const obj = req.body
    const prod = {...obj, id: cart.productos.length+1}
    cart.productos.push(prod)
    res.json({
      status:200,
      message: `producto agregado correctamente al carrito ${id}`,
      productos: cart.productos
    })
  } else {
    res.json({
      message:'carrito no encontrado'
    })
  }
}

export const deleteProd = (req, res) => {
  const {id, id_prod} = req.params
  const cart = carts_list.find(el => el.id === Number(id))
  if(cart){
    const del = cart.productos.filter(el => el.id !== Number(id_prod))
    res.json({
      status:200,
      message: `producto de id ${id_prod} eliminado`,
      productos: del
    })
  } else {
    res.json({
      message: 'no se pudo encontrar el carrito seleccionado'
    })
  }
}