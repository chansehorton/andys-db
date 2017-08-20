'use strict'
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Phone-Number', (table) => {
    table.increments();
    table.string('number').notNullable();
    table.string('type');
    table.integer('person-id').references('id').inTable('Person');
    table.integer('company-id').references('id').inTable('Company');
  })
};  

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Phone-Number');
};
