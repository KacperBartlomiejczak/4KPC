import { Section } from "../Section";
import { designPrinciples } from "../content";
import { BoltIcon, CrosshairIcon, OverlapIcon } from "../icons";

const principleIcons = [CrosshairIcon, BoltIcon, OverlapIcon] as const;

/** 01 — Design Principles. */
export function PrinciplesSection({ className }: { className?: string }) {
  return (
    <Section number="01" title="Design Principles" className={className}>
      <div className="grid gap-4 sm:grid-cols-3">
        {designPrinciples.map((principle, index) => {
          const Icon = principleIcons[index];
          return (
            <article
              key={principle.index}
              className="rounded-lg border border-neutral-200 bg-white p-5 text-center"
            >
              <p className="text-left text-label-m text-cta">
                {principle.index}
              </p>
              <Icon
                className={`mx-auto my-4 size-10 ${
                  index === 1 ? "text-primary-500" : "text-neutral-950"
                }`}
              />
              <h3 className="font-display text-heading-s text-neutral-950">
                {principle.title.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h3>
              <p className="mt-3 text-body-s text-neutral-600">
                {principle.description.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
