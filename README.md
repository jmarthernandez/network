# Network

## Team

  - __Product Owner__: Dan Corman
  - __Scrum Master__: Justin Hernandez
  - __Development Team Members__: Robert Snodgrass and Steven Braunstein

Network

An application that enables and streamlines the job search process between an individual and an assisting recruiter. Utilizes the [Mithril](http://mithril.js.org/) Front End framework to create a centralized application for users to create and maintain job applications. Users can update the status of each application while maintaining the organization and detail of each relevant interview or event.

The recruiter is able to identify individual applications and visualize the big picture with representative graphs. With built in chat, active database querying and a clean responsive design, Network is sure to provide a positive and beneficial experience.

This application utilizes [PostgreSQL](http://www.postgresql.org/), [Node.js](http://www.nodejs.org/), [Express](http://expressjs.com/), [Knex](http://knexjs.org/), [Mithril.js](http://mithril.js.org/), and [Materialize](http://materializecss.com/).
## License
(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.




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
