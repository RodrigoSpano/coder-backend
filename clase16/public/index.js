const socket = io().connect()

let d = document

socket.emit('conn', console.log('client'))


//prods
const addProd = () => {
  let name = d.getElementById('prod-name').value
  let description = d.getElementById('description').value
  let price = d.getElementById('price').value
  const prod = {prod_name:name,description,price}

  socket.emit('new-prod', prod)
  return false;
}

const prodRender = (data) => {
  let div = d.getElementById('prod-list')
  let html = data.map(el => `<li> ${el.prod_name}:${el.description} - $${el.price} </li>`)
  div.innerHTML = html
}

socket.on('lista', async data => {
  await prodRender(data)
  // console.log(data)
})

//messages

const addMsg = () => {
  let from = d.getElementById('from').value
  let message = d.getElementById('text').value
  const chat = {from, message}

  socket.emit('new-msg', chat)
  return false;
}

const msgRender = (data) => {
  let div = d.getElementById('chat-list')
  let html = data.map(el => `<li>${el.from}:  ${el.message} </li>`)
  div.innerHTML = html
}


socket.on('lista-chat', async data => {
  await msgRender(data)
  
  // console.log(data)
})