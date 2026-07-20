import { Languages } from "lucide-react";
import Button from "./Button";
import { useState, type ReactNode } from "react";
import { useLocale } from "react-intlayer";
import { getLocaleName, getLocalizedUrl, type LocalesValues } from "intlayer";
import { cn } from "@/lib/utils";

interface SwitchLocaleProps {
  children: ReactNode;
}

export default function SwitchLocale({ children }: SwitchLocaleProps) {
  const [open, setOpen] = useState(false);
  const { locale, availableLocales, setLocale } = useLocale({
    onLocaleChange: (locale: LocalesValues) => {
      window.location.href = getLocalizedUrl(
        window.location.pathname,
        locale,
      );
    },
  });

  function handleDropdown() {
    setOpen(!open);
  }

  return (
    <div className="relative">
      <Button variant="ghost" onClick={handleDropdown}>
        {children}
      </Button>
      <div
        className={cn(
          "absolute flex-col p-2 gap-2 bg-primary rounded-lg mt-4 transition-all duration-300 right-0 z-20",
          open ? "flex" : "hidden",
        )}
      >
        {availableLocales.map((item, i) => (
          <button
            onClick={() => setLocale(item)}
            key={i}
            className={cn(
              "p-2 flex gap-4 items-center justify-between cursor-pointer hover:bg-secondary/5 rounded text-secondary",
              locale == item && "bg-accent/5",
            )}
          >
            {getLocaleName(item, locale)}{" "}
            <small className="glass">{item.toUpperCase()}</small>
          </button>
        ))}
      </div>
    </div>
  );
}
