
export const postLogin = async (req, res) => {
  const { username, password} = req.body;
  try {
    if(username && password){
      req.session.username = username;
      req.session.password = password;
      req.session.admin = true;
      return res.status(200).json({message: `welcome ${username}`, logout: 'METHOD DELETE localhost:5000/logout'})
    }
  } catch(err){
    res.status(400).json({message: err.message})
  }
}

export const getLogin = async (req, res) => {
  try {
    const username = req.session.username;
    res.status(200).json({message: `welcome ${username}`, logout: 'METHOD DELETE localhost:5000/logout'})
  } catch(err){
    res.status(400).json({message: err.message})
  }
}

export const deLogout = async (req, res) => {
  const username = req.session.username;
  try {
    req.session.destroy(err => {
      if(err){
        return res.status(500).json({
          success: false,
          message: 'no se pudo cerrar sesion'
        })
      }
      return res.status(200).json({
        message: `hasta luego ${username}, session cerrada`,
        login: 'post to localhost:5000/login'
      })
    })
  } catch(err){
    res.status(500).json({message: err.message})
  }
}