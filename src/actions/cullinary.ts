import { defineAction } from "astro:actions";
import {
  and,
  db,
  desc,
  Culinary,
  CulinaryTranslation,
  eq,
} from "astro:db";
import { z } from "astro/zod";
import type { Cullinary as CulinaryList } from "@/types/cullinary";
import { supabase } from "@/lib/supabase";
import type { LocalesValues } from "intlayer";

export const cullinary = {
  getAll: defineAction({
    input: z.object({
      locale: z.enum(["en", "id"]) as z.ZodType<LocalesValues>,
    }),
    handler: async ({ locale }) => {
      try {
        const cullinaries = await db
          .select()
          .from(Culinary)
          .innerJoin(
            CulinaryTranslation,
            and(
              eq(Culinary.id, CulinaryTranslation.culinaryId),
              eq(CulinaryTranslation.language, locale),
            ),
          );
        return cullinaries.map(({ Culinary, CulinaryTranslation }) => {
          const imgUrl = supabase.storage
            .from("Jejaknusa")
            .getPublicUrl(`karanganyar/${Culinary.image}`).data.publicUrl;
          return {
            id: Culinary.id,
            name: CulinaryTranslation.name,
            image: imgUrl,
            description: CulinaryTranslation.description,
            slug: Culinary.slug,
            content: CulinaryTranslation.content,
          } as unknown as CulinaryList;
        });
      } catch (error) {
        throw error;
      }
    },
  }),
  getFeatured: defineAction({
    input: z.object({
      locale: z.enum(["en", "id"]) as z.ZodType<LocalesValues>,
    }),
    handler: async ({ locale }) => {
      try {
        const cullinaries = await db
          .select()
          .from(Culinary)
          .innerJoin(
            CulinaryTranslation,
            and(
              eq(Culinary.id, CulinaryTranslation.culinaryId),
              eq(CulinaryTranslation.language, locale),
            ),
          )
          .limit(4);
        return cullinaries.map(({ Culinary, CulinaryTranslation }) => {
          const imgUrl = supabase.storage
            .from("Jejaknusa")
            .getPublicUrl(`karanganyar/${Culinary.image}`).data.publicUrl;
          return {
            id: Culinary.id,
            name: CulinaryTranslation.name,
            image: imgUrl,
            description: CulinaryTranslation.description,
            slug: Culinary.slug,
            content: CulinaryTranslation.content,
          } as unknown as CulinaryList;
        });
      } catch (error) {
        throw error;
      }
    },
  }),
  getCulinary: defineAction({
    input: z.object({
      locale: z.enum(["en", "id"]) as z.ZodType<LocalesValues>,
      slug: z.string(),
    }),
    handler: async ({ locale, slug }) => {
      try {
        const cullinary = await db
          .select()
          .from(Culinary)
          .where(eq(Culinary.slug, slug))
          .innerJoin(
            CulinaryTranslation,
            and(
              eq(Culinary.id, CulinaryTranslation.culinaryId),
              eq(CulinaryTranslation.language, locale),
            ),
          )
          .get();

        if (cullinary) {
          const { Culinary, CulinaryTranslation } = cullinary;
          const imgUrl = supabase.storage
            .from("Jejaknusa")
            .getPublicUrl(`karanganyar/${Culinary.image}`).data.publicUrl;

          return {
            id: Culinary.id,
            name: CulinaryTranslation.name,
            image: imgUrl,
            description: CulinaryTranslation.description,
            slug: Culinary.slug,
            content: CulinaryTranslation.content,
          } as unknown as CulinaryList;
        }
        return null;
      } catch (error) {
        throw error;
      }
    },
  }),
};
