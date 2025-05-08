export async function up(knex) {
    await knex.schema.alterTable('users', table => {
        table.dropColumn('token');
      })
    }      
  
export async function down(knex) {
    return knex.schema.alterTable('users',table => {
        table.text('token');
    })
    }
  