export async function up(knex) {
    return knex.schema.alterTable('users', table => {
        table.string('token');
    });
  }
  
  export async function down(knex) {
    return knex.schema.dropColumn('token');
  }
  