/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('employees', (table) => {
        table.increments();
        table.string('username').notNullable().unique();
        table.string('password_hash').notNullable();
        table.string('firstname').notNullable();
        table.string('lastname').notNullable();
        table.boolean('ismanager').notNullable();
        table.string('imageurl').notNullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('employees');
