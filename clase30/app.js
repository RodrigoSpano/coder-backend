import express from 'express';

const app = express();

const port = procces.argv[2] || 8080;

app.get('/datos', (req, res) => {
  res.send(`port: ${port}, pid: ${process.pid}`);
});

app.listen(port, () => console.log('running', port));
