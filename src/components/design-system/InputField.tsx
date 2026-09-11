"use client";

import { useId, type ComponentPropsWithoutRef } from "react";

import type { InputState } from "@/types/design-component";

type InputFieldProps = Omit<
  ComponentPropsWithoutRef<"input">,
  "id" | "disabled" | "aria-invalid" | "aria-describedby"
> & {
  label: string;
  /** Stan wymuszony — plansza pokazuje focus i error statycznie, obok siebie. */
  state?: InputState;
  errorMessage?: string;
};

const stateClasses: Record<InputState, string> = {
  default:
    "border-neutral-200 bg-white text-neutral-800 " +
    "focus:border-cta focus:ring-2 focus:ring-cta/20",
  focus: "border-cta bg-white text-neutral-800 ring-2 ring-cta/20",
  error: "border-error bg-white text-neutral-800 ring-2 ring-error/15",
  disabled: "border-neutral-200 bg-neutral-100 text-neutral-400",
};

function ErrorIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="pointer-events-none absolute top-1/2 right-3 size-5 -translate-y-1/2"
    >
      <circle cx="10" cy="10" r="9" fill="currentColor" />
      <path
        d="M10 5.5v5M10 13.75h.008"
        stroke="white"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function InputField({
  label,
  state = "default",
  errorMessage,
  className,
  ...props
}: InputFieldProps) {
  const inputId = useId();
  const messageId = useId();

  const isError = state === "error";
  const hasMessage = isError && errorMessage !== undefined;

  return (
    <div className="flex w-full flex-col gap-1.5 font-body">
      <label htmlFor={inputId} className="text-label-m text-neutral-800">
        {label}
      </label>

      <div className={`relative ${isError ? "text-error" : ""}`}>
        <input
          id={inputId}
          disabled={state === "disabled"}
          aria-invalid={isError ? true : undefined}
          aria-describedby={hasMessage ? messageId : undefined}
          className={[
            "w-full rounded-md border px-4 py-2.5 text-body-m outline-none",
            "placeholder:text-neutral-400",
            "transition-[border-color,box-shadow] duration-component-min ease-4kpc",
            isError ? "pr-11" : "",
            stateClasses[state],
            className ?? "",
          ]
            .filter(Boolean)
            .join(" ")}
          {...props}
        />
        {isError ? <ErrorIcon /> : null}
      </div>

      {hasMessage ? (
        <p id={messageId} role="alert" className="text-body-s text-error">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}
