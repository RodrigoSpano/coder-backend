const fs = require('fs')

class Contenedor{
  constructor(ruta){
    this.ruta = ruta
  }
  async getAll(){
    try {
      const data = await fs.promises.readFile(this.ruta, 'utf-8')
      const dataPar = JSON.parse(data)
      if(dataPar){
        console.log(dataPar)
        return dataPar
      } else {console.log('empty')}
    } catch(err){console.log(err)}
  }
  async randomProd(){
    let random = Math.round(Math.random()*5)
    const data = await fs.promises.readFile(this.ruta, 'utf-8')
    const dataPar = JSON.parse(data)
    if(dataPar){
      const randomProd = dataPar.find(el => el.id === random)
      return randomProd
    } else { console.log('no se encontro')}
  }

  async removeAll(){
    await fs.promises.writeFile(this.ruta, JSON.stringify([]))
  }
}
module.exports = Contenedor;