export const getLogin = (req, res) => {
  res.render('login');
};

export const postLogin = (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password);
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};
