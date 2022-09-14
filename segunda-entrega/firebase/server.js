
var admin = require("firebase-admin");

var serviceAccount = require("./ecommerce-1880f-firebase-adminsdk-vt7g5-9b84c92075.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

console.log('connected fb')

const db = admin.firestore()

  const create = async (coll, obj) => {
  query = db.collection(coll)

  try {
    let id = 2
    const doc = query.doc(`${id}`)
    await doc.create(obj)
    console.log('producto creado')
  } catch(err){console.log(err)}
}

const update = async (coll, id, obj) => {
  query = db.collection(coll)
    try {
      const doc = query.doc(id)
      const item = await doc.update(obj)
      console.log(item)
    } catch(err){console.log(err)}
}

const deleteOne = async (coll, id) => {
  query = db.collection(coll)
  try{
      const doc = query.doc(id)
      const item = await doc.delete()
      console.log(`Item eliminado: ${item}`)
  }catch(err){console.log(err)}
}

const read = async (coll) => {
  query = db.collection(coll)
  try{
    const queryRead = await query.get()
      const respuesta = queryRead.docs.map(document => ({id: document.id, ...document.data()}))
      console.log(respuesta)

  }catch(err){console.log(err)}
}

module.exports = {
  create,
  update,
  deleteOne,
  read,
}