import type { ReactNode } from "react";

type SectionProps = {
  /** Numer z planszy, np. "01". */
  number: string;
  title: string;
  children: ReactNode;
  className?: string;
};

/** Panel sekcji — biała karta z numerowanym nagłówkiem, jak na planszy. */
export function Section({ number, title, children, className }: SectionProps) {
  return (
    <section
      id={`section-${number}`}
      className={[
        "min-w-0 rounded-xl border border-neutral-200 bg-neutral-50 p-5 sm:p-6",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <h2 className="mb-6 flex items-center gap-3">
        <span className="rounded-sm bg-primary-300/25 px-1.5 py-0.5 font-body text-label-l text-cta">
          {number}
        </span>
        <span className="font-display text-heading-s text-neutral-950">
          {title}
        </span>
      </h2>
      {children}
    </section>
  );
}

type SubPanelProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

/** Zagnieżdżona karta w sekcji 09 ("Button", "Input Field", "Card"). */
export function SubPanel({ title, children, className }: SubPanelProps) {
  return (
    <div
      className={[
        "rounded-lg border border-neutral-200 bg-white p-5",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <h3 className="mb-6 font-display text-title text-neutral-950">{title}</h3>
      {children}
    </div>
  );
}

type SpecRowProps = {
  label: string;
  value: string;
};

/** Wiersz tabelki "Columns / 12", "Gutter / 32px". */
export function SpecRow({ label, value }: SpecRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-neutral-200 py-2.5 last:border-b-0">
      <dt className="text-body-s text-neutral-800">{label}</dt>
      <dd className="text-body-s text-neutral-950">{value}</dd>
    </div>
  );
}
