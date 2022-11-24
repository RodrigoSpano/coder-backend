//capa de logica de negocio
import { getDao } from '../factory/productsDaoFactory.js'
import ProductosRepo from '../pers/repository/productosRepo.js' 

class ProductosApi{
  constructor(){
    this.productosDao = getDao()
  }

  async getAll(){
    return await ProductosRepo.getAll()
  }
  async getOne(_id){
    return await ProductosRepo.getOne(_id)
  }
  async addProd(data){
    return await ProductosRepo.addProd(data)
  }
  async updateProd(_id, data){
    return await ProductosRepo.updateProd(_id, data)
  }
  //! no se si poner estos dos ya que no retornan un DTO
  async deleteOne(_id){
    return await this.productosDao.deleteOne(_id)
  }
  async deleteAll(){
    return await this.productosDao.deleteAll()
  }
}

export default ProductosApi