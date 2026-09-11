import { Section } from "../Section";
import { implementationGuidelines } from "../content";
import {
  AccessibilityIcon,
  ComponentIcon,
  DocumentIcon,
  ResponsiveIcon,
  TagIcon,
  TokensIcon,
} from "../icons";

const guidelineIcons = [
  TokensIcon,
  AccessibilityIcon,
  ResponsiveIcon,
  ComponentIcon,
  TagIcon,
  DocumentIcon,
] as const;

/** 10 — Implementation Guidelines. */
export function GuidelinesSection({ className }: { className?: string }) {
  return (
    <Section
      number="10"
      title="Implementation Guidelines"
      className={className}
    >
      <div className="grid gap-6 sm:grid-cols-3 xl:grid-cols-6">
        {implementationGuidelines.map((guideline, index) => {
          const Icon = guidelineIcons[index];
          return (
            <div key={guideline.title}>
              <span className="mb-4 flex size-10 items-center justify-center rounded-md bg-primary-300/25">
                <Icon className="size-5 text-cta" />
              </span>
              <h3 className="text-label-l text-neutral-950">
                {guideline.title}
              </h3>
              <p className="mt-1.5 text-body-s text-neutral-600">
                {guideline.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
