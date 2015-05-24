
exports.up = function(knex, Promise) {

  return Promise.all([
    knex.schema.createTable('users', function (table) {

      table.string('uid').primary()
      table.string('name')
      table.string('email')
      table.string('avatarUrl')

      table.timestamps()
    }),

    knex.schema.createTable('groups', function (table) {

      table.string('uid').primary()
      table.string('name')
      table.string('role')

      table.timestamps()
    }),

    knex.schema.createTable('memberships', function (table) {

      table.string('uid').primary()
      table.string('userUid').references('uid').inTable('users')
      table.string('groupUid').references('uid').inTable('groups')
      table.string('role')

      table.timestamps()
    })
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('memberships'),
    knex.schema.dropTable('groups'),
    knex.schema.dropTable('users')
  ])
}
