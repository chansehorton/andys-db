'use strict'
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Person-Tags', (table) => {
    table.increments();
    table.integer('person-id').notNullable().references('id').inTable('Person');
    table.integer('tag-id').notNullable().references('id').inTable('Tag');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Person-Tags');
};
