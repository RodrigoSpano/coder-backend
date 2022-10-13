import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  const entrada = process.argv.slice(2);
  const SO = process.platform; // SO
  const version = process.version; // NODE VERSION
  const memory = process.memoryUsage(); //memoria
  const execPath = process.execPath; // path de exec
  const proyectPath = process.cwd(); // path del proyecto
  const proccessId = process.pid; // process id

  const arr = [entrada, SO, version, memory, execPath, proyectPath, proccessId];

  res.status(200).json({ arr });
});

export default router;
