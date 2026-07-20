import { defineTable, column } from "astro:db";
import { City } from "./city";

export const History = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    year: column.number(),
    cityId: column.number({ references: () => City.columns.id }),
  },
});