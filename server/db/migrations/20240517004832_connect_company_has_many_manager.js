/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.alterTable('managers', (table) => {
    table.integer('companie_id').unsigned();
    table
        .foreign('companie_id')
        .references(`companies.id`);
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.alterTable('managers', (table) => {
    table.dropColumn('companie_id');
});
