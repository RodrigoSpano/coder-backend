const Router = require('express').Router;

const router = Router();

//! se que tiene q ser method delete pero no me funcionaba ajsdajda
router.get('/', (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).json({
          success: false,
          message: 'no se pudo cerrar la session',
        });
      }
      return res.status(200).redirect('/login');
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
