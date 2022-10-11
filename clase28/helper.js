const calculo = (cant) => {
  let suma = [];
  for (let i = 0; i < cant; i++) {
    suma.push(Math.floor(Math.random() * 999));
  }
  return suma;
};

process.on('message', (cant) => {
  process.send(calculo(cant));
});
