import Kenx from "knex";

export async function up(kenx: Kenx) {
  return kenx.schema.createTable("items", (table) => {
    table.increments("id").primary();
    table.string("image").notNullable();
    table.string("title").notNullable();
  });
}

export async function down(kenx: Kenx) {
  return kenx.schema.dropTable("items");
}
