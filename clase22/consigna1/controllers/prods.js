import { generador } from "../server.js"


export const getRandomProds = async (req, res, next) => {
  try {
    await generador()
    .then(resp => res.status(200).json(resp))
  } catch(err){next()}
}