import app from './index.js';
import './db/database.js';

import yargs from 'yargs';
const yarg = yargs(process.argv.slice(2));

const { argv } = yarg
  .default({
    port: 8080,
  })
  .alias({
    p: 'port',
  });

//? node app --port o con el alias -p NUMBER /=> para correr en el puerto que quieras

const PORT = argv.port;
app.listen(PORT, () => console.log('running on port ', PORT));
