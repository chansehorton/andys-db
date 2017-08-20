'use strict'
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Person-Issues', (table) => {
    table.increments();
    table.integer('person-id').notNullable().references('id').inTable('Person');
    table.integer('issue-id').notNullable().references('id').inTable('Issue');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Person-Issues');
};
