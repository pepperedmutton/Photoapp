/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    return knex.schema.createTable('photos', function(table) {
        table.increments('id').primary();       // auto-incrementing ID
        table.string('camera').notNullable().unique();
        table.string('lens').notNullable();
        table.timestamps(true, true); // created_at and updated_at
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    return knex.schema.dropTable('photos');
};
