import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { LocalesValues } from "intlayer";
import { type ReactNode } from "react";
import { IntlayerProvider } from "react-intlayer";

interface ReactWrapperProps {
  children: ReactNode;
  locale: LocalesValues;
  pathName: string;
}

export default function ReactWrapper({
  children,
  locale,
  pathName,
}: ReactWrapperProps) {
  return (
    <IntlayerProvider locale={locale}>
      <Navbar pathName={pathName} />
      {children}
      <Cta />
      <Footer />
    </IntlayerProvider>
  );
}
