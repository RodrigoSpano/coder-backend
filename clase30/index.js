import cluster from 'cluster';
import express from 'express';
import numCPUs from 'os';

const numcpus = numCPUs.cpus().length;
const port = process.argv[2] || 8080;
const mode = process.argv[3] || 'fork';
const app = express();

app.get('/', (req, res) => res.status(200).send('server is running'));

app.get('/info', (req, res) => {
  res.status(200).send(`num cpus: ${numcpus}`);
});

if (mode === 'cluster' && cluster.isPrimary) {
  console.log(port, mode);

  console.log(`Master ${process.pid} is running`);
  for (let i = 0; i < numcpus; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  app.listen(port, () => console.log('running', port));

  console.log(`Worker ${process.pid} started`);
}
