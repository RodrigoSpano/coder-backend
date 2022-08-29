//options para conectar DB

export const options = {
  client: 'sqlite3',
  connection: {
    filename: './database/myDB.mysqlite',
  },
  useNullAsDefault: true
}
