import { Wordmark } from "../design-system/Wordmark";

import { CtaLink } from "./CtaLink";
import { ImageSlot } from "./ImageSlot";

export function FinalCtaSection() {
  return (
    <section aria-labelledby="final-cta-heading" className="bg-neutral-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="relative isolate overflow-hidden rounded-2xl">
          <ImageSlot
            src="/media/brand-landscape.jpg"
            alt=""
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="absolute inset-0 h-full w-full"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, var(--color-neutral-950) 12%, rgba(7, 17, 31, 0.72) 58%, rgba(16, 42, 70, 0.35) 100%)",
            }}
          />

          <div className="relative flex flex-col gap-10 p-8 sm:p-12 lg:flex-row lg:items-end lg:justify-between lg:p-16">
            <div className="max-w-xl">
              <p className="text-caption tracking-[0.28em] text-neutral-400 uppercase">
                Więcej niż komputery
              </p>
              <h2
                id="final-cta-heading"
                className="mt-4 font-display text-heading-l leading-tight font-bold text-white uppercase sm:text-display-m"
              >
                Większe możliwości.
              </h2>
              <div className="mt-5 h-1 w-12 bg-primary-500" />
              <p className="mt-6 text-body-l text-neutral-400">
                Opisz, czego potrzebujesz. Resztę — dobór, kompatybilność,
                testy — bierzemy na siebie.
              </p>
              <CtaLink href="#brief" className="mt-8">
                Dobierz swój komputer
              </CtaLink>
            </div>

            <Wordmark className="shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
