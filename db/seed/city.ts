import { db, City } from "astro:db";

export async function seedCity() {
  return await db.insert(City).values([
    {
      name: "Karanganyar",
      slug: "karanganyar",
    },
  ]);
}
