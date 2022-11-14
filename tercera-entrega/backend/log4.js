import log4 from 'log4js'

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
