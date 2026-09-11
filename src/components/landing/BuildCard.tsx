import { Card } from "../design-system/Card";
import { formatPricePln } from "@/lib/price";
import type { Build } from "@/types/build";

import { CtaLink } from "./CtaLink";
import { ImageSlot } from "./ImageSlot";
import { SpecChips } from "./SpecChips";
import { buildTierLabels, useCaseLabels } from "./labels";

type BuildCardProps = {
  build: Build;
  /** Zestaw wyróżniony na planszy sekcji — dokładnie jeden. */
  highlighted?: boolean;
};

export function BuildCard({ build, highlighted = false }: BuildCardProps) {
  return (
    <Card
      variant={highlighted ? "selected" : "default"}
      className="flex h-full min-w-0 flex-col overflow-hidden transition-[box-shadow,transform] duration-component-min ease-4kpc hover:-translate-y-1 hover:shadow-level-2"
    >
      <div className="relative">
        <ImageSlot
          src={build.imagePath}
          alt={build.name}
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="aspect-16/10 w-full"
        />
        {highlighted ? (
          <p className="absolute top-4 left-4 rounded-full bg-cta px-3 py-1 text-label-m text-white shadow-level-1">
            Najczęściej wybierany
          </p>
        ) : null}
      </div>

      <div className="flex grow flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-primary-300/25 px-3 py-1 text-label-m text-cta">
            {buildTierLabels[build.tier]}
          </span>
          <span className="rounded-full border border-neutral-200 px-3 py-1 text-label-m text-neutral-600">
            {useCaseLabels[build.useCase]}
          </span>
        </div>

        <h3 className="mt-5 font-display text-heading-s text-neutral-950">
          {build.name}
        </h3>
        <p className="mt-2 text-body-m text-neutral-600">{build.tagline}</p>

        <div className="mt-6">
          <SpecChips specs={build.specs} />
        </div>

        <div className="mt-7 flex grow flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-body-s text-neutral-400">Cena zestawu</p>
            <p className="font-display text-heading-s text-neutral-950">
              {formatPricePln(build.pricePln)}
            </p>
          </div>
          <CtaLink
            href="#brief"
            variant={highlighted ? "primary" : "outline"}
            aria-label={`Wybierz ten zestaw: ${build.name}`}
            className="px-5 py-2.5"
          >
            Wybierz ten zestaw
          </CtaLink>
        </div>
      </div>
    </Card>
  );
}
