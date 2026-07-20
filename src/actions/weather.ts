import type { OpenWeatherResponse } from "@/types/weather";
import { z } from "astro/zod";
import { defineAction } from "astro:actions";
import type { LocalesValues } from "intlayer";

export const weather = {
  current: defineAction({
    input: z.object({
      lang: z.enum(["en", "id"]) as z.ZodType<LocalesValues>,
    }),
    handler: async ({ lang }) => {
      try {
        const params = new URLSearchParams({
          lat: "-7.6590167",
          lon: "111.0388382",
          appid: import.meta.env.OWM_API_KEY,
          units: "metric",
          lang,
        });

        const currentWeather = await fetch(
          `${import.meta.env.OWM_API_HOST}/data/2.5/weather?${params.toString()}`,
          { method: "GET" },
        );

        if (!currentWeather.ok)
          throw new Error("Failed to fetch current weather data");

        const data = (await currentWeather.json()) as OpenWeatherResponse;

        return {
          main: data.weather[0].main,
          temperature: data.main.temp,
          description: data.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        };
      } catch (error) {
        throw error;
      }
    },
  }),
};
