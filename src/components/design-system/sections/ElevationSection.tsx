import { Section } from "../Section";
import { elevationTokens } from "../content";

/** 06 — Elevation (Shadows). */
export function ElevationSection({ className }: { className?: string }) {
  return (
    <Section number="06" title="Elevation (Shadows)" className={className}>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
        {elevationTokens.map((token) => (
          <div key={token.name}>
            <div
              className={`mb-4 size-16 rounded-lg bg-white ${token.className}`}
            />
            <p className="text-label-m text-neutral-950">{token.name}</p>
            <p className="text-caption text-neutral-600">{token.offset}</p>
            {token.color ? (
              <p className="text-caption break-words text-neutral-600">
                {token.color}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
