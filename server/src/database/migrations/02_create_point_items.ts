import Kenx from "knex";

export async function up(kenx: Kenx) {
  return kenx.schema.createTable("point_items", (table) => {
    table.increments("id").primary();
    table.integer("point_id").notNullable().references("id").inTable("points");
    table.integer("item_id").notNullable().references("id").inTable("items");
  });
}

export async function down(kenx: Kenx) {
  return kenx.schema.dropTable("point_items");
}
