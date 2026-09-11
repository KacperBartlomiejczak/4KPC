import type { ReactNode } from "react";

/**
 * Przycisk-link. `Button` z design systemu renderuje `<button>`, a kotwice
 * na landingu muszą być linkami (rola `link`, `href`, działające
 * „otwórz w nowej karcie”), więc styl jest przepisany na tych samych tokenach.
 */

type CtaVariant = "primary" | "outline" | "outlineDark";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: CtaVariant;
  className?: string;
  "aria-label"?: string;
};

const variantClasses: Record<CtaVariant, string> = {
  primary:
    "bg-cta text-white shadow-level-2 hover:bg-cta-hover hover:shadow-level-3 active:bg-cta-pressed",
  outline:
    "border border-neutral-200 bg-white text-cta hover:border-primary-400 hover:bg-neutral-50 active:bg-neutral-100 active:text-cta-pressed",
  outlineDark:
    "border border-white/25 bg-white/5 text-white hover:border-white/50 hover:bg-white/10 active:bg-white/15",
};

export function CtaLink({
  href,
  children,
  variant = "primary",
  className,
  ...props
}: CtaLinkProps) {
  return (
    <a
      href={href}
      className={[
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3",
        "font-body text-label-l whitespace-nowrap",
        "transition-[background-color,border-color,box-shadow,color] duration-component-min ease-4kpc",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta",
        variantClasses[variant],
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </a>
  );
}
