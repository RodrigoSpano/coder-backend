const socket = io().connect()

let d = document
const render = (data) => {
  const div = d.getElementById('products')
  const html = data.map(el => `<li> ${el.title} : price:$ ${el.price} </li>` )
  div.innerHTML = html
}

socket.on('arrProds', data => {
  render(data.products)
})

const addProd = (e) => {
  let title = d.getElementById('title').value
  let price = d.getElementById('price').value
  let prod = {title, price}

  socket.emit('add-prod', prod)
  return false
}


const renderMsg = (data) => {
  let container = d.getElementById('chat-container')
  let html = data.map(el => `<li>
    <em> ${el.date} </em>
    <strong style='color:blue'> ${el.from}: </strong>
    <p style='color:brown'>${el.text}</p> 
    </li> `)
  container.innerHTML = html
}

socket.on('arrMsg', data => {
  renderMsg(data.chats)
} )

const addMessage = (e) => {
  let email = d.getElementById('email').value
  let text = d.getElementById('text').value
  const chatMsg = {from:email, text}

  socket.emit('add-msg', chatMsg)
  return false
}