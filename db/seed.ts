import { db } from "astro:db";
import { seedCity } from "./seed/city";
import { seedDestination } from "./seed/destination";

// https://astro.build/db/seed
export default async function seed() {
  await seedCity();
  await seedDestination();
}

