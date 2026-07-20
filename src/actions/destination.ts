import { defineAction } from "astro:actions";
import {
  and,
  db,
  desc,
  Destination,
  DestinationTranslation,
  eq,
} from "astro:db";
import { z } from "astro/zod";
import type { Destination as DestinationList } from "@/types/destination";
import { supabase } from "@/lib/supabase";
import type { LocalesValues } from "intlayer";

export const destination = {
  getAll: defineAction({
    input: z.object({
      locale: z.enum(["en", "id"]) as z.ZodType<LocalesValues>,
    }),
    handler: async ({ locale }) => {
      try {
        const destinations = await db
          .select()
          .from(Destination)
          .innerJoin(
            DestinationTranslation,
            and(
              eq(Destination.id, DestinationTranslation.destinationId),
              eq(DestinationTranslation.language, locale),
            ),
          );
        return destinations.map(({ Destination, DestinationTranslation }) => {
          const imgUrl = supabase.storage
            .from("Jejaknusa")
            .getPublicUrl(`karanganyar/${Destination.image}`).data.publicUrl;
          return {
            id: Destination.id,
            name: DestinationTranslation.name,
            location: Destination.location,
            image: imgUrl,
            gmap: Destination.gmap,
            rating: Destination.rating,
            latitude: Destination.latitude,
            longitude: Destination.longitude,
            description: DestinationTranslation.description,
            slug: Destination.slug,
            content: DestinationTranslation.content,
          } as unknown as DestinationList;
        });
      } catch (error) {
        throw error;
      }
    },
  }),
  getFeatured: defineAction({
    input: z.object({
      locale: z.enum(["en", "id"]) as z.ZodType<LocalesValues>,
      limit: z.number().optional().default(4),
    }),
    handler: async ({ locale, limit }) => {
      try {
        const destinations = await db
          .select()
          .from(Destination)
          .innerJoin(
            DestinationTranslation,
            and(
              eq(Destination.id, DestinationTranslation.destinationId),
              eq(DestinationTranslation.language, locale),
            ),
          )
          .orderBy(desc(Destination.rating))
          .limit(limit);
        return destinations.map(({ Destination, DestinationTranslation }) => {
          const imgUrl = supabase.storage
            .from("Jejaknusa")
            .getPublicUrl(`karanganyar/${Destination.image}`).data.publicUrl;
          return {
            id: Destination.id,
            name: DestinationTranslation.name,
            location: Destination.location,
            image: imgUrl,
            gmap: Destination.gmap,
            rating: Destination.rating,
            latitude: Destination.latitude,
            longitude: Destination.longitude,
            description: DestinationTranslation.description,
            slug: Destination.slug,
            content: DestinationTranslation.content,
          } as unknown as DestinationList;
        });
      } catch (error) {
        throw error;
      }
    },
  }),
  getDestination: defineAction({
    input: z.object({
      locale: z.enum(["en", "id"]) as z.ZodType<LocalesValues>,
      slug: z.string(),
    }),
    handler: async ({ locale, slug }) => {
      try {
        const destination = await db
          .select()
          .from(Destination)
          .where(eq(Destination.slug, slug))
          .innerJoin(
            DestinationTranslation,
            and(
              eq(Destination.id, DestinationTranslation.destinationId),
              eq(DestinationTranslation.language, locale),
            ),
          )
          .orderBy(desc(Destination.rating))
          .get();

        if (destination) {
          const { Destination, DestinationTranslation } = destination;
          const imgUrl = supabase.storage
            .from("Jejaknusa")
            .getPublicUrl(`karanganyar/${Destination.image}`).data.publicUrl;

          return {
            id: Destination.id,
            name: DestinationTranslation.name,
            location: Destination.location,
            image: imgUrl,
            gmap: Destination.gmap,
            rating: Destination.rating,
            latitude: Destination.latitude,
            longitude: Destination.longitude,
            description: DestinationTranslation.description,
            slug: Destination.slug,
            content: DestinationTranslation.content,
          } as unknown as DestinationList;
        }
        return null;
      } catch (error) {
        throw error;
      }
    },
  }),
};
