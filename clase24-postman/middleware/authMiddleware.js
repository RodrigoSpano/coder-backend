export const authMiddleware = async (req, res, next) => {
  const { username, password, admin} = req.session;
  if(username, password, admin){
    return next()
  }
  return res.status(400).json({message: 'user no auth'})
}