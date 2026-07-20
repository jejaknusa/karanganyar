import { defineTable, column } from "astro:db";
import { Destination } from "./destination";

export const DestinationTranslation = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    language: column.text(),
    name: column.text(),
    description: column.text(),
    content: column.text(),
    destinationId: column.number({ references: () => Destination.columns.id }),
  },
  indexes: [{ on: ["destinationId"] }],
});
