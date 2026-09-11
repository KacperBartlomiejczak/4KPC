import {
  BoltIcon,
  CrosshairIcon,
  OverlapIcon,
} from "../design-system/icons";
import { SectionHeading } from "./SectionHeading";

const principles = [
  {
    number: "01",
    title: "Precyzyjny dobór",
    description:
      "Każdy podzespół pasuje do reszty i do Twojego budżetu. Żadnych wąskich gardeł, za które płacisz dwa razy.",
    Icon: CrosshairIcon,
  },
  {
    number: "02",
    title: "Wydajność, którą widać",
    description:
      "Zestawy układamy pod realną pracę i realne gry, nie pod ładny wynik w syntetycznym benchmarku.",
    Icon: BoltIcon,
  },
  {
    number: "03",
    title: "Prostota premium",
    description:
      "Bez żargonu i tabelek na trzy ekrany. Mówisz, co chcesz robić — dostajesz gotową odpowiedź.",
    Icon: OverlapIcon,
  },
] as const;

export function PrinciplesSection() {
  return (
    <section
      id="dlaczego"
      aria-labelledby="dlaczego-heading"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
        <SectionHeading
          headingId="dlaczego-heading"
          eyebrow="Dlaczego 4KPC"
          title="Sprzęt dobrany precyzyjnie, nie na oko."
          lead="Ta sama zasada, co w naszym design systemie: spójnie, świadomie, bez przypadkowych decyzji."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map(({ number, title, description, Icon }) => (
            <article
              key={number}
              className="flex min-w-0 flex-col rounded-xl border border-neutral-200 bg-neutral-50 p-6 transition-[box-shadow,transform] duration-component-min ease-4kpc hover:-translate-y-1 hover:shadow-level-2"
            >
              <span className="text-label-m text-cta">{number}</span>
              <Icon className="mt-6 size-8 text-cta" />
              <h3 className="mt-6 font-display text-heading-s text-neutral-950">
                {title}
              </h3>
              <p className="mt-3 text-body-m text-neutral-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
