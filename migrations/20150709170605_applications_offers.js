exports.up = function(knex, Promise) {
  console.log('adding offers to applications table')

  return Promise.all([

    knex.schema.table('applications', function (table) {
      table.integer('intial_offer');
      table.integer('final_offer');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('applications', function (table) {
      table.dropColumn('intial_offer');
      table.dropColumn('final_offer');
    })
  ])
};
