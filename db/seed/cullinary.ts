import { db, Culinary, CulinaryTranslation } from "astro:db";

export async function seedCulture() {
  await db.insert(Culinary).values([
    {
      id: 1,
      cityId: 1,
      image: "cullinary/balung-kethek.webp",
      slug: "balung-kethek",
    },
    {
      id: 1,
      cityId: 1,
      image: "cullinary/sate-kelinci.webp",
      slug: "sate-kelinci",
    },
    {
      id: 1,
      cityId: 1,
      image: "cullinary/sate-landak.webp",
      slug: "sate-landak",
    },
    {
      id: 1,
      cityId: 1,
      image: "cullinary/seego-gudangan.webp",
      slug: "seego-gudangan",
    },
    {
      id: 1,
      cityId: 1,
      image: "cullinary/soto-karang.webp",
      slug: "soto-karang",
    },
    {
      id: 1,
      cityId: 1,
      image: "cullinary/tahu-kempong.webp",
      slug: "tahu-kempong",
    },
    {
      id: 1,
      cityId: 1,
      image: "cullinary/timus.webp",
      slug: "timus",
    },
  ]);

  await db.insert(CulinaryTranslation).values([
    {
      id: 1,
      content: "",
      culinaryId: 1,
      description: "",
      language: "",
      name: "",
    },
  ]);
}
