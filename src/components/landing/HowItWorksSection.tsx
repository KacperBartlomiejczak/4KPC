import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    number: "01",
    title: "Opisz swoje potrzeby",
    description:
      "Własnymi słowami: w co grasz, w czym pracujesz, ile chcesz wydać. Bez nazw podzespołów.",
  },
  {
    number: "02",
    title: "AI dobiera podzespoły",
    description:
      "Model czyta wymagania, sprawdza kompatybilność i układa zestaw mieszczący się w budżecie.",
  },
  {
    number: "03",
    title: "Porównaj i dopasuj",
    description:
      "Podmień dowolny element, filtruj po producencie, cenie i wydajności. Widzisz, co się zmienia.",
  },
  {
    number: "04",
    title: "Zamawiasz gotowy zestaw",
    description:
      "Składamy, testujemy pod obciążeniem i wysyłamy komputer gotowy do pracy.",
  },
] as const;

export function HowItWorksSection() {
  return (
    <section
      id="jak-to-dziala"
      aria-labelledby="jak-to-dziala-heading"
      className="bg-neutral-50 py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
        <SectionHeading
          headingId="jak-to-dziala-heading"
          eyebrow="Jak to działa"
          title="Cztery kroki od pomysłu do komputera."
          lead="Od opisu w jednym zdaniu do zestawu, który da się zamówić."
        />

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ number, title, description }) => (
            <li
              key={number}
              className="relative flex min-w-0 flex-col rounded-xl border border-neutral-200 bg-white p-6 shadow-level-1"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary-300/25 font-display text-label-l text-cta">
                {number}
              </span>
              <h3 className="mt-5 font-display text-title text-neutral-950">
                {title}
              </h3>
              <p className="mt-3 text-body-s text-neutral-600">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
