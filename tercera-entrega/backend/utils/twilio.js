import twilio from 'twilio';

const accountSid = 'AC146114b26ff5c3a1bf099a7a4633e3d2';
const authToken = '14aa08cd5366a0bfa2b448137e6fc3ac';

const client = twilio(accountSid, authToken);

const options = {
  body: 'Hola soy un WSP desde Node.js!',
  mediaUrl: [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Pac-Man_Cutscene.svg/283px-Pac-Man_Cutscene.svg.png',
  ],
  from: 'whatsapp:+14155238886',
  to: 'whatsapp:+5491166211051',
};

(async () => {
  try {
    const message = await client.messages.create(options);
    console.log(message);
  } catch (err) {
    console.log(err);
  }
})();
