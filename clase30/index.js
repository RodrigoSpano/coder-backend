import express from 'express';

const app = express();

const PORT = parseInt(process.argv[2]) || 8080;

app.listen('/datos', (req, res) => {
  res.send(`port: ${PORT} - PID: ${process.pid} - fyh: ${new Date()}`);
});

app.listen(PORT, () => console.log('running on', PORT));
