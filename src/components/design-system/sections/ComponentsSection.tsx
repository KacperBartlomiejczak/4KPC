import { Section } from "../Section";
import { ButtonShowcase } from "./ButtonShowcase";
import { CardShowcase } from "./CardShowcase";
import { InputShowcase } from "./InputShowcase";

/** 09 — Components. */
export function ComponentsSection({ className }: { className?: string }) {
  return (
    <Section number="09" title="Components" className={className}>
      <div className="grid gap-4 xl:grid-cols-12">
        <ButtonShowcase className="xl:col-span-4" />
        <InputShowcase className="xl:col-span-3" />
        <CardShowcase className="xl:col-span-5" />
      </div>
    </Section>
  );
}
