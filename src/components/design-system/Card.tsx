import type { ComponentPropsWithoutRef } from "react";

import type { CardVariant } from "@/types/design-component";

type CardProps = Omit<
  ComponentPropsWithoutRef<"div">,
  "aria-current" | "aria-disabled"
> & {
  variant?: CardVariant;
};

const variantClasses: Record<CardVariant, string> = {
  default: "border border-neutral-100 bg-white shadow-level-1",
  outlined: "border border-neutral-200 bg-white shadow-level-0",
  elevated: "border border-transparent bg-white shadow-level-2",
  hover: "border-2 border-primary-400 bg-white shadow-level-2",
  selected: "border-2 border-cta bg-white shadow-level-1",
  disabled: "border border-neutral-200 bg-neutral-100 shadow-level-0",
};

export function Card({
  variant = "default",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      data-variant={variant}
      aria-current={variant === "selected" ? true : undefined}
      aria-disabled={variant === "disabled" ? true : undefined}
      className={[
        "rounded-lg transition-[border-color,box-shadow] duration-component-min ease-4kpc",
        variantClasses[variant],
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
