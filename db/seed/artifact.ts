import { db, Artifact, ArtifactTranslation } from "astro:db";

export async function seedCulture() {
  await db.insert(Artifact).values([
    {
      id: 1,
      image: "",
      location: "",
      slug: "",
      cityId: 1,
    },
  ]);

  await db.insert(ArtifactTranslation).values([
    {
      id: 1,
      artifactId: 1,
      description: "",
      language: "",
      content: "",
      name: "",
    },
  ]);
}
