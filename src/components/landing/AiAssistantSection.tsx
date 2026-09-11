import { CtaLink } from "./CtaLink";
import { SectionHeading } from "./SectionHeading";

const suggestedParts = [
  "Ryzen 9 7950X",
  "RTX 4080 SUPER",
  "64 GB DDR5",
] as const;

export function AiAssistantSection() {
  return (
    <section
      id="asystent"
      aria-labelledby="asystent-heading"
      className="py-20 sm:py-24"
      style={{
        background:
          "linear-gradient(150deg, var(--color-neutral-950) 0%, var(--color-primary-900) 48%, var(--color-primary-700) 100%)",
      }}
    >
      <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <SectionHeading
            headingId="asystent-heading"
            eyebrow="Asystent AI"
            title="Pytasz jak człowieka, dostajesz konkret."
            lead="Żadnych suwaków i checkboxów na start. Piszesz, co chcesz robić — asystent tłumaczy to na podzespoły i uzasadnia wybór."
            tone="dark"
          />

          <CtaLink href="#brief" className="mt-9">
            Opisz swoje potrzeby
          </CtaLink>
        </div>

        <div className="min-w-0 lg:col-span-7">
          <div className="rounded-xl border border-white/10 bg-neutral-950/60 p-5 shadow-level-3 backdrop-blur-sm sm:p-7">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col items-end gap-2">
                <p className="text-caption tracking-[0.18em] text-neutral-400 uppercase">
                  Ty
                </p>
                <p className="max-w-md rounded-xl rounded-tr-sm bg-cta px-4 py-3 text-body-s text-white">
                  Montuję filmy 4K w DaVinci, czasem gram. Budżet 12 000 zł.
                </p>
              </div>

              <div className="flex flex-col items-start gap-2">
                <p className="text-caption tracking-[0.18em] text-primary-300 uppercase">
                  Asystent 4KPC
                </p>
                <p className="max-w-lg rounded-xl rounded-tl-sm bg-white/10 px-4 py-3 text-body-s text-neutral-200">
                  Proponuję Ryzen 9 7950X, RTX 4080 SUPER i 64 GB DDR5. Eksport
                  4K schodzi do kilku minut, a w grach zostaje zapas na 4K przy
                  120 klatkach.
                </p>
                <div className="flex flex-wrap gap-2">
                  {suggestedParts.map((part) => (
                    <span
                      key={part}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-label-m text-neutral-200"
                    >
                      {part}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-6 border-t border-white/10 pt-4 text-caption text-neutral-400">
              Przykładowa rozmowa. Asystent jest w budowie — na razie strona
              niczego nie wysyła do modelu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
