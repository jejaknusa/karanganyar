import { defineAction } from "astro:actions";
import {
  and,
  db,
  desc,
  Culture,
  CultureTranslation,
  eq,
} from "astro:db";
import { z } from "astro/zod";
import type { Cullinary as CultureList } from "@/types/cullinary";
import { supabase } from "@/lib/supabase";
import type { LocalesValues } from "intlayer";

export const culture = {
  getAll: defineAction({
    input: z.object({
      locale: z.enum(["en", "id"]) as z.ZodType<LocalesValues>,
    }),
    handler: async ({ locale }) => {
      try {
        const cultures = await db
          .select()
          .from(Culture)
          .innerJoin(
            CultureTranslation,
            and(
              eq(Culture.id, CultureTranslation.cultureId),
              eq(CultureTranslation.language, locale),
            ),
          );
        return cultures.map(({ Culture, CultureTranslation }) => {
          const imgUrl = supabase.storage
            .from("Jejaknusa")
            .getPublicUrl(`karanganyar/${Culture.image}`).data.publicUrl;
          return {
            id: Culture.id,
            name: CultureTranslation.name,
            image: imgUrl,
            description: CultureTranslation.description,
            slug: Culture.slug,
            content: CultureTranslation.content,
          } as unknown as CultureList;
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
        const cultures = await db
          .select()
          .from(Culture)
          .innerJoin(
            CultureTranslation,
            and(
              eq(Culture.id, CultureTranslation.cultureId),
              eq(CultureTranslation.language, locale),
            ),
          )
          .limit(4);
        return cultures.map(({ Culture, CultureTranslation }) => {
          const imgUrl = supabase.storage
            .from("Jejaknusa")
            .getPublicUrl(`karanganyar/${Culture.image}`).data.publicUrl;
          return {
            id: Culture.id,
            name: CultureTranslation.name,
            image: imgUrl,
            description: CultureTranslation.description,
            slug: Culture.slug,
            content: CultureTranslation.content,
          } as unknown as CultureList;
        });
      } catch (error) {
        throw error;
      }
    },
  }),
  getCulture: defineAction({
    input: z.object({
      locale: z.enum(["en", "id"]) as z.ZodType<LocalesValues>,
      slug: z.string(),
    }),
    handler: async ({ locale, slug }) => {
      try {
        const cullinary = await db
          .select()
          .from(Culture)
          .where(eq(Culture.slug, slug))
          .innerJoin(
            CultureTranslation,
            and(
              eq(Culture.id, CultureTranslation.cultureId),
              eq(CultureTranslation.language, locale),
            ),
          )
          .get();

        if (cullinary) {
          const { Culture, CultureTranslation } = cullinary;
          const imgUrl = supabase.storage
            .from("Jejaknusa")
            .getPublicUrl(`karanganyar/${Culture.image}`).data.publicUrl;

          return {
            id: Culture.id,
            name: CultureTranslation.name,
            image: imgUrl,
            description: CultureTranslation.description,
            slug: Culture.slug,
            content: CultureTranslation.content,
          } as unknown as CultureList;
        }
        return null;
      } catch (error) {
        throw error;
      }
    },
  }),
};
