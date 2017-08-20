'use strict'
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Company', (table) => {
    table.increments();
    table.string('company-name');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Company');
};
