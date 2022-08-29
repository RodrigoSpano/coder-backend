// contenedor con metodos que fuuncionan sobre base de datos
import { deleteAll, deleteOne, insertInto, selectAll, updateOne } from '../functions/calls.js'

class Contenedor {
  constructor(options,tableName){
    this.options = options;
    this.tableName = tableName;
  }

  insertIntoTable(data){
    insertInto(this.options, this.tableName, data)
  }

  async selectAll(){
    const resp = await selectAll(this.options, this.tableName)
    return resp;
    // .then(res => {
    //   console.log(res)
    //   return res;
    // })
  }

  updateById(id, data){
    updateOne(this.options, this.tableName, id, data)
  }

  deleteAll(){
    deleteAll(this.options, this.tableName)
  }

  deleteById(id){
    deleteOne(this.options, this.tableName, id)
  }
}

export default Contenedor;