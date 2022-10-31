import cluster from 'cluster';
import express from 'express';
import numCPUs from 'os';
import crypto from 'crypto';
import compression from 'compression';
import { logger } from './log4.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

app.get('/info', (req, res) => {
  try {
    const { url, method } = req;
    logger.info(`realizaste la peticion ${method} a la ruta ${url}`);
    let msg = 'info ';
    res.send(msg.repeat(509));
  } catch (err) {
    logger.error(err);
  }
});

app.get('*', (req, res) => {
  try {
    const { url, method } = req;
    logger.warn(`ruta ${url} inexistente, metodo: ${method}`);
    res.sendStatus(400);
  } catch (err) {
    logger.error(err);
  }
});

let users = {};

app.get('/newUser', (req, res) => {
  let username = req.body.username || '';
  let password = req.body.password || '';

  username = username.replace(/[!@#$%^&*]/g, '');

  if (!username || !password || users[username]) {
    return res.sendStatus(400);
  }

  const salt = crypto.randomBytes(128).toString('base64');
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512');

  users[username] = { salt, hash };
  res.sendStatus(200);
});

app.get('/auth-bloq', (req, res) => {
  let username = req.query.username || '';
  const password = req.query.password || '';

  username = username.replace(/[!@#$%^&*]/g, '');

  if (!username || !password || !users[username]) {
    process.exit(1);
    // return res.sendStatus(400);
  }

  const { salt, hash } = users[username];
  const encryptHash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512');

  if (crypto.timingSafeEqual(hash, encryptHash)) {
    res.sendStatus(200);
  } else {
    process.exit(1);
    // res.sendStatus(401);
  }
});

app.get('/auth-nobloq', (req, res) => {
  let username = req.query.username || '';
  const password = req.query.password || '';
  username = username.replace(/[!@#$%^&*]/g, '');

  if (!username || !password || !users[username]) {
    process.exit(1);
    // return res.sendStatus(400);
  }
  crypto.pbkdf2(
    password,
    users[username].salt,
    10000,
    512,
    'sha512',
    (err, hash) => {
      if (users[username].hash.toString() === hash.toString()) {
        res.sendStatus(200);
      } else {
        process.exit(1);
        //res.sendStatus(401);
      }
    }
  );
});

// const mode = process.argv[3] || 'fork';
const port = parseInt(process.argv[2]) || 8080;

// if (mode === 'cluster' && cluster.isPrimary) {
//   console.log(port, mode);

//   console.log(`Master ${process.pid} is running`);
//   for (let i = 0; i < numCPUs.cpus().length; i++) {
//     cluster.fork();
//   }
//   cluster.on('exit', (worker) => {
//     console.log(`worker ${worker.process.pid} died`);
//   });
// } else {
//   app.listen(port, () => logger.info(`sv running on ${port}`));
//   console.log(`port: ${port}, mode: ${mode}`);
//   console.log(`Worker ${process.pid} started`);
// }

app.listen(port, () => logger.info(`sv running on ${port}`));

//!usar comando export NODE_ENV="production" para que funcione
