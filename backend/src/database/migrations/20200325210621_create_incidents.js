
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function(table) {
    table.increments();/*chave primária em auto incremento*/

    table.string('title').notNullable(); /*notNullable significa não vazio*/
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    table.string('ong_id').notNullable();

    table.foreign('ong_id').references('id').inTable('ongs');
  });
};

exports.down = function(knex) { /*aqui é pra caso dê alguma merda, ent exclui a tabela*/
  return knex.schema.dropTable('incidents');
};
