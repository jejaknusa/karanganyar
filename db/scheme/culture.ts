import { defineTable, column } from "astro:db";
import { City } from "./city";

export const Culture = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    image: column.text(),
    cityId: column.number({ references: () => City.columns.id }),
    slug: column.text(),
  },
  indexes: [{ on: ["slug"], unique: true }],
});
