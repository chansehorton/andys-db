// Update with your config settings.
'use strict'

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/andydb_dev',
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/andydb_test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/app/migrations'
    },
    seeds: {
      directory: __dirname + '/app/seeds'
    }
  }
};
