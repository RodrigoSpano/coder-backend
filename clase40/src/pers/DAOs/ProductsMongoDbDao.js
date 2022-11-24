import mongoose from 'mongoose'
import Prods from '../../models/ProdModel.js' 
// import ProductosRepo from '../repository/productosRepo.js'; 
import prodsDto from '../DTOs/ProdsDto.js'

class ProductsMongoDbDao {
  constructor(){
    this.initialize()
  }
  
  initialize = async () => {
            await mongoose.connect('mongodb://localhost:27017/clase40').then(() =>  console.log('db connected'))
        }

    getAll = async () => {
      try {
      const allProds = await Prods.find({});
      return prodsDto(allProds);
      } catch (error) {
        console.log(error)
      }
    }

    getOne = async (_id) =>{
      try {
        const findProd = await Prods.findById({_id})
        return prodsDto(findProd)
      } catch (error) {
        console.log(error)
      }
    }

    addProd = async (data) => {
      try {
        const newProd = new Prods(data)
        await newProd.save()
        return prodsDto(newProd)
      } catch (error) {
        console.log(error)
      }
    }

    updateProd = async (_id, data) => {
      try {
        const prod = await Prods.findByIdAndUpdate({_id}, {data})
        await prod.save()
        return prodsDto(prod);
      } catch (error) {
        console.log(error)
      }
    }

    deleteOne = async (_id) => {
      try {
        await Prods.deleteOne({_id})
      } catch (error) {
        console.log(error)
      }
    }

    deleteAll = async () => {
      try {
        await Prods.deleteMany({})
      } catch (error) {
        console.log(error)
      }
    }

    }

export default ProductsMongoDbDao