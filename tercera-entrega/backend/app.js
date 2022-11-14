import app from './index.js';
import numCPUs from 'os'
import cluster from 'cluster';

import './db/database.js';

const mode = process.argv[2] || 'fork';

const PORT = process.env.PORT;

if (mode === 'cluster' && cluster.isPrimary) {
  console.log(PORT, mode);

  console.log(`Master ${process.pid} is running`);
  for (let i = 0; i < numCPUs.cpus().length; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  app.listen(PORT, () => console.log(`server running on port ${PORT}`));
  console.log(`port: ${PORT}, mode: ${mode}`);
  console.log(`Worker ${process.pid} started`);
}
