export async function up(knex) {
    return knex.schema.createTable('tags', table => {
      table.increments('id').primary();
      table.string('name').notNullable().unique();
    });
  }
  
  export async function down(knex) {
    return knex.schema.dropTable('tags');
  }
  