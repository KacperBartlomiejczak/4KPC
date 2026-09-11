import { Section } from "../Section";
import { Swatch } from "../Swatch";
import { colorGroups } from "../content";

type ColorGroupProps = (typeof colorGroups)[number];

function ColorGroup({ label, tokens }: ColorGroupProps) {
  return (
    <div>
      <h3 className="mb-3 text-label-l text-neutral-950">{label}</h3>
      {/* Mobile trzyma się siatki 4-kolumnowej z sekcji 07, od sm jeden rząd. */}
      <div className="grid grid-cols-4 gap-2 sm:flex">
        {tokens.map((token) => (
          <div key={token.name} className="min-w-0 sm:flex-1">
            <Swatch {...token} />
          </div>
        ))}
      </div>
    </div>
  );
}

/** 02 — Color Palette. */
export function ColorPaletteSection({ className }: { className?: string }) {
  const [primary, secondary, neutral, ...feedback] = colorGroups;

  return (
    <Section number="02" title="Color Palette" className={className}>
      <div className="flex flex-col gap-6">
        {/* Primary ma 5 próbek, Secondary 4 — równe połówki ucinałyby hexy. */}
        <div className="grid gap-6 sm:grid-cols-[5fr_4fr]">
          <ColorGroup {...primary} />
          <ColorGroup {...secondary} />
        </div>

        <ColorGroup {...neutral} />

        <div className="grid gap-6 sm:grid-cols-2">
          {feedback.map((group) => (
            <ColorGroup key={group.label} {...group} />
          ))}
        </div>
      </div>
    </Section>
  );
}
