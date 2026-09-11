import type { ComponentType, SVGProps } from "react";

import { formatPricePln } from "@/lib/price";
import { useCaseSchema, type UseCase } from "@/types/build";

import {
  BoltIcon,
  ChipIcon,
  ComponentIcon,
  DesktopIcon,
  ResponsiveIcon,
} from "../design-system/icons";
import { SectionHeading } from "./SectionHeading";
import { useCaseLabels } from "./labels";

type UseCaseDetails = {
  description: string;
  /** Próg wejścia w pełnych złotówkach. */
  fromPln: number;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

/**
 * Rekord po `UseCase`, nie tablica — kompilator wymusi uzupełnienie opisu,
 * gdy do schematu dojdzie nowe zastosowanie.
 */
const useCaseDetails: Record<UseCase, UseCaseDetails> = {
  "gaming-4k": {
    description: "Wysokie klatki w nowych tytułach i ray tracing bez kompromisów.",
    fromPln: 7999,
    Icon: BoltIcon,
  },
  streaming: {
    description: "Kodowanie strumienia i gra naraz, bez zgubionych klatek.",
    fromPln: 5999,
    Icon: ResponsiveIcon,
  },
  "video-editing": {
    description: "Timeline 4K bez plików proxy i eksport, który nie zjada wieczoru.",
    fromPln: 8999,
    Icon: ComponentIcon,
  },
  "work-study": {
    description: "Cicho, oszczędnie i z zapasem mocy na kilka lat nauki i pracy.",
    fromPln: 3499,
    Icon: DesktopIcon,
  },
  "ai-ml": {
    description: "Dużo pamięci VRAM pod modele uruchamiane lokalnie.",
    fromPln: 11999,
    Icon: ChipIcon,
  },
};

export function UseCasesSection() {
  return (
    <section
      id="zastosowania"
      aria-labelledby="zastosowania-heading"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8">
        <SectionHeading
          headingId="zastosowania-heading"
          eyebrow="Zastosowania"
          title="Do czego będziesz go używać?"
          lead="Od tego zaczyna dobór asystent — reszta parametrów wynika z odpowiedzi na to jedno pytanie."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {useCaseSchema.options.map((useCase) => {
            const { description, fromPln, Icon } = useCaseDetails[useCase];

            return (
              <li
                key={useCase}
                className="flex min-w-0 flex-col rounded-xl border border-neutral-200 bg-neutral-50 p-6 transition-[border-color,box-shadow] duration-component-min ease-4kpc hover:border-primary-400 hover:shadow-level-1"
              >
                <Icon className="size-7 text-cta" />
                <p className="mt-5 font-display text-title text-neutral-950">
                  {useCaseLabels[useCase]}
                </p>
                <p className="mt-2 grow text-body-s text-neutral-600">
                  {description}
                </p>
                <p className="mt-5 text-label-l text-neutral-800">
                  {`od ${formatPricePln(fromPln)}`}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
