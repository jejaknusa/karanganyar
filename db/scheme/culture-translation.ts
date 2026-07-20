import { defineTable, column } from "astro:db";
import { Culture } from "./culture";

export const CultureTranslation = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    language: column.text(),
    name: column.text(),
    description: column.text(),
    content: column.text(),
    cultureId: column.number({ references: () => Culture.columns.id }),
  },
  indexes: [{ on: ["cultureId"]}],
});
