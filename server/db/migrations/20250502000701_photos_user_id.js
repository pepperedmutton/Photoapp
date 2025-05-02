export async function up(knex) {
    return knex.schema.alterTable('photos', table => {
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
    });
  }
  
  export async function down(knex) {
    return knex.schema.dropColumn('photos_tags');
  }
  