import userModel from '../../models/userModel.js'
import { createHash } from '../../utils/helpers.js'
import { transporter } from '../../utils/nodemailes.js'

const sendEmail = async (options) => {
  try {
    const info = await transporter.sendMail(options);
    console.log(info);
  } catch (err) {
    console.log(err);
  }
}

export const postSignup = async (req, res) => {
  try{
    const { email, password, name, address, years, phoneArea, phone, avatar} = req.body
    const user = {
      email,
      password: createHash(password),
      name,
      address, 
      years,
      phoneArea,
      phone,
      avatar
    }
    const createUSer = new userModel(user)
    await createUSer.save()

    const mailOptions = {
      from: 'Servidor Node.js',
      to: process.env.TEST_MAIL, //el correo al cual enviarlo
      subject: 'Nuevo Registro',
      html: `<h2>Email: ${email}</h2> </br> <h2>Name: ${name}</h2> </br> <h2>Address: ${address}</h2> </br> <h2>Phone: ${phoneArea} ${phone}</h2>`,
      attachments: [
        {
          path: 'https://as1.ftcdn.net/v2/jpg/02/01/33/90/1000_F_201339012_V5lZPXSKRGnk6aIC10mnbzh7giA9Ff9b.jpg',
        }, //se envia con esa imagen adjunta
      ],
    };
    sendEmail(mailOptions)

    res.redirect('/auth/login')
  }catch(err){console.log(err)}
}