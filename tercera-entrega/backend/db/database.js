import mongoose from 'mongoose';

const uri = process.env.DB_CONNECT
mongoose.connect(uri, () => console.log('db connected')
)