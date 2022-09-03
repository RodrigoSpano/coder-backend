use ecommerce // crea y accede a la DB
db.createCollection('mensajes')
db.createCollection('productos')
show.collections

//agrego mensajes
db.mensajes.insertMany([
  {from:'d1q2342', mensaje:'lorem ipsu'},
  {from:'12313df', mensaje:'lorem ipsu ipsy lor'},
  {from:'jnh32yu7', mensaje:'asdojajksd'},
  {from:'asd7asd', mensaje:'mensaje mensaje mensaje'},
  {from:'kms8sj', mensaje:'este es otro mensaje'}, 
  {from:'js7djs', mensaje:'otro mensaje mas'}, 
  {from:'6tos3ds', mensaje:'este es el sexto mensaje'},
  {from:'7ja8ad6', mensaje:'septimo mensaje'},
  {from:'8js0d8', mensaje:'lorem ipsu'},
  {from:'9sd86', mensaje:'lorem'},
  {from:'10sjda3', mensaje:'loremmmmmmmm'}
])

db.mensajes.find().pretty()

//agrego productos

db.productos.insertMany([
  {name:'producto 1', description:'desc prod 1', price:1450},
  {name:'producto 2', description:'desc prod 2', price:3999},
  {name:'producto 3', description:'desc prod 3', price:3000},
  {name:'producto 4', description:'desc prod 4', price:2900},
  {name:'producto 5', description:'desc prod 5', price:1800},
  {name:'producto 6', description:'desc prod 6', price:4600},
  {name:'producto 7', description:'desc prod 7', price:3500},
  {name:'producto 8', description:'desc prod 8', price:1850},
  {name:'producto 9', description:'desc prod 9', price:2000},
  {name:'producto 10', description:'desc prod 10', price:5000}
])
//muestro todos los productos
db.productos.find().pretty()

//cantidad de documentos en colleciones
db.mensajes.estimatedDocumentCount()
db.productos.estimatedDocumentCount()

//add nuevo producto
db.productos.insertOne({name:'producto nuevo', description:'desc prod nuevo', price:750})

//devuelve los productos menor de 1000 pesos
db.productos.find({price: {$lt: 1000}})

//devuelve prods con precio entre 1000 y 3000
db.productos.find({$and: [{price: {$gte: 1000}}, {price: {$lte: 3000}}]}).pretty()

//devuelve precios mayor a 3000
db.productos.find({price: {$gte: 3000}}).pretty()

//devuelve el nombre del tercer producto mas barato
db.productos.find({}, {name:1, _id:0}).sort({price:1}).limit(1).skip(2)

//agregar stock:100 a todos los productos
db.productos.updateMany({}, {$set: {stock: 100}})

//cambia stock a 0 de los productos con precio mayor a 4000
db.products.updateMany({price: {$gte: 4000}}, {$set: {stock: 0}})

//borrar prods con precio menor a 1000 pesos
db.productos.deleteMany({price: {$lt: 1000}})

//creacion de usuario solo lectura
db.createUser([{
  user:'pepe',
  pwd:'asd456',
  roles:[{ role:'read', db:'ecommerce'}]
}])
