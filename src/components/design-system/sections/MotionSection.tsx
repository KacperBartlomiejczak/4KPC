import { Section, SpecRow } from "../Section";
import { motionTokens } from "../content";
import { BoltIcon } from "../icons";

/** 08 — Motion. */
export function MotionSection({ className }: { className?: string }) {
  return (
    <Section number="08" title="Motion" className={className}>
      <div className="flex items-center gap-5">
        <BoltIcon className="size-10 shrink-0 text-neutral-950" />
        <dl className="min-w-0 flex-1">
          {motionTokens.map((row) => (
            <SpecRow key={row.label} {...row} />
          ))}
        </dl>
      </div>
    </Section>
  );
}
