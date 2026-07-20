interface NavbarProps {
  pathName: string;
}

import { ChevronRight, Languages, Menu } from "lucide-react";
import Button from "./ui/Button";
import { useIntlayer } from "react-intlayer";
import { useEffect, useState } from "react";
import { Link } from "./ui/Link";
import SwitchLocale from "./ui/SwitchLocale";
import { cn } from "@/lib/utils";

export default function Navbar({ pathName }: NavbarProps) {
  const { navigation: links, cta } = useIntlayer("layout");
  const [open, setOpen] = useState(false);
  const navigation = [
    { label: links.home, href: "/" },
    { label: links.history, href: "/sejarah" },
    { label: links.culture, href: "/budaya" },
    { label: links.culinary, href: "/kuliner" },
    { label: links.tourism, href: "/pariwisata" },
    { label: links.modern, href: "/potensi-modern" },
  ];

  const [navTextDark, setNavTextDark] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const hasDarkBg = entry.target.classList.contains("bg-primary");
            setNavTextDark(!hasDarkBg);
          }
        });
      },
      {
        rootMargin: "-50px 0px -90% 0px",
      },
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="relative w-full h-fit flex flex-col">
      <div
        className={`fixed top-0 left-0 w-full wrapper-x py-6 z-10 ${navTextDark ? "text-primary" : "text-secondary"}`}
      >
        <div className="glass py-6 px-8 sm:px-14 rounded-full flex items-center justify-between">
          <h4>Kra.</h4>
          <div className="gap-6 hidden xl:flex">
            {navigation.map((item, i) => (
              <Link
                key={i}
                className={`font-medium ${pathName.includes(item.href) ? "opacity-100" : "opacity-70"}`}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-2 xl:gap-4 items-center">
            <SwitchLocale>
              <Languages
                className={`${navTextDark ? "text-primary" : "text-secondary"}`}
              />
            </SwitchLocale>
            <Button className="shrink-0 hidden xl:flex">
              {cta} <ChevronRight className="ml-2" />
            </Button>
            <Button
              onClick={() => setOpen(!open)}
              variant="ghost"
              className="xl:hidden block"
            >
              <Menu
                className={`${navTextDark ? "text-primary" : "text-secondary"}`}
              />
            </Button>
          </div>
        </div>
        <div
          className={cn(
            "wrapper-x absolute w-full mt-4 left-0 py-6 -z-1",
            open ? "block" : "hidden",
          )}
        >
          <div className="flex gap-4 flex-col bg-primary text-secondary rounded-2xl p-8 z-1">
            {navigation.map((item, i) => (
              <Link
                key={i}
                className={cn(
                  "font-medium rounded-xl p-4 text-center text-2xl",
                  pathName.includes(item.href)
                    ? "opacity-100 bg-accent/5"
                    : "opacity-70",
                  "hover:bg-secondary/5",
                )}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
