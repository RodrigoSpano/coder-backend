import express from "express";
import 'dotenv/config'
import http from 'http'
import { Server as IoServer } from "socket.io";
import Contenedor from "./container/Container.js";
import options from './mariaDB/conectionDB.js'
import {options as SQliteOptions} from './sqlite3/connectionDB.js'

const app = express()

const httpServer = http.createServer(app)
const io = new IoServer(httpServer)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', '.ejs')
app.set('views', './views')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('pages/index', {})
})

const prods = new Contenedor(options, 'products')
const messages = new Contenedor(SQliteOptions, 'messages') 

io.on('connection', socket => {
  console.log('connected')

  // prods.deleteAll()
  // messages.deleteAll()

  //socket de productos
  const listenSelect = async () => {
    await prods.selectAll()
    .then(res => socket.emit('lista', res))
    console.log('data loaded')
  }

  socket.on('conn', async data => {
    await listenSelect()
    await listenChat()
  })

  socket.on('new-prod', async (data) => {
    await prods.insertIntoTable(data)
    console.log('data saved')
    await listenSelect()
    
  })


  //chat-mensajes
  const listenChat = async () => {
    await messages.selectAll()
    .then(res => socket.emit('lista-chat', res))
    console.log('chat loaded')
  }

  socket.on('new-msg', async data => {
    await messages.insertIntoTable(data)
    console.log('msg saved')
    await listenChat()
  })

})


// no le des importancia a esto Fran, es otra opcion que me funciono
// socket.on('new-prod', async data => {
//   prods.insertIntoTable(data)
//   return new Promise((res) => {
//     prods.selectAll()
//     .then(all => res(all))
//   }).then(res => io.sockets.emit('prods_list', res))
// })


const PORT = process.env.PORT || 4000
httpServer.listen(PORT, () => console.log(`running on port ${PORT}`))