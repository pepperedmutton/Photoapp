/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    return knex.schema.dropTable("photos").createTable('photos', (table) => {
        table.increments('id');
        table.string('filename');
        table.string('camera_make');
        table.string('camera_model');
        table.float('focal_length');
        table.integer('iso');
        table.float('aperture');
        table.string('exposure_time');
        table.boolean('flash');
        table.float('gps_latitude');
        table.float('gps_longitude');
        table.timestamp('taken_at');
        table.timestamps(true, true); // created_at, updated_at
      });
    };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    return knex.schema.dropTable('photos');
};
