import app from './index.js';
import numCPUs from 'os'
import cluster from 'cluster';

import './db/database.js';
import { logger } from './log4.js';

const mode = process.argv[2] || 'fork';

const PORT = process.env.PORT;

if (mode === 'cluster' && cluster.isPrimary) {
  logger.info(PORT, mode);
  

  logger.info(`Master ${process.pid} is running`);
  for (let i = 0; i < numCPUs.cpus().length; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    logger.info(`worker ${worker.process.pid} died`);
  });
} else {
  app.listen(PORT, () => logger.info(`server running on port ${PORT}`));
  logger.info(`port: ${PORT}, mode: ${mode}`);
  logger.info(`Worker ${process.pid} started`);
}
