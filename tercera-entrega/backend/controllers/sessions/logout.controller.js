import { logger } from '../../log4.js';

export const getLogout = async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).json({
          success: false,
          message: 'no se pudo cerrar la session',
        });
      }
      return res.status(200).redirect('/auth/login');
    });
  }catch(err){logger.warn(err)}
}