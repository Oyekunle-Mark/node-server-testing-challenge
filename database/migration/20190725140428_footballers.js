exports.up = knex =>
  knex.schema.createTable('footballers', tbl => {
    tbl.increments();
    tbl.string('name', 100).notNullable();
    tbl.string('position', 50).notNullable();
  });

exports.down = knex => knex.schema.dropTableIfExists('footballers');
