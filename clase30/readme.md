## index.js - aca esta nativo

- node o nodemon index.js => se corre en el puerto 8080 en modo fork, si quiere cambiar de puerto y modo basta con escribirlos, 4040 cluster
- forever start index.js
- forever list
- forever stop 0

## app.js - aca esta con pm2

- pm2 start app.js --name="server" --watch -- 8081
- pm2 start app.js --name="server2" --watch -i max -- 8082
- pm2 list
- pm2 monitor
- pm2 server || server2 stop - para detener los procesos

## index.js - aca esta con nginx

- node index.js 8081 cluster
- node index.js => para modo fork en 8080
