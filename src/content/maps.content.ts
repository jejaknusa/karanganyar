import { t, type Dictionary } from "intlayer";

const mapsContent = {
  key: "maps",
  content: {
    title: t({
      en: "Maps",
      id: "Peta",
    }),
    description: t({
      en: "Explore karanganyar with interactive maps",
      id: "Jelajahi karanganyar dengan peta interaktif",
    }),
    list: {
      liked: t({
        en: "Liked place",
        id: "Tempat disukai",
      }),
      all: t({
        id: "Semua tujuan",
        en: "All destination",
      }),
    },
    detail: {
      cta: t({
        id: "Buka di Gmaps",
        en: "Open in Gmaps",
      }),
      close: t({
        id: "Tutup",
        en: "Close",
      }),
    },
    tool: {
      list: t({
        id: "Daftar tujuan",
        en: "List destination",
      }),
      back: t({
        en: "Back to home",
        id: "Kembali ke beranda",
      }),
    },
  },
} satisfies Dictionary;

export default mapsContent;
