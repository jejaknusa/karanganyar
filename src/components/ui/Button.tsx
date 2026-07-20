import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "link" | "accent";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      type = "button",
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    // Base styles applied to all button variants
    const baseClasses =
      "inline-flex items-center justify-center gap-2 font-geist cursor-pointer select-none transition-all duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/40 disabled:pointer-events-none disabled:opacity-50 rounded-full";

    // Style specifications based on variants
    const variantStyles = {
      primary:
        "bg-primary text-secondary hover:bg-primary/90 hover:shadow-md active:scale-[0.98] px-8 py-2",
      accent:
        "bg-accent text-primary hover:bg-accent/90 hover:shadow-md active:scale-[0.98] px-8 py-2",
      outline:
        "border border-2 border-primary/80 bg-transparent text-primary hover:bg-primary/5 hover:border-primary active:scale-[0.98] px-8 py-2",
      ghost:
        "bg-transparent text-primary hover:bg-primary/5 active:scale-[0.98] p-2 rounded-full",
      link: "bg-transparent text-primary underline-offset-4 hover:underline p-0! h-auto!",
    };

    // Combine classes, removing any extra whitespace or falsy values
    const combinedClasses = cn([
      baseClasses,
      variantStyles[variant],
      className,
    ]);

    return (
      <button
        ref={ref}
        type={type}
        className={combinedClasses}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
