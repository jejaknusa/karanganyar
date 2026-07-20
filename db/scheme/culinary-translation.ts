import { defineTable, column } from "astro:db";
import { Culinary } from "./culinary";

export const CulinaryTranslation = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    language: column.text(),
    name: column.text(),
    description: column.text(),
    content: column.text(),
    culinaryId: column.number({ references: () => Culinary.columns.id }),
  },
  indexes: [{ on: ["culinaryId"] }],
});
