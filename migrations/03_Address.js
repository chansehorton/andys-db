'use strict'
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Address', (table) => {
    table.increments();
    table.integer('person-id').references('id').inTable('Person');
    table.integer('company-id').references('id').inTable('Company');
    table.string('address-line-1');
    table.string('address-line-2');
    table.string('city');
    table.string('county');
    table.string('state');
    table.string('zip-code');
    table.string('country');
    table.string('federal-district');
    table.string('state-upper-district');
    table.string('state-lower-district');
    table.string('county-district');
    table.string('city-district');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Address');
};
