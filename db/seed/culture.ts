import { db, Culture, CultureTranslation } from "astro:db";

export async function seedCulture() {
  await db.insert(Culture).values([
    {
      id: 1,
      cityId: 1,
      image: "culture/dhukutan.webp",
      slug: "dhukutan",
    },
    {
      id: 2,
      cityId: 1,
      image: "culture/batik.webp",
      slug: "batik",
    },
    {
      id: 3,
      cityId: 1,
      image: "culture/mondosiyo.webp",
      slug: "mondosiyo",
    },
    {
      id: 4,
      cityId: 1,
      image: "culture/tari-jaran-gedrug.webp",
      slug: "tari-jaran-gedrug",
    },
    {
      id:5,
      cityId: 1,
      image: "culture/tari-kencar-kencar.webp",
      slug: "tari-kencar-kencar",
    },
    {
      id:5,
      cityId: 1,
      image: "culture/tari-varia-nusantara.webp",
      slug: "tari-varia-nusantara",
    },
  ]);

  await db.insert(CultureTranslation).values([
    {
      id: 1,
      cultureId: 1,
      content: "",
      description: "",
      language: "id",
      name: "Dhukutan",
    },
    {
      id: 2,
      cultureId: 1,
      content: "",
      description: "",
      language: "en",
      name: "Dhukutan",
    },
  ]);
}
