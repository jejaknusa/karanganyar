import { intlayer } from "astro-intlayer";
// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";
import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "http://localhost:4321",
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Instrument Serif",
      cssVariable: "--font-instrument-serif",
      weights: [400],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Geist",
      cssVariable: "--font-geist",
      weights: [400, 500, 600, 700],
    },
  ],

  vite: {
    plugins: [tailwindcss()],

    optimizeDeps: {
      include: ["astro-leaflet > leaflet"],
    },
  },

  integrations: [react(), intlayer(), db()],
  adapter: cloudflare(),
});
