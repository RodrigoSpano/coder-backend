
export const postLogin = async (req, res) => {
  const { username, password} = req.body
  try {
    if(username && password)
    req.session.username = username;
    req.session.admin = true;
    res.status(200).json({message: `welcome ${username}, auth successfully`, logout: 'delete method to this url'})
    // res.status(200).render('pages/logout')
  }
  catch(err){
    res.status(400).json({success: false, message: err.message})
  }
}

export const getLogin = async (req, res) => {
  try {
    const username = req.session.username
    res.status(200).json({message: `welcome ${username}`, logout: 'delete method to this url'})
  } catch(err){
    res.status(400).json({message: err.message})
  }
}

export const logout = async (req, res) => {
  try{
    req.session.destroy(err => {
      if(err){
        return res.status(500).json({
          success: false,
          message: 'no se pudo cerra sesion'
        })
      }
    })
    return res.status(200).json({
      success: true,
      message: 'sesion cerrada'
    })
  }catch(err){
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
}