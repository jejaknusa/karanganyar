import { getLocalizedUrl } from "intlayer";
import React, {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { useLocale } from "react-intlayer";

interface LinkProps extends ComponentPropsWithoutRef<"a"> {
  children: ReactNode;
  href: string;
}
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  function (props, ref) {
    const { href, children, ...other } = props;
    const { locale } = useLocale();
    return (
      <a href={getLocalizedUrl(href, locale)} {...other} ref={ref}>
        {children}
      </a>
    );
  },
);
