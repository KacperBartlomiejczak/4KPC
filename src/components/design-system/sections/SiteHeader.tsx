import { Wordmark } from "../Wordmark";

/** Ciemny pasek na górze planszy. */
export function SiteHeader() {
  return (
    <header
      className="px-5 py-7 sm:px-8"
      style={{
        background:
          "linear-gradient(105deg, var(--color-neutral-950) 0%, var(--color-primary-900) 34%, var(--color-primary-700) 52%, var(--color-neutral-950) 100%)",
      }}
    >
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-x-8 gap-y-5">
        <Wordmark />

        <div
          aria-hidden="true"
          className="hidden h-14 w-px bg-neutral-600 sm:block"
        />

        <div>
          <h1 className="font-display text-heading-m text-white">
            Design System v1.0
          </h1>
          <p className="text-body-m text-neutral-400">
            Components for a higher standard.
          </p>
        </div>

        <div className="ml-auto hidden text-right lg:block">
          {["PERFORMANCE", "PRECISION", "POSSIBILITIES"].map((word) => (
            <p
              key={word}
              className="text-caption tracking-[0.3em] text-neutral-400"
            >
              {word}
            </p>
          ))}
          <div className="mt-2 ml-auto h-0.5 w-10 bg-primary-500" />
        </div>
      </div>
    </header>
  );
}
