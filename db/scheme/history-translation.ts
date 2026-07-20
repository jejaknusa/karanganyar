import { defineTable, column } from "astro:db";
import { History } from "./history";

export const HistoryTranslation = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    language: column.text(),
    event: column.text(),
    description: column.text(),
    historyId: column.number({ references: () => History.columns.id }),
  },
});
