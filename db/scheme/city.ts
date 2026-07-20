import { column, defineTable } from "astro:db";

export const City = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    name: column.text(),
    slug: column.text(),
  },
});
