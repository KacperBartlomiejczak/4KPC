import { BuildBriefForm } from "./BuildBriefForm";
import { CtaLink } from "./CtaLink";
import { ImageSlot } from "./ImageSlot";

const promises = [
  "Dobór pod budżet",
  "Sprawdzona kompatybilność",
  "Bez opłat za konfigurację",
] as const;

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4 shrink-0 text-primary-400"
    >
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(110% 120% at 82% 18%, var(--color-primary-700) 0%, var(--color-primary-900) 40%, var(--color-neutral-950) 76%)",
      }}
    >
      <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-28">
        <div className="lg:col-span-7">
          <p className="text-caption tracking-[0.28em] text-neutral-400 uppercase">
            Komputery o wysokiej wydajności
          </p>

          <h1 className="mt-5 max-w-xl font-display text-heading-l leading-[1.05] font-bold text-white uppercase sm:text-display-m lg:text-display-l">
            Zbudowany bez ograniczeń.
          </h1>

          <div className="mt-6 h-1 w-12 bg-primary-500" />

          <p className="mt-6 max-w-lg text-body-l text-neutral-400">
            Powiedz, do czego potrzebujesz komputera. Asystent AI dobierze
            podzespoły do Twojego budżetu — bez przekopywania forów i tabelek
            z benchmarkami.
          </p>

          <div
            id="brief"
            className="mt-9 max-w-lg rounded-xl border border-neutral-200 bg-white p-6 shadow-level-3"
          >
            <BuildBriefForm />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CtaLink href="#zestawy" variant="outlineDark">
              Zobacz gotowe zestawy
            </CtaLink>

            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {promises.map((promise) => (
                <li
                  key={promise}
                  className="flex items-center gap-2 text-body-s text-neutral-400"
                >
                  <CheckIcon />
                  {promise}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-5">
          <ImageSlot
            src="/media/hero-case.jpg"
            alt="Komputer 4KPC z podświetleniem w obudowie z panelem szklanym"
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="aspect-4/5 w-full rounded-xl shadow-level-3"
          />
        </div>
      </div>
    </section>
  );
}
