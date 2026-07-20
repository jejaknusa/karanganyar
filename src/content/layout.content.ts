import { t, type Dictionary } from "intlayer";

const layoutContent = {
  key: "layout",
  content: {
    navigation: {
      home: t({
        en: "Home",
        id: "Beranda",
      }),
      culture: t({
        en: "Culture",
        id: "Budaya",
      }),
      history: t({
        en: "History",
        id: "Sejarah",
      }),
      culinary: t({
        en: "Culinary",
        id: "Kuliner",
      }),
      tourism: t({
        en: "Tourism",
        id: "Wisata",
      }),
      modern: t({
        en: "Modern Potential",
        id: "Potensi Modern",
      }),
    },
    cta: t({
      id: "Atur liburan",
      en: "Plan a trip",
    }),
    section: {
      link: t({ en: "Link", id: "Tautan" }),
      contact: t({ id: "Kontak", en: "Contact" }),
      cta: {
        heading: t({
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in nulla dignissim.",
          id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in nulla dignissim.",
        }),
        description: t({
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus massa urna. Aenean at elit quam. Mauris vitae mauris ut leo convallis molestie eget",
          id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus massa urna. Aenean at elit quam. Mauris vitae mauris ut leo convallis molestie eget",
        }),
        cta: t({
          id: "Rencanakan Perjalanan",
          en: "Plan Trip",
        }),
      },
    },
    copyright: t({
      en: "All rights reserved.",
      id: "Hak cipta dilindungi undang undang",
    }),
    description: t({
      id: "Ruang digital yang merajut sejarah, budaya, dan potensi modern kota dalam satu narasi elegan. Jelajahi esensi kota Karanganyar, dari akar tradisi hingga inovasi masa depan, dalam satu genggaman.",
      en: "A digital space that weaves together the city’s history, culture, and modern potential into a single elegant narrative. Explore the essence of Karanganyar, from traditional roots to future innovations—all at your fingertips.",
    }),
  },
} satisfies Dictionary;

export default layoutContent;
