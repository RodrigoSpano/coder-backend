import { fork } from 'child_process';

export const getCant = (req, res) => {
  try {
    const { cant } = req.params;
    let cantidad = cant;
    const helper = fork('./helper.js');
    helper.send(cantidad);
    helper.on('message', (mensaje) => {
      console.log(mensaje);
      res.json({ mensaje });
    });
  } catch (err) {
    console.log(err);
  }
};

export const getCantDef = (req, res) => {
  try {
    let cantidad = 100000000;
    const helper = fork('./helper.js');
    helper.send(cantidad);
    helper.on('message', (mensaje) => {
      console.log(mensaje);
      res.json({ mensaje });
    });
  } catch (err) {
    console.log(err);
  }
};
