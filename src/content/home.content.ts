import { t, type Dictionary } from "intlayer";

const homeContent = {
  key: "home",
  content: {
    hero: {
      heading: t({
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in nulla dignissim.",
        id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in nulla dignissim.",
      }),
      description: t({
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus massa urna. Aenean at elit quam. Mauris vitae mauris ut leo convallis molestie eget",
        id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus massa urna. Aenean at elit quam. Mauris vitae mauris ut leo convallis molestie eget",
      }),
      cta: t({
        id: "Rencanakan perjalanan",
        en: "Plan a trip",
      }),
    },
    general: {
      nickname: t({
        en: "bumi intanpari",
        id: "bumi intanpari",
      }),
      heading: t({
        en: "Lorem ipsum dolor sit amet, consectetur",
        id: "Lorem ipsum dolor sit amet, consectetur",
      }),
      description: t({
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus massa urna. Aenean at elit quam. Mauris vitae mauris ut leo convallis molestie eget",
        id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus massa urna. Aenean at elit quam. Mauris vitae mauris ut leo convallis molestie eget",
      }),
    },
    tourism: {
      heading: t({
        en: "Lorem ipsum dolor sit amet, consectetur",
        id: "Lorem ipsum dolor sit amet, consectetur",
      }),
      description: t({
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus massa urna. Aenean at elit quam. Mauris vitae mauris ut leo convallis molestie eget",
        id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus massa urna. Aenean at elit quam. Mauris vitae mauris ut leo convallis molestie eget",
      }),
      cta: {
        primary: t({
          id: "Rencanakan perjalanan",
          en: "Plan a trip",
        }),
        secondary: t({
          id: "Rencanakan perjalanan",
          en: "Plan a trip",
        }),
      },
    },
    culture: {
      heading: t({
        en: "Budaya",
        id: "Culture",
      }),
      description: t({
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus massa urna. Aenean at elit quam. Mauris vitae mauris ut leo convallis molestie eget",
        id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus massa urna. Aenean at elit quam. Mauris vitae mauris ut leo convallis molestie eget",
      }),
      cta: {
        primary: t({
          id: "Rencanakan perjalanan",
          en: "Plan a trip",
        }),
        description: t({
          en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus massa urna. Aenean at elit quam. Mauris vitae mauris ut leo convallis molestie eget",
          id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus massa urna. Aenean at elit quam. Mauris vitae mauris ut leo convallis molestie eget",
        }),
      },
    },
    modern: {
      heading: t({
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus massa urna. Aenean at elit quam. Mauris vitae mauris ut leo convallis molestie eget",
        id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus massa urna. Aenean at elit quam. Mauris vitae mauris ut leo convallis molestie eget",
      }),
    },
    cullinary: {
      heading: t({
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in nulla dignissim.",
        id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in nulla dignissim.",
      }),
      description: t({
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus massa urna. Aenean at elit quam. Mauris vitae mauris ut leo convallis molestie eget",
        id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus massa urna. Aenean at elit quam. Mauris vitae mauris ut leo convallis molestie eget",
      }),
      cta: t({
        id: "Baca Selengkapnya",
        en: "Discover More",
      }),
    },
  },
} satisfies Dictionary;

export default homeContent;
