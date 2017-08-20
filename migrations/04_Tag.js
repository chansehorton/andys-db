'use strict'
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Tag', (table) => {
    table.increments();
    table.string('tag-name').notNullable();
    table.string('tag-description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('Tag');
};
