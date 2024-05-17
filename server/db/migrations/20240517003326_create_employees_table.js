/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('employees', (table) => {
        table.increments();
        table.string('username').notNullable().unique();
        table.string('password_hash').notNullable();
        table.string('firstName').notNullable();
        table.string('lastName').notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('employees');
