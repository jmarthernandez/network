
# Reset test db
dropdb learn_test
createdb learn_test
NODE_ENV=test ./node_modules/.bin/knex migrate:latest

# Run tests
./node_modules/.bin/mocha --recursive -r test_helper.js
