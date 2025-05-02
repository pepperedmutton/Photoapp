export async function up(knex) {
    return knex.schema.createTable('users', table => {
      table.increments('id').primary();
      table.string('email').notNullable().unique();
      table.string('password').notNullable(); // hashed password
      table.string('name');
      table.string('token');
      table.timestamps(true, true); // created_at, updated_at
    });
  }
  
  export async function down(knex) {
    return knex.schema.dropTable('users');
  }
  