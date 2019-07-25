module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/footballer.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migration',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './database/test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migration',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
};
