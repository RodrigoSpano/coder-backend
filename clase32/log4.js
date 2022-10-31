import log4 from 'log4js';

// log4js.configure({
//   appenders: {
//     miLoggerConsole: { type: 'console' },
//     miLoggerFile: { type: 'file', filename: 'info.log' },
//     miLoggerFile2: { type: 'file', filename: 'info2.log' },
//   },
//   categories: {
//     default: { appenders: ['miLoggerConsole'], level: 'trace' },
//     consola: { appenders: ['miLoggerConsole'], level: 'debug' },
//     archivo: { appenders: ['miLoggerFile'], level: 'warn' },
//     archivo2: { appenders: ['miLoggerFile2'], level: 'info' },
//     todos: { appenders: ['miLoggerConsole', 'miLoggerFile'], level: 'error' },
//   },
// });

log4.configure({
  appenders: {
    // defino dos soportes de salida de datos
    consola: { type: 'console' },
    archivo: { type: 'file', filename: 'errores.log' },
    // defino sus niveles de logueo
    loggerConsola: {
      type: 'logLevelFilter',
      appender: 'consola',
      level: 'info',
    },
    loggerArchivo: {
      type: 'logLevelFilter',
      appender: 'archivo',
      level: 'error',
    },
  },
  categories: {
    default: {
      appenders: ['loggerConsola'],
      level: 'all',
    },
    custom: {
      appenders: ['loggerConsola', 'loggerArchivo'],
      level: 'all',
    },
  },
});

export let logger = null;
if (process.env.NODE_ENV === 'production') {
  logger = log4.getLogger('prod');
} else {
  logger = log4.getLogger();
}
