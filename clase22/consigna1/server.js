import { faker } from "@faker-js/faker";


export const generador = async () => {
  let array = []
  for(let i = 0; i < 6; i++){
    const prod = {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.image()
    }
    array.push(prod)
  }
  // console.log(array)
  return array
}

// generador()