import { defineTable, column } from "astro:db";
import { Artifact } from "./artifact";

export const ArtifactTranslation = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    language: column.text(),
    name: column.text(),
    description: column.text(),
    content: column.text(),
    artifactId: column.number({ references: () => Artifact.columns.id }),
  },
  indexes: [{ on: ["artifactId"] }],
});
