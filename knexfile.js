
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: 'ec2-23-23-188-252.compute-1.amazonaws.com',
      database: 'd7dub96b5jqr4l'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'postgresql',
    connection: 'postgres://yuofkehmpkcdbk:D15Qec1JRfhWn_vE7-CIbsbo28@ec2-54-83-43-118.compute-1.amazonaws.com:5432/d8h2gnum0his57',
    pool: {
      min: 2,
      max: 10
    },
      migrations: {
      tableName: 'knex_migrations'
    }
  }

};
