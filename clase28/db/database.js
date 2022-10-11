import mongoose from 'mongoose';

const CONNECTION = process.env.CONNECTION;
mongoose.connect(CONNECTION).then(() => console.log('ddbb connected'));
