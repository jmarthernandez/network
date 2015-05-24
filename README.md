
## Getting Started

```bash
# Dependencies
$ npm install

# Database
$ createdb learn
$ knex migrate:latest

# Starting the Server
$ export MAKERPASS_CLIENT_ID=eae6795ed5d6fe1fb29497641a083edb2c4fe242a233fc98138f7224177581e9
$ export MAKERPASS_CLIENT_SECRET=c92309a053636df7b24e1672ce6190ef9c76bca9e5aebf1cb8847e70607b534f
$ npm run-script watch
```

## Browserify

https://github.com/ForbesLindesay/browserify-middleware

## Database

```bash
# Rolling back one migration
$ knex migrate:rollback

# Resetting the Database
$ npm run-script resetdb
```

Further reading: http://knexjs.org/#Migrations-CLI
