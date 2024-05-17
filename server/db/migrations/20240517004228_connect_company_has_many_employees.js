/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.alterTable('employees', (table) => {
    table.integer('companie_id').unsigned();
    table
        .foreign('companie_id')
        .references(`companies.id`);
    table.integer('manager_id').unsigned();
    table
        .foreign('manager_id')
        .references('managers.id');
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.alterTable('employees', (table) => {
    table.dropColumn('companie_id');
    table.dropColumn('manager_id');
});
