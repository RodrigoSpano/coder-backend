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

  //  prods.deleteAll()
  //  messages.deleteAll()

  socket.on('conn', async data => {
    await prodList()
    await chatList()
  })

  //socket de productos
  const prodList = async () => {
    let prod = await prods.selectAll()
    io.sockets.emit('products-list', prod)
  }

  socket.on('new-prod', async data => {
    console.log(data)
    await prods.insertIntoTable(data)
    await prodList()
  })
  
  const chatList = async () => {
    let msgs = await messages.selectAll()
    console.log(msgs)
    io.sockets.emit('msg-list', msgs)
  }

  socket.on('new-msg', async data => {
    await messages.insertIntoTable(data)
    await chatList()
    
  })

})



const PORT = process.env.PORT || 4000
httpServer.listen(PORT, () => console.log(`running on port ${PORT}`))