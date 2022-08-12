import express from 'express'
import { Server as IoServer } from 'socket.io'
import http from 'http'
import {v4 as uuid} from 'uuid'
import moment from 'moment'

const app = express()

const httpServer = http.createServer(app)
const io = new IoServer(httpServer)

app.use(express.urlencoded({ extended:true }))

app.set('view engine', '.ejs')
app.set('views', './views')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('pages/index', {})
})

const products = [
  {id: uuid(), title:'zapatilla naiki', price:234}
]

const chats = [{from:'support@example.com', text:'hola, en que puedo ayudarte?', date: moment().format("MMM Do YY") }]

io.on('connection', socket => {
  console.log('connected', socket.id)

  const msg = {
    id: socket.id,
    products
  }

  socket.on('add-prod', data => {
    products.push(data)
    io.sockets.emit('arrProds', msg)
  })
  socket.emit('arrProds', msg)


  const chatMsg = {
    id: socket.id,
    chats
  }
  socket.on('add-msg', data => {
    const msg = {...data, date: moment().format("MMM Do YY")}
    chats.push(msg)
    io.sockets.emit( 'arrMsg' ,chatMsg)
  })
  socket.emit('arrMsg', chatMsg)

})

httpServer.listen(5000, () => console.log(`running on port ${httpServer.address().port}`))