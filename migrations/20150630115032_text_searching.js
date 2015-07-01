
exports.up = function(knex, Promise) {
	console.log('creating extension')

	return Promise.all([knex.schema.raw('CREATE EXTENSION pg_trgm;')]);

};

exports.down = function(knex, Promise) {
  
};
