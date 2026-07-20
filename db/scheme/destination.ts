import { defineTable, column } from "astro:db";
import { City } from "./city";

export const Destination = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    slug: column.text(),
    location: column.text(),
    image: column.text(),
    gmap: column.text(),
    rating: column.number(),
    cityId: column.number({ references: () => City.columns.id }),
    latitude: column.number(),
    longitude: column.number(),
  },
  indexes: [{ on: ["slug"], unique: true }],
});
