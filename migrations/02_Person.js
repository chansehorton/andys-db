'use strict'
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Person', (table) => {
    table.increments();
    table.string('first-name').notNullable();
    table.string('middle-name');
    table.string('last-name').notNullable();
    table.string('suffix');
    table.string('email');
    table.string('occupation');
    table.integer('company-id')
      .notNullable()
      .references('id')
      .inTable('Company');
    table.string('marital-status');
    table.string('sex');
    table.string('demo');
    table.string('ethnicity');
    table.string('language');
    table.string('religion');
    table.string('church');
    table.string('party');
    table.string('note', 512);
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Person');
};
