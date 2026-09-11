"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";

import type { ButtonState, ButtonVariant } from "@/types/design-component";

type ButtonProps = Omit<
  ComponentPropsWithoutRef<"button">,
  "disabled" | "aria-busy"
> & {
  variant?: ButtonVariant;
  /**
   * Stan wymuszony — plansza pokazuje hover/pressed obok siebie, więc muszą dać
   * się pokazać statycznie. W normalnym użyciu zostaw `default`, wtedy hover
   * i active obsługuje sam CSS.
   */
  state?: ButtonState;
  children: ReactNode;
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-2.5 " +
  "font-body text-label-l whitespace-nowrap " +
  "transition-[background-color,border-color,box-shadow,color] " +
  "duration-component-min ease-4kpc " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta";

const variantStateClasses: Record<ButtonVariant, Record<ButtonState, string>> = {
  primary: {
    default: "border border-transparent bg-cta text-white shadow-level-1",
    hover: "border border-transparent bg-cta-hover text-white shadow-level-2",
    pressed: "border border-transparent bg-cta-pressed text-white shadow-level-1",
    disabled: "border border-transparent bg-cta-disabled text-neutral-50",
    loading: "border border-transparent bg-cta text-white shadow-level-1",
  },
  secondary: {
    default: "border border-primary-300 bg-primary-300/25 text-cta",
    hover: "border border-primary-400 bg-primary-300/40 text-cta-hover shadow-level-1",
    pressed: "border border-primary-400 bg-primary-300/60 text-cta-pressed",
    disabled: "border border-neutral-200 bg-neutral-100 text-neutral-400",
    loading: "border border-primary-300 bg-primary-300/25 text-cta",
  },
  ghost: {
    default: "border border-neutral-200 bg-transparent text-cta",
    hover: "border border-neutral-200 bg-neutral-50 text-cta-hover shadow-level-1",
    pressed: "border border-neutral-200 bg-neutral-100 text-cta-pressed",
    disabled: "border border-neutral-100 bg-neutral-50 text-neutral-400",
    loading: "border border-neutral-200 bg-transparent text-cta",
  },
};

/** Prawdziwe hover/active — dokładane tylko wtedy, gdy stan nie jest wymuszony. */
const interactiveClasses: Record<ButtonVariant, string> = {
  primary:
    "hover:bg-cta-hover hover:shadow-level-2 active:bg-cta-pressed active:shadow-level-1",
  secondary:
    "hover:border-primary-400 hover:bg-primary-300/40 hover:text-cta-hover hover:shadow-level-1 active:bg-primary-300/60 active:text-cta-pressed",
  ghost:
    "hover:bg-neutral-50 hover:text-cta-hover hover:shadow-level-1 active:bg-neutral-100 active:text-cta-pressed",
};

function Spinner() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="size-4 shrink-0 animate-spin"
      fill="none"
    >
      <circle
        cx="8"
        cy="8"
        r="6.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeOpacity="0.3"
      />
      <path
        d="M14.5 8A6.5 6.5 0 0 0 8 1.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Button({
  variant = "primary",
  state = "default",
  className,
  children,
  ...props
}: ButtonProps) {
  const isLoading = state === "loading";
  const isDisabled = state === "disabled" || isLoading;

  const classes = [
    baseClasses,
    variantStateClasses[variant][state],
    state === "default" ? interactiveClasses[variant] : "",
    isDisabled ? "cursor-not-allowed" : "cursor-pointer",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      data-variant={variant}
      data-state={state}
      disabled={isDisabled}
      aria-busy={isLoading ? true : undefined}
      className={classes}
      {...props}
    >
      {isLoading ? <Spinner /> : null}
      {children}
    </button>
  );
}
