//el options no lo importo pq tiene q darlo el contenedor cuando llame a la funcion
//aca estan las fuunciones que llama el contenedor en sus metodos
import knex from 'knex'

export const insertInto = async (options, tableName, data) => {
  const database = knex(options)
  try {
    await database(tableName).insert(data)
    console.log('datos guardados')
  }catch(err){console.log(err)}
  finally{
    database.destroy()
  }
}

export const selectAll = async (options, tableName) => {
  const database = knex(options) 
  try{
    const rows = await database.from(tableName).select('*')
    return rows;
  }
  catch(err){console.log(err)}
  finally{
    database.destroy()
  }
}

export const updateOne = async (options, tableName, id, data) => {
  const database = knex(options)
  try {
    await database.from(tableName).where('id', id).update(data)
  } catch(err){console.log(err)}
  finally{
    database.destroy()
  }
}

export const deleteAll = async (options, tableName) => {
  const database = knex(options)
  try {
    await database.from(tableName).del()
    console.log('tabla vaciada')
  }catch(err){console.log(err)}
  finally{
    database.destroy()
  }
}

export const deleteOne = async (options, tableName, id) => {
  const database = knex(options)
  try {
    await database.from(tableName).where('id', '=', id).del()
    console.log(`elemento de id ${id} eliminado`)
  } catch(err){console.log(err)}
  finally{
    database.destroy()
  }
}

