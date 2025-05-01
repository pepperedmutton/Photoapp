export async function up(knex) {
    return knex.schema.createTable('photos_tags', table => {
        table.integer('photo_id').unsigned().references('id').inTable('photos').onDelete('CASCADE');
        table.integer('tag_id').unsigned().references('id').inTable('tags').onDelete('CASCADE');
        table.primary(['photo_id', 'tag_id']);
    });
  }
  
  export async function down(knex) {
    return knex.schema.dropTable('photos_tags');
  }
  