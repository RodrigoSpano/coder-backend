import userModel from '../../models/userModel.js';
import { createHash } from '../../utils/helpers.js';
import { transporter } from '../../utils/nodemailes.js';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { logger } from '../../log4.js';

export const sendEmail = async (options) => {
  try {
    const info = await transporter.sendMail(options);
    logger.info(info);
  } catch (err) {
    logger.info(err);
  }
};

export const postSignup = async (req, res) => {
  try {
    const { email, password, name, address, years, phoneArea, phone } =
      req.body;
    const { image } = req.files;
    const __dirname = dirname(fileURLToPath(import.meta.url));

    if (!image) return res.sendStatus(400);

    const path = __dirname + '../../../upload/' + image.name

    image.mv(path);

    const user = {
      email,
      password: createHash(password),
      name,
      address,
      years,
      phoneArea,
      phone,
      avatar: path,
    };
    const createUSer = new userModel(user);
    await createUSer.save();

    const mailOptions = {
      from: 'Servidor Node.js',
      to: process.env.TEST_MAIL, //el correo al cual enviarlo
      subject: 'Nuevo Registro',
      html: `<h2>Email: ${email}</h2> </br> <h2>Name: ${name}</h2> </br> <h2>Address: ${address}</h2> </br> <h2>Phone: ${phoneArea} ${phone}</h2>`,
    };
    sendEmail(mailOptions);

    res.redirect('/auth/login');
  } catch (err) {
    logger.warn(err);
  }
};
