import bcrypt from 'bcrypt'
import { logger } from '../log4.js'
import { client } from './twilio.js'

export const createHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

export const verifyPassword = (user, password) => {
  return bcrypt.compareSync(password, user.password)
}

export const sendWsp = async (options) => {
  try {
    const message = await client.messages.create(options);
    logger.info(message);
  } catch (err) {
    logger.warn(err);
  }
}

export const sendSMS = async ( user) => {
      await client.messages.create({
        body: `su pedido fue registrado y esta en proceso!`,
        from: '+19894736700',
        to: `${user.phoneArea}${user.phone}`,
      });
}