import mongoose from 'mongoose';

mongoose
  .connect(process.env.URL_CONNECTION)
  .then(() => console.log('database connected'));
