import express from 'express';
import morgan from 'morgan';
import 'dotenv/config';

import indexRoute from './routes/index.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(indexRoute);

export default app;
