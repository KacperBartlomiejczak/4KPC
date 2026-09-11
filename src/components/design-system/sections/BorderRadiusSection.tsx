import { Section } from "../Section";
import { radiusTokens } from "../content";

/** 05 — Border Radius. */
export function BorderRadiusSection({ className }: { className?: string }) {
  return (
    <Section number="05" title="Border Radius" className={className}>
      <div className="grid grid-cols-3 gap-4">
        {radiusTokens.map((token) => (
          <div key={token.name} className="text-center">
            <div
              className={`mx-auto size-14 border border-neutral-400 bg-white ${token.className}`}
            />
            <p className="mt-2 text-caption text-neutral-950">{token.label}</p>
            <p className="text-caption text-neutral-600">{token.name}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
