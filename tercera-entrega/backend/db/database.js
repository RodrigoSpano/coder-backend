import mongoose from 'mongoose';
import { logger } from '../log4.js';

const uri = process.env.DB_CONNECT
mongoose.connect(uri, () => logger.info('db connected')
) 