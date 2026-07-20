import { useIntlayer } from "react-intlayer";
import Button from "./ui/Button";
import { ChevronRight } from "lucide-react";

export default function Cta() {
  const { section } = useIntlayer("layout");
  return (
    <section className="flex gap-8 md:gap-16 lg:gap-24 xl:gap-36 items-center lg:flex-row flex-col">
      <div className="flex flex-col gap-4">
        <h2>{section.cta.heading}</h2>
        <p>{section.cta.description}</p>
        <Button variant="accent" className="w-fit">
          {section.cta.cta} <ChevronRight className="ml-2" />
        </Button>
      </div>
      <div className="aspect-square bg-primary w-full lg:w-170 rounded-2xl"></div>
    </section>
  );
}
