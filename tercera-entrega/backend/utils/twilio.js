import twilio from 'twilio';

const accountSid = 'AC146114b26ff5c3a1bf099a7a4633e3d2';
const authToken = '14aa08cd5366a0bfa2b448137e6fc3ac';

export const client = twilio(accountSid, authToken);



