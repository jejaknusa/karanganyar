import { t, type Dictionary } from 'intlayer';

const historyContent = {
  key: 'history',
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
    timeline: {
      heading: t({
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in nulla dignissim.",
        id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in nulla dignissim.",
      }),
      description: t({
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus massa urna. Aenean at elit quam. Mauris vitae mauris ut leo convallis molestie eget",
        id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus massa urna. Aenean at elit quam. Mauris vitae mauris ut leo convallis molestie eget",
      }),
    },
    artifact: {
      heading: t({
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in nulla dignissim.",
        id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in nulla dignissim.",
      }),
      description: t({
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus massa urna. Aenean at elit quam. Mauris vitae mauris ut leo convallis molestie eget",
        id: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus massa urna. Aenean at elit quam. Mauris vitae mauris ut leo convallis molestie eget",
      }),
    },
  },
} satisfies Dictionary;

export default historyContent;
