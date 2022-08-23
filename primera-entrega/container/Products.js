import fs from 'fs'

class Contenedor{
  constructor(ruta){
    this.ruta = ruta
  }
  async save(obj){
    try {
      let data = await fs.promises.readFile(this.ruta, 'utf-8')
      let dataParse = JSON.parse(data)
      console.log(dataParse)
      if(dataParse){
        await fs.promises.writeFile(this.ruta, JSON.stringify([...dataParse, {...obj}],null, 2))
      } else {
        await fs.promises.writeFile(this.ruta, JSON.stringify([{...obj}], null, 2))
      }
    } catch(err){console.log(err)}
  }
}

export default Contenedor;