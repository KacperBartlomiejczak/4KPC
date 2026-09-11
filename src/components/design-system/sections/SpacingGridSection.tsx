import { Section, SpecRow } from "../Section";
import { gridSpec, spacingScale } from "../content";

const LARGEST_STEP_PX = 160;

/** 04 — Spacing & Grid. */
export function SpacingGridSection({ className }: { className?: string }) {
  return (
    <Section number="04" title="Spacing &amp; Grid" className={className}>
      <h3 className="mb-4 text-label-l text-neutral-950">Spacing (Base 8)</h3>

      <div className="flex h-24 items-end gap-1.5 sm:gap-2">
        {spacingScale.map((value) => (
          <div
            key={value}
            className="flex-1 rounded-t-sm bg-primary-300"
            style={{ height: `${(value / LARGEST_STEP_PX) * 100}%` }}
          />
        ))}
      </div>
      <div className="mt-2 flex gap-1.5 border-b border-neutral-200 pb-2 sm:gap-2">
        {spacingScale.map((value) => (
          <p
            key={value}
            className="flex-1 text-center text-caption text-neutral-950"
          >
            {value}
          </p>
        ))}
      </div>
      <div className="mt-2 flex gap-1.5 sm:gap-2">
        {spacingScale.map((value, index) => (
          <p
            key={value}
            className="flex-1 text-center text-caption text-neutral-600"
          >
            {index + 1}
          </p>
        ))}
      </div>

      <h3 className="mt-8 mb-4 text-label-l text-neutral-950">
        Grid System (Desktop 1440–3840)
      </h3>
      <div className="grid gap-5 sm:grid-cols-2">
        <div
          aria-hidden="true"
          className="flex h-40 gap-1 rounded-md bg-primary-300/25 p-1"
        >
          {Array.from({ length: 12 }, (_, index) => (
            <div key={index} className="flex-1 bg-primary-300/70" />
          ))}
        </div>
        <dl className="self-start">
          {gridSpec.map((row) => (
            <SpecRow key={row.label} {...row} />
          ))}
        </dl>
      </div>
    </Section>
  );
}
