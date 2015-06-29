
exports.up = function(knex, Promise) {
  console.log('adding rename interview_type migration')
  return Promise.all([

    knex.schema.table('interviews', function (table) {
      table.renameColumn('interview_type', 'type');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([

    knex.schema.table('interviews', function (table) {
      table.renameColumn('type', 'interview_type');
    })
  ])
};
