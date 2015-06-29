
## Getting Started

```bash
# Install Dependencies
$ npm install

# Database (development)
$ createdb network_dev
$ knex migrate:latest

# Database (test)
$ createdb network_test
$ NODE_ENV=test knex migrate:latest

# Starting the Server
$ npm start
```

## Browserify

https://github.com/ForbesLindesay/browserify-middleware

## Database

```bash
# Rolling back one migration
$ knex migrate:rollback

# Rolling back one migration (test)
$ NODE_ENV=test knex migrate:rollback

# Reset Database (development)
$ dropdb network_dev
$ createdb network_dev
$ knex migrate:latest

# Reset Database (test)
$ dropdb network_test
$ createdb network_test
$ NODE_ENV=test knex migrate:latest
```

Further reading: http://knexjs.org/#Migrations-CLI
