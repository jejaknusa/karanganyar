import { getLocalizedUrl } from "intlayer";
import { useIntlayer } from "react-intlayer";
import { Link } from "./ui/Link";

export default function Footer() {
  const {
    navigation: links,
    section,
    copyright,
    description,
  } = useIntlayer("layout");

  const navigation = [
    { label: links.home, href: "/" },
    { label: links.history, href: "/history" },
    { label: links.culture, href: "/budaya" },
    { label: links.culinary, href: "/kuliner" },
    { label: links.tourism, href: "/pariwisata" },
    { label: links.modern, href: "/potensi-modern" },
  ];
  return (
    <footer className="wrapper-x py-12 bg-primary text-secondary flex flex-col gap-12">
      <div className="flex justify-between md:flex-row flex-col gap-6 md:gap-12">
        <div className="flex flex-col gap-3 md:max-w-sm">
          <h4>Karanganyar</h4>
          <p>{description}</p>
        </div>
        <div className="grid grid-cols-6 gap-3">
          <h4 className="col-span-6">{section.link}</h4>
          {navigation.map((item, i) => (
            <Link
              key={i}
              className="font-medium col-span-2 md:col-span-6 first:col-start-1 line-clamp-1"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <h4>{section.contact}</h4>
          <a href="mailto:hello@jejaknusa.id">hello@jejaknusa.id</a>
        </div>
      </div>
      <div>
        <p>&copy; 2026 jejaknusa.id, {copyright}</p>
      </div>
    </footer>
  );
}
