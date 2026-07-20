import { defineTable, column } from "astro:db";
import { City } from "./city";

export const Artifact = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    slug: column.text(),
    image: column.text(),
    location: column.text(),
    cityId: column.number({ references: () => City.columns.id }),
  },
  indexes: [{ on: ["slug"], unique: true }],
});
