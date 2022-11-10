import { createTransport } from 'nodemailer';

const TEST_MAIL =  process.env.TEST_MAIL   //poner el email al que quieran q le llegue, yo puse uno temporal

export const transporter = createTransport({
  service: 'gmail',
  port: 587,
  auth: {
    user: TEST_MAIL,
    pass: 'yfewdtqsexvrfvvb',
  },
});

