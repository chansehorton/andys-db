'use strict'
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Issue', (table) => {
    table.increments();
    table.string('issue-name').notNullable();
    table.string('issue-description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Issue');
};
